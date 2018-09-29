import { compose, withHandlers, withStateHandlers } from 'recompose'
import { firebaseConnect } from 'react-redux-firebase'
import { Alerts } from '@components'

export default compose(
  firebaseConnect(),
  withStateHandlers(
    {
      oldpass: '',
      newpass: '',
      confirmpass: ''
    },
    {
      updateForm: () => (field, value) => ({
        [field]: value
      })
    }
  ),
  withHandlers({
    changePassword: ({ firebase, oldpass, newpass, confirmpass }) => () => {
      if (oldpass == '') {
        return Alerts.danger('Please Enter current Password ')
      }
      if (newpass == '') {
        return Alerts.danger('Please Enter new Password ')
      }
      if (confirmpass == '') {
        return Alerts.danger('Please Enter confirm Password ')
      }
      if (newpass != confirmpass) {
        return Alerts.danger(
          'New Password and confirm password should be equal.'
        )
      }

      var user = firebase.auth().currentUser
      var cred = firebase.auth.EmailAuthProvider.credential(user.email, oldpass)
      user
        .reauthenticateWithCredential(cred)
        .then(() => {
          user
            .updatePassword(newpass)
            .then(() => {
              Alerts.msg('Password Changed Successfully.')
            })
            .catch(error => {
              Alerts.danger(error.message)
            })
        })
        .catch(() => {
          Alerts.danger('Please check your current password')
        })
    }
  })
)
