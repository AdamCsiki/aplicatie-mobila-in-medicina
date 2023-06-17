import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    ProgressBarContainer: {
        width: '100%',
        maxHeight: 64,

        display: 'flex',
        flexDirection: 'column',
    },
    ProgressBarBackground: {
        maxHeight: 12,
        width: '100%',
        position: 'relative',

        borderRadius: 16,
    },
    ProgressBar: {
        height: '100%',

        borderRadius: 16,

        display: 'flex',
        justifyContent: 'flex-end',
    },
    ProgressBarTextContainer: {
        paddingHorizontal: 8,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    ProgressBarText: {},
})
