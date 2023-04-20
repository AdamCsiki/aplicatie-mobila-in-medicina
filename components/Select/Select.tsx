import SelectDropdown, {
    SelectDropdownProps,
} from 'react-native-select-dropdown'
import style from './Select.style'
import { Text, useTheme } from '@ui-kitten/components'
import Icon from 'react-native-vector-icons/FontAwesome5'

function Select(props: SelectDropdownProps) {
    const theme = useTheme()

    return (
        <SelectDropdown
            {...props}
            renderDropdownIcon={() => <Icon name={'chevron-down'} />}
            buttonStyle={{
                ...style.Button,
                borderColor: theme['color-basic-400'],
                backgroundColor: theme['color-basic-200'],
            }}
            buttonTextStyle={{
                ...style.ButtonText,
                color: theme['color-basic-1000'],
            }}
            dropdownStyle={{
                ...style.Dropdown,
                backgroundColor: theme['color-basic-100'],
            }}
            onSelect={(selectedItem, index) => {
                props.onSelect(selectedItem, index)
            }}
        />
    )
}

export default Select
