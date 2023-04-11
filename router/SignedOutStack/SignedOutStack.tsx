import { createStackNavigator } from '@react-navigation/stack'
import SignInScreen from '../../screens/SignInScreen/SignInScreen'
import SignUpScreen from '../../screens/SignUpScreen/SignUpScreen'

const SignedOut = createStackNavigator()

function SignedOutStack() {
    return (
        <SignedOut.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <SignedOut.Screen name="SignIn" component={SignInScreen} />
            <SignedOut.Screen name="SignUp" component={SignUpScreen} />
        </SignedOut.Navigator>
    )
}

export default SignedOutStack
