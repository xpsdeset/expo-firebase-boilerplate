import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'
import { spinnerWhileLoading } from '@components'

export default compose(
  firebaseConnect(),
  connect(({ firebase: { profile } }) => ({
    profile
  })),
  spinnerWhileLoading(['profile'])
)
