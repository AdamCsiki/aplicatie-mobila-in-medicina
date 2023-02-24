import { View, Text, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import style from './SearchInput.style'
import Colors from '../../constants/Colors'
import Icon from 'react-native-vector-icons/Entypo'
import { useRef } from 'react'

function SearchInput({
    placeholder,
    onChangeText,
}: {
    placeholder?: string
    onChangeText?: (text: string) => void
}) {
    const textInputRef: any = useRef()

    return (
        <View style={style.SearchInput}>
            <TextInput
                ref={textInputRef}
                style={style.TextInput}
                placeholder={placeholder ?? 'Search'}
                textAlign={'left'}
                onChangeText={onChangeText}
            ></TextInput>

            <TouchableOpacity
                onPress={() => {
                    if (textInputRef.current.isFocused()) {
                        textInputRef.current.blur()
                    } else {
                        textInputRef.current.focus()
                    }
                }}
            >
                <Icon name="magnifying-glass" size={30} />
            </TouchableOpacity>
        </View>
    )
}

export default SearchInput
