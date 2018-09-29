import { Toast } from 'native-base'

let Alerts = {}

Alerts.danger = text =>
  Toast.show({
    text,
    type: 'danger',
    duration: 5000
  })

Alerts.msg = text =>
  Toast.show({
    text,
    duration: 5000
  })

export default Alerts
