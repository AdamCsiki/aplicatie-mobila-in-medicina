import {
    View,
    Text,
    TouchableOpacity,
    TextInputSubmitEditingEventData,
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import style from './SearchInput.style'
import Icon from 'react-native-vector-icons/Entypo'
import { useRef } from 'react'
import { Input, Layout } from '@ui-kitten/components'
import { NativeEvent } from 'react-native-reanimated/lib/types'

function SearchInput({
    placeholder,
    onChangeText,
    onSubmitEditing,
}: {
    placeholder?: string
    onChangeText?: (text: string) => void
    onSubmitEditing?: (
        event: NativeEvent<TextInputSubmitEditingEventData>
    ) => void
}) {
    return (
        <Input
            style={style.TextInput}
            placeholder={placeholder ?? 'Search'}
            textAlign={'left'}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
        ></Input>
    )
}

export default SearchInput
