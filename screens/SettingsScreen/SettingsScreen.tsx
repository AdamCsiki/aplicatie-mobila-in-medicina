import { Button, Layout, Text } from '@ui-kitten/components'
import style from './SettingsScreen.style'
import CheckBox from 'expo-checkbox'
import { useContext } from 'react'
import { ThemeContext } from '../../themes/ThemeContext'
import Spacer from '../../components/Spacer/Spacer'
import gstyle from '../../styles/global-style'
import Select from '../../components/Select/Select'
import { HARRIS_EQUATION, MIFFLIN_EQUATION } from '../../redux/types/types'
import { setCurrentBMR, setCurrentRMR } from '../../redux/actions/bodyActions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import {
    calculateBMR,
    calculateRMR,
    HARRIS_BMR,
    HARRIS_RMR,
    LUHRMANN_RMR,
    MIFFLIN_BMR,
    MIFFLIN_RMR,
    OWEN_RMR,
    WHO_RMR,
} from '../../misc/Equations'

function SettingsScreen() {
    const themeContext = useContext(ThemeContext)
    const body = useSelector((state: RootState) => state.body)
    const dispatch = useDispatch()

    return (
        <Layout style={style.SettingsScreen}>
            <Spacer />
            <Layout style={style.Container}>
                <Text category={'h6'}>
                    Current theme: {themeContext.theme.toUpperCase()}
                </Text>
                <Button onPress={themeContext.toggleTheme}>Switch theme</Button>
            </Layout>
            <Spacer />
            <Layout style={style.Container}>
                <Text category={'h6'}>BMR Equation:</Text>
                <Select
                    defaultValue={body.BMR_equation}
                    data={[MIFFLIN_BMR, HARRIS_BMR]}
                    onSelect={(selectedItem, index) => {
                        let bmr = calculateBMR(
                            selectedItem,
                            body.weight,
                            body.height,
                            body.age,
                            body.sex
                        )

                        setCurrentBMR(selectedItem, bmr).then((action) => {
                            dispatch(action)
                        })
                    }}
                />
            </Layout>
            <Spacer />
            <Layout style={style.Container}>
                <Text category={'h6'}>RMR Equation:</Text>
                <Select
                    defaultValue={body.RMR_equation}
                    data={[
                        MIFFLIN_RMR,
                        HARRIS_RMR,
                        OWEN_RMR,
                        LUHRMANN_RMR,
                        WHO_RMR,
                    ]}
                    onSelect={(selectedItem, index) => {
                        let bmr = calculateRMR(
                            selectedItem,
                            body.weight,
                            body.height,
                            body.age,
                            body.sex
                        )

                        setCurrentRMR(selectedItem, bmr).then((action) => {
                            dispatch(action)
                        })
                    }}
                />
            </Layout>
        </Layout>
    )
}

export default SettingsScreen
