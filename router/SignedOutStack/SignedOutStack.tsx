import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../../screens/LoginScreen/LoginScreen'
import RegisterScreen from '../../screens/RegisterScreen/RegisterScreen'

const SignedOut = createStackNavigator()

function SignedOutStack() {
    return (
        <SignedOut.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <SignedOut.Screen name="SignIn" component={LoginScreen} />
            <SignedOut.Screen name="SignUp" component={RegisterScreen} />
        </SignedOut.Navigator>
    )
}

export default SignedOutStack
