import style from './Slider.style'
import { Slider, SliderProps } from '@miblanchard/react-native-slider'

export default (props?: SliderProps) => (
    <Slider
        {...props}
        containerStyle={{ ...props?.containerStyle, ...style.Container }}
        trackStyle={{ ...props?.containerStyle, ...style.Track }}
        thumbStyle={{ ...props?.thumbStyle, ...style.Thumb }}
    />
)
