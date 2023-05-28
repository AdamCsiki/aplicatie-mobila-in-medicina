import { calculateBMI } from '../../misc/MacroEquations'
import { RadialSlider } from 'react-native-radial-slider'
import { RootSliderProps } from 'react-native-radial-slider/lib/components/RadialSlider/types'
import { useTheme } from '@ui-kitten/components'

export default (props: RootSliderProps) => {
    const theme = useTheme()

    return (
        // @ts-ignore
        <RadialSlider
            {...props}
            markerValueColor={theme['text-basic-color']}
            markerCircleColor={theme['text-basic-color']}
            lineColor={theme['text-basic-color']}
            needleColor={theme['text-basic-color']}
            needleBackgroundColor={theme['color-primary-500']}
            sliderTrackColor={theme['color-primary-500']}
            linearGradient={[
                { offset: '0%', color: theme['color-primary-200'] },
                { offset: '100%', color: theme['color-primary-500'] },
            ]}
            valueStyle={{ color: theme['text-basic-color'] }}
            unitStyle={{ color: theme['text-basic-color'] }}
            titleStyle={{ color: theme['text-basic-color'] }}
            subTitleStyle={{ color: theme['text-basic-color'] }}
            thumbColor={theme['text-basic-color']}
            thumbBorderColor={theme['text-basic-color']}
            isHideTailText={true}
        />
    )
}
