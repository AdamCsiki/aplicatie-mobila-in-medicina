import style from './Slider.style'
import { Slider, SliderProps } from '@miblanchard/react-native-slider'
import { Layout, Text, useTheme } from '@ui-kitten/components'
import { Animated } from 'react-native'
import AnimatedValue = Animated.AnimatedValue
import Value = Animated.Value

export function SliderThumb({
    index,
}: {
    index: AnimatedValue | Value | Number | Number[] | undefined
}) {
    const theme = useTheme()
    return (
        <Layout
            style={{
                ...style.Thumb,
                backgroundColor: theme['color-basic-700'],
            }}
        >
            <Text style={style.ThumbText} category={'c2'}>
                {index}
            </Text>
        </Layout>
    )
}

export default (props?: SliderProps) => (
    <Slider
        animateTransitions={true}
        {...props}
        renderThumbComponent={() => <SliderThumb index={props?.value} />}
        containerStyle={{ ...props?.containerStyle, ...style.Container }}
        trackStyle={{ ...props?.containerStyle, ...style.Track }}
    />
)
