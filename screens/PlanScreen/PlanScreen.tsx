import { Button, Layout, Text } from '@ui-kitten/components'
import style from './PlanScreen.style'
import gstyle from '../../styles/global-style'
import Spacer from '../../components/Spacer/Spacer'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import DataTable from '../../components/Table/Table'
import FullScreenModal from '../../components/FullScreenModal/FullScreenModal'
import SetupPlanScreen from '../SetupPlanScreen/SetupPlanScreen'

function PlanScreen(props: any) {
    const body = useSelector((state: RootState) => state.body)

    const [editVisible, setEditVisible] = useState(false)

    return (
        <Layout style={style.PlanScreen} level={'4'}>
            <Layout style={gstyle.Container}>
                <Layout style={gstyle.Header}>
                    <Text category={'h5'}>Plan</Text>
                    <Button
                        onPress={() => {
                            setEditVisible(true)
                        }}
                    >
                        Edit
                    </Button>
                </Layout>

                <Spacer height={32} />

                <Layout style={gstyle.BasicContainer}>
                    <DataTable labels={['Activity: ']} data={[body.activity]} />
                </Layout>
            </Layout>

            <FullScreenModal
                visible={editVisible}
                onBackdropPress={() => setEditVisible(false)}
            >
                <SetupPlanScreen
                    onClose={() => setEditVisible(false)}
                    onCancel={() => setEditVisible(false)}
                    onDone={() => setEditVisible(false)}
                />
            </FullScreenModal>
        </Layout>
    )
}

export default PlanScreen
