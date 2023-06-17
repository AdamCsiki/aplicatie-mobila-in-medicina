import SelectDropdown, {
    SelectDropdownProps,
} from 'react-native-select-dropdown'
import style from './Select.style'
import { useTheme } from '@ui-kitten/components'
import Icon from 'react-native-vector-icons/FontAwesome5'

function Select(props: SelectDropdownProps) {
    const theme = useTheme()

    return (
        <SelectDropdown
            {...props}
            showsVerticalScrollIndicator={true}
            disableAutoScroll={true}
            statusBarTranslucent={true}
            renderDropdownIcon={() => (
                <Icon name={'chevron-down'} color={theme['text-basic-color']} />
            )}
            buttonStyle={{
                ...style.Button,
                borderColor: theme['border-basic-color-1'],
                backgroundColor: theme['background-basic-color-3'],
            }}
            buttonTextStyle={{
                ...style.ButtonText,
                color: theme['text-basic-color'],
            }}
            dropdownStyle={{
                ...style.Dropdown,
                backgroundColor: theme['background-basic-color-3'],
            }}
            rowStyle={{ ...style.Row }}
            rowTextStyle={{
                color: theme['text-basic-color'],
            }}
        />
    )
}

export default Select
