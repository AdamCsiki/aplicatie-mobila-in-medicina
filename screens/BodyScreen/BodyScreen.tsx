import { ScrollView } from 'react-native'
import { Layout, Text, Button } from '@ui-kitten/components'
import style from './BodyScreen.style'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Spacer from '../../components/Spacer/Spacer'
import FullScreenModal from '../../components/FullScreenModal/FullScreenModal'
import SetupBodyScreen from '../SetupBodyScreen/SetupBodyScreen'
import { useEffect, useState } from 'react'
import { bodyFatPercentage, calculateBMI } from '../../misc/Equations'
import gstyle from '../../styles/global-style'
import DataTable from '../../components/Table/Table'

function BodyScreen({ navigation }: { navigation: any }) {
    const body = useSelector((state: RootState) => state.body)

    const [bodyEditVisible, setBodyEditVisible] = useState(false)

    return (
        <Layout style={{ flex: 1 }} level={'4'}>
            <ScrollView
                contentContainerStyle={{
                    ...style.DetailsScreen,
                }}
                scrollEnabled
                showsVerticalScrollIndicator
            >
                <Layout style={gstyle.Container} level="1">
                    <Layout style={gstyle.Header}>
                        <Text category={'h4'}>Body</Text>
                        <Button onPress={() => setBodyEditVisible(true)}>
                            Edit
                        </Button>
                    </Layout>

                    <Spacer />

                    <DataTable
                        labels={['Sex', 'Age', 'Height', 'Weight']}
                        data={[body.sex, body.age, body.height, body.weight]}
                    />
                </Layout>

                <Spacer />

                <Layout style={gstyle.Container}>
                    <Layout style={gstyle.Header}>
                        <Text category={'h5'}>Body mass index (BMI)</Text>
                    </Layout>

                    <Spacer />

                    <DataTable
                        labels={['BMI', 'Body fat percentage']}
                        data={[
                            calculateBMI(body.weight, body.height).toFixed(2) +
                                ' Kg/m\xB2',
                            bodyFatPercentage(
                                body.weight,
                                body.height,
                                body.age
                            ).toFixed(2) + '%',
                        ]}
                    />
                </Layout>

                <Spacer />

                <Layout style={gstyle.Container}>
                    <Layout style={gstyle.Header}>
                        <Text category={'h5'} style={{ textAlign: 'left' }}>
                            Basal metabolic rate (BMR)
                        </Text>
                    </Layout>

                    <Spacer height={32} />

                    <DataTable
                        labels={['Equation used', 'BMR']}
                        data={[body.BMR_equation, body.BMR + ' Kcal/day']}
                    />
                </Layout>

                <Spacer />

                <Layout style={gstyle.Container}>
                    <Layout style={gstyle.Header}>
                        <Text category={'h5'} style={{ textAlign: 'left' }}>
                            Resting metabolic rate (RMR)
                        </Text>
                    </Layout>

                    <Spacer height={32} />

                    <DataTable
                        labels={['Equation used', 'RMR']}
                        data={[body.RMR_equation, body.RMR + ' Kcal/day']}
                    />
                </Layout>

                <FullScreenModal
                    visible={bodyEditVisible}
                    onBackdropPress={() => setBodyEditVisible(false)}
                >
                    <SetupBodyScreen
                        onBack={() => setBodyEditVisible(false)}
                        afterSubmit={() => setBodyEditVisible(false)}
                    />
                </FullScreenModal>
            </ScrollView>
        </Layout>
    )
}

export default BodyScreen
