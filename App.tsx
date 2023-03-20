import 'react-native-gesture-handler'

import { useFonts } from 'expo-font'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, Layout } from '@ui-kitten/components'
import { IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

import style from './App.style'
import AppNav from './router/AppNav'

import { default as customTheme } from './themes/custom-theme.json'
import { default as mapping } from './themes/mapping.json'
import { Provider } from 'react-redux'
import store from './redux/store'
import SplashScreen from './screens/SplashScreen/SplashScreen'

function App() {
    const [loaded] = useFonts({
        DMSans: require('./assets/fonts/DMSans-Regular.ttf'),
        DMSans_bold: require('./assets/fonts/DMSans-Bold.ttf'),
        Bauhaus: require('./assets/fonts/BauhausRegular.ttf'),
    })

    if (!loaded) {
        return <SplashScreen />
    }

    return (
        <Provider store={store}>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider
                {...eva}
                theme={{ ...eva.light, ...customTheme }}
                customMapping={{ ...eva.mapping, ...mapping }}
            >
                <Layout style={style.App} level="1">
                    <AppNav />
                </Layout>
            </ApplicationProvider>
        </Provider>
    )
}

export default App
