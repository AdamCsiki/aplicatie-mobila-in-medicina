import { StyleSheet } from 'react-native'
import padding from '../../misc/padding'
import margin from '../../misc/margin'
import { Keyframe } from 'react-native-reanimated'

export const backgroundAnimation = new Keyframe({
    from: {
        borderBottomLeftRadius: 100,
    },
    to: {
        borderBottomLeftRadius: 500,
    },
}).duration(3000)

export const profileAnimation = new Keyframe({
    from: {
        width: 170,
        height: 170,
    },
    to: {
        width: 150,
        height: 150,
    },
}).duration(3000)

export default StyleSheet.create({
    Profile: {
        width: '100%',
        height: '100%',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    profileBackground: {
        width: '100%',
        height: 220,

        marginBottom: 16,

        overflow: 'hidden',

        position: 'relative',
    },
    profileBackgroundButton: {
        width: '100%',
        height: '100%',

        position: 'relative',
    },
    profileBackgroundImage: {
        flexGrow: 1,
    },
    profileUser: {
        zIndex: 2,

        width: 170,
        height: 170,

        backgroundColor: 'transparent',

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',

        position: 'absolute',

        top: 55,
        left: -5,
    },
    profileUserBackground: {
        width: 170,
        height: 170,

        borderRadius: 250,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        height: 150,
        width: 150,

        borderRadius: 250,
    },
    profileUsername: {
        width: 200,

        top: '30%',
        left: '10%',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
    },
})
