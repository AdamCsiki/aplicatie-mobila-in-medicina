import { TextInputSubmitEditingEventData } from 'react-native'
import style from './SearchInput.style'
import { Input } from '@ui-kitten/components'
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
        />
    )
}
export default SearchInput
