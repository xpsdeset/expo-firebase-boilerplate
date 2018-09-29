import React from 'react'
import {
  Content,
  Form,
  Item,
  Input,
  Thumbnail,
  View,
  Button,
  Text
} from 'native-base'
import { KeyboardAvoidingView } from 'react-native'
import { images, GlobalStyles as styles } from '@components'
import enhancer from './enhancer'
let ForgotPassword = ({
  navigation: { navigate },
  updateForm,
  forgotPassword
}) => (
  <Content
    contentContainerStyle={[styles.verticalAlignCenter, styles.pageBackground]}>
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.alignCenterItem}>
        <Text style={styles.pageHeading}>Forgot Password</Text>
      </View>
      <View style={styles.alignCenterItem}>
        <Thumbnail style={styles.size150} source={images['logo']} />
      </View>

      <Form style={styles.marginH15}>
        <Item regular style={styles.formItem}>
          <Input
            placeholder="Enter Email Id Here"
            onChangeText={text => updateForm('email', text)}
            style={styles.formInput}
            placeholderTextColor="#b9b9b9"
          />
        </Item>
      </Form>
    </KeyboardAvoidingView>
    <Button
      block
      onPress={forgotPassword}
      style={[styles.greenBtn, styles.btn]}>
      <Text style={styles.whiteTxt}>Send Email</Text>
    </Button>
    <View
      style={{
        borderBottomColor: '#543437',
        borderBottomWidth: 1,
        marginVertical: 25
      }}
    />
    <Button
      block
      onPress={() => navigate('Login')}
      style={[styles.btn, styles.orangeBtn]}>
      <Text style={styles.whiteTxt} uppercase={false}>
        Login
      </Text>
    </Button>
  </Content>
)
export default enhancer(ForgotPassword)
