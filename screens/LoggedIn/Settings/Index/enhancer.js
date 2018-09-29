import { compose, withHandlers } from 'recompose'
import { firebaseConnect } from 'react-redux-firebase'
import { Alerts } from '@components'

export default compose(
  firebaseConnect(),
  withHandlers({
    logout: ({ firebase }) => () =>
      firebase.logout().catch(err => Alerts.danger(err.message))
  })
)
