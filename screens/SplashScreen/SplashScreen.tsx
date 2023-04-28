import style from './SplashScreent.style'
import { ActivityIndicator, Text, View } from 'react-native'
import theme from '../../themes/custom-theme.json'

function SplashScreen() {
    return (
        <View style={style.SplashScreen}>
            <ActivityIndicator
                size={'large'}
                style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
                color={theme['color-primary-500']}
            />
        </View>
    )
}

export default SplashScreen
