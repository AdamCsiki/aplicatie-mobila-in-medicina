import { Button, Layout, Text } from '@ui-kitten/components'
import style from './SettingsScreen.style'
import CheckBox from 'expo-checkbox'
import { useContext } from 'react'
import { ThemeContext } from '../../themes/ThemeContext'
import Spacer from '../../components/Spacer/Spacer'

function SettingsScreen() {
    const themeContext = useContext(ThemeContext)

    return (
        <Layout style={style.SettingsScreen}>
            <Spacer />
            <Layout style={style.Container}>
                <Text category={'h6'}>
                    Current theme: {themeContext.theme.toUpperCase()}
                </Text>
                <Button onPress={themeContext.toggleTheme}>Switch theme</Button>
            </Layout>
        </Layout>
    )
}

export default SettingsScreen
