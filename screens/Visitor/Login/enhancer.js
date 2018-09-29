import { compose, withHandlers, withStateHandlers } from 'recompose'
import { firebaseConnect } from 'react-redux-firebase'
import { Alerts } from '@components'

export default compose(
  firebaseConnect(),
  withStateHandlers(
    {
      email: '',
      password: ''
    },
    {
      updateForm: () => (field, value) => ({
        [field]: value
      })
    }
  ),
  withHandlers({
    emailLogin: ({ firebase, email, password }) => () =>
      firebase
        .login({ email, password })
        .catch(err => Alerts.danger(err.message))
  })
)
