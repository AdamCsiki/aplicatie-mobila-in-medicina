import { StyleSheet } from 'react-native'
import padding from '../../misc/padding'

export default StyleSheet.create({
    CreateFoodScreen: {
        flex: 1,

        padding: 16,
    },
    ScrollContainer: {
        display: 'flex',
        flexGrow: 1,
        padding: 16,
    },
    Header: {
        width: '100%',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    Container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    IngredientsContainer: {
        height: 400,
        width: '100%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    IngredientsList: {
        height: 200,
    },
    ImageContainer: {
        borderRadius: 16,

        width: 100,
        height: 100,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        overflow: 'hidden',
    },
})
