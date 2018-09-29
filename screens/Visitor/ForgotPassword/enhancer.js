import { compose, withHandlers, withStateHandlers } from 'recompose'
import { firebaseConnect } from 'react-redux-firebase'
import { Alerts } from '@components'

export default compose(
  firebaseConnect(),
  withStateHandlers(
    {
      email: ''
    },
    {
      updateForm: () => (field, value) => ({
        [field]: value
      })
    }
  ),
  withHandlers({
    forgotPassword: ({ firebase, email }) => () => {
      firebase
        .resetPassword(email)
        .then(() =>
          Alerts.msg('Instructions to reset your password has been sent.')
        )
    }
  })
)
