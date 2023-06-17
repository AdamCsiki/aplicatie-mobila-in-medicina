import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    UserFoodItem: {
        width: '100%',

        padding: 0,

        borderRadius: 16,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    FoodImageContainer: {
        flexGrow: 1,
    },
    FoodItemMainContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
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

        height: 30,
        width: 40,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        padding: 0,
        margin: 0,
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
