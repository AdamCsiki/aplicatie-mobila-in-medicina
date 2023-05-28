import { Button, Layout, Text } from '@ui-kitten/components'
import style from './SettingsScreen.style'
import CheckBox from 'expo-checkbox'
import { useContext } from 'react'
import { ThemeContext } from '../../themes/ThemeContext'
import Spacer from '../../components/Spacer/Spacer'
import gstyle from '../../styles/global-style'
import Select from '../../components/Select/Select'
import { HARRIS_EQUATION, MIFFLIN_EQUATION } from '../../redux/types/types'
import { setCurrentBMR } from '../../redux/actions/bodyActions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import {
    calculateBMR_harris,
    calculateBMR_mifflin,
} from '../../misc/MacroEquations'

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
            <Layout style={gstyle.Header}>
                <Text category={'h6'}>Equation used:</Text>
                <Select
                    defaultValue={body.BMR_equation}
                    data={[MIFFLIN_EQUATION, HARRIS_EQUATION]}
                    onSelect={(selectedItem, index) => {
                        let bmr = 0

                        switch (selectedItem) {
                            case MIFFLIN_EQUATION: {
                                bmr = calculateBMR_mifflin(
                                    body.weight,
                                    body.height,
                                    body.age,
                                    body.sex
                                )
                                break
                            }
                            case HARRIS_EQUATION: {
                                bmr = calculateBMR_harris(
                                    body.weight,
                                    body.height,
                                    body.age,
                                    body.sex
                                )
                                break
                            }
                        }

                        setCurrentBMR(selectedItem, bmr).then((action) => {
                            dispatch(action)
                        })
                    }}
                />
            </Layout>
        </Layout>
    )
}

export default SettingsScreen
