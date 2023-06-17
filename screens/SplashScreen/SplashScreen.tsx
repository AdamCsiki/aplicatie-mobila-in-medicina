import style from './SplashScreent.style'
import { ActivityIndicator, View } from 'react-native'
import * as eva from '@eva-design/eva'
import customTheme from '../../themes/custom-theme.json'
import { useContext } from 'react'
import { ThemeContext } from '../../themes/ThemeContext'

function SplashScreen() {
    const theme = useContext(ThemeContext)
    return (
        <View
            style={{
                ...style.SplashScreen,
                backgroundColor:
                    theme.theme == 'light'
                        ? eva.light['background-basic-color-1']
                        : eva.dark['background-basic-color-1'],
            }}
        >
            <ActivityIndicator
                size={'large'}
                style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
                color={customTheme['color-primary-500']}
            />
        </View>
    )
}

export default SplashScreen
