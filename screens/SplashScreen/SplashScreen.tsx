import { Layout } from '@ui-kitten/components'
import { View } from 'react-native'
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withRepeat,
    withTiming,
} from 'react-native-reanimated'
import { useEffect } from 'react'

function LoadingCircle() {
    const circle = useSharedValue(0)

    const circleStyle = useAnimatedStyle(() => ({
        transform: [
            {
                rotateZ: circle.value + 'deg',
            },
        ],
    }))

    useEffect(() => {
        circle.value = withRepeat(withTiming(1, { duration: 1000 }), -1, false)
    }, [])

    return <Animated.View style={circleStyle} />
}
function SplashScreen() {
    return (
        <Layout>
            <LoadingCircle />
        </Layout>
    )
}

export default SplashScreen
