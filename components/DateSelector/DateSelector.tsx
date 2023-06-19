import { Layout, Text, useTheme } from '@ui-kitten/components'
import { TouchableOpacity } from 'react-native'
import style from './DatePicker.style'
import { getFormattedDateBeautify } from '../../misc/dateFormatting'

function DateSelector({
    selectedDay,
    onNextDay,
    onNextLong,
    onPrevDay,
    nextDisabled = false,
    prevDisabled = false,
}: {
    selectedDay: Date
    onNextDay: () => void
    onNextLong: () => void
    onPrevDay: () => void
    nextDisabled: boolean
    prevDisabled: boolean
}) {
    const theme = useTheme()

    return (
        <Layout style={style.dayPicker}>
            <TouchableOpacity
                disabled={prevDisabled}
                onPress={onPrevDay}
                style={{ ...style.button }}
            >
                <Text
                    category={'h5'}
                    style={{
                        ...style.buttonText,
                        color: theme['color-primary-500'],
                    }}
                >
                    {'<<'}
                </Text>
            </TouchableOpacity>
            <Text style={style.dateText}>
                {getFormattedDateBeautify(selectedDay)}
            </Text>
            <TouchableOpacity
                disabled={nextDisabled}
                onPress={onNextDay}
                onLongPress={onNextLong}
                style={style.button}
            >
                <Text
                    category={'h5'}
                    style={{
                        ...style.buttonText,
                        color: nextDisabled
                            ? theme['color-basic-500']
                            : theme['color-primary-500'],
                    }}
                >
                    {'>>'}
                </Text>
            </TouchableOpacity>
        </Layout>
    )
}

export default DateSelector
