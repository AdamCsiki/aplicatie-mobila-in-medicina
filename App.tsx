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
import { createContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ThemeContext } from './themes/ThemeContext'

function App() {
    const [loaded] = useFonts({
        DMSans: require('./assets/fonts/DMSans-Regular.ttf'),
        DMSans_bold: require('./assets/fonts/DMSans-Bold.ttf'),
        Bauhaus: require('./assets/fonts/BauhausRegular.ttf'),
    })

    AsyncStorage.getItem('theme').then((theme) => {
        if (!theme || (theme != 'light' && theme != 'dark')) {
            return
        }
        console.log('theme', theme)
        setTheme(theme)
    })

    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    const toggleTheme = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light'

        AsyncStorage.setItem('theme', nextTheme).then(() => {
            setTheme(nextTheme)
        })
    }

    if (!loaded) {
        return <SplashScreen />
    }

    return (
        <Provider store={store}>
            <IconRegistry icons={EvaIconsPack} />
            <ThemeContext.Provider
                value={{ theme: theme, toggleTheme: toggleTheme }}
            >
                <ApplicationProvider
                    {...eva}
                    theme={{ ...eva[theme], ...customTheme }}
                    customMapping={{ ...eva.mapping, ...mapping }}
                >
                    <Layout style={style.App} level="1">
                        <AppNav />
                    </Layout>
                </ApplicationProvider>
            </ThemeContext.Provider>
        </Provider>
    )
}

export default App
