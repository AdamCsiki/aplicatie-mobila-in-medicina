import style from './Slider.style'
import { Slider, SliderProps } from '@miblanchard/react-native-slider'
import { Layout, Text, useTheme } from '@ui-kitten/components'
import { Animated } from 'react-native'
import AnimatedValue = Animated.AnimatedValue
import Value = Animated.Value

interface CustomSliderProps extends SliderProps {
    sign?: string
}

export function SliderThumb({
    index,
    disabled,
    sign,
}: {
    index: AnimatedValue | Value | Number | Number[] | undefined
    disabled?: boolean
    sign?: string
}) {
    const theme = useTheme()
    return (
        <Layout
            style={{
                ...style.Thumb,
                backgroundColor: disabled
                    ? '#00000000'
                    : theme['color-basic-700'],
                borderWidth: 1,
                borderColor: disabled
                    ? '#00000000'
                    : theme['border-basic-color-2'],
            }}
        >
            {/*@ts-ignore*/}
            <Text style={style.ThumbText} category={'c1'}>
                {index}
                {sign}
            </Text>
        </Layout>
    )
}

export default (props?: CustomSliderProps) => {
    const theme = useTheme()

    return (
        <Slider
            animateTransitions={true}
            {...props}
            renderThumbComponent={() => (
                <SliderThumb
                    index={props?.value}
                    disabled={props?.disabled}
                    sign={props?.sign}
                />
            )}
            containerStyle={{
                ...props?.containerStyle,
                ...style.Container,
            }}
            trackStyle={{
                ...props?.containerStyle,
                ...style.Track,
                backgroundColor: theme['background-basic-color-4'],
            }}
        />
    )
}
