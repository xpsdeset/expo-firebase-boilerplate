import { createStackNavigator } from 'react-navigation'
import Login from './Login'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'

export default createStackNavigator(
  {
    Login,
    SignUp,
    ForgotPassword
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
)
