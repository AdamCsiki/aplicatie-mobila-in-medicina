import { StyleSheet } from 'react-native'
import padding from '../../misc/padding'

export default StyleSheet.create({
    UserFoodItem: {
        height: 75,
        width: '100%',

        padding: 0,
        marginBottom: 8,

        borderRadius: 16,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        overflow: 'scroll',
    },
    FoodImageContainer: {
        flexGrow: 1,
    },
    FoodItemImage: {
        minWidth: 50,
        minHeight: 50,

        width: 60,
        height: 60,

        borderRadius: 16,
    },
    FoodItemMainContainer: {
        maxWidth: '65%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',

        flexGrow: 1,
    },
    FoodItemHeader: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    FoodItemDetails: {
        width: '100%',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',

        flexGrow: 1,
    },
    ButtonContainer: {
        height: '100%',
        width: '10%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        flexGrow: 1,
    },
    Button: {
        borderRadius: 16,

        padding: 0,
        margin: 0,

        borderWidth: 0,
        borderColor: '#00000000',
    },
    AddButton: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    RemoveButton: {
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
})
