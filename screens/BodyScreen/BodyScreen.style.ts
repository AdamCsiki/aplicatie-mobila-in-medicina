import { StyleSheet } from 'react-native'
import padding from '../../misc/padding'
import margin from '../../misc/margin'
import { Keyframe } from 'react-native-reanimated'

export default StyleSheet.create({
    DetailsScreen: {
        display: 'flex',
        flexGrow: 1,

        ...padding(16),
    },
    profileHeader: {
        width: '100%',

        ...padding(16),

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileMain: {
        width: '100%',

        ...padding(0, 16),

        ...margin(12, 0),

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

        flexGrow: 1,
    },
    profileContainer: {
        width: '100%',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',

        flexWrap: 'wrap',

        flexGrow: 1,
    },
    profileStatsHeader: {
        width: '100%',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    StatContainer: {
        width: '100%',
        height: 'auto',

        ...padding(16, 16, 32, 16),

        borderRadius: 16,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
})
