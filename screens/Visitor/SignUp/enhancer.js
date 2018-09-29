import { compose, withHandlers, withStateHandlers } from 'recompose'
import { firebaseConnect } from 'react-redux-firebase'
import { Alerts } from '@components'

export default compose(
  firebaseConnect(),
  withStateHandlers(
    {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    {
      updateForm: () => (field, value) => ({
        [field]: value
      })
    }
  ),
  withHandlers({
    emailSignup: ({
      firebase,
      name,
      email,
      password,
      confirmPassword
    }) => () => {
      if (name == '') Alerts.danger('Please enter your name')
      else if (email == '') Alerts.danger('Please enter your email')
      else if (password == '') Alerts.danger('Please enter your password')
      else if (confirmPassword == '')
        Alerts.danger('Please enter your confirm password')
      else if (password != confirmPassword)
        Alerts.danger('Password and confirm password do not match')
      else
        firebase
          .createUser({ email, password }, { name })
          .catch(err => Alerts.danger(err.message))
    }
  })
)
