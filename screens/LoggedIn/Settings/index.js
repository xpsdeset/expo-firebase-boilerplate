import { createStackNavigator } from 'react-navigation'
import Index from './Index'
import ChangePassword from './ChangePassword'

export default createStackNavigator(
  {
    Index: {
      screen: Index,
      navigationOptions: {
        header: null
      }
    },
    ChangePassword: {
      screen: ChangePassword,
      navigationOptions: {
        title: 'Change Password'
      }
    }
  },
  {
    initialRouteName: 'Index'
  }
)
