import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect, isEmpty, isLoaded } from 'react-redux-firebase'
import { spinnerWhileLoading } from '@components'

export default compose(
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({
    loggedIn: isLoaded(auth) && !isEmpty(auth),
    auth
  })),
  spinnerWhileLoading(['auth'])
)
