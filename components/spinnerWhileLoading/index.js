import _ from 'lodash'
import { branch, renderComponent } from 'recompose'
import { isLoaded } from 'react-redux-firebase'
import Loader from '../Loader'

const spinnerWhile = condition => branch(condition, renderComponent(Loader))
const spinnerWhileLoading = propNames =>
  spinnerWhile(props => _.some(propNames, name => !isLoaded(props[name])))

export default spinnerWhileLoading
