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
import { images, GlobalStyles as styles } from '@components'
import { KeyboardAvoidingView } from 'react-native'
import enhancer from './enhancer'
let SignUp = ({ navigation: { navigate }, updateForm, emailSignup }) => (
  <Content
    contentContainerStyle={[styles.verticalAlignCenter, styles.pageBackground]}>
    <View style={styles.alignCenterItem}>
      <Text style={styles.pageHeading}>Signup On</Text>
    </View>
    <View style={styles.alignCenterItem}>
      <Thumbnail style={styles.size150} source={images['logo']} />
    </View>
    <KeyboardAvoidingView behavior="padding">
      <Form style={styles.marginH15}>
        <Item regular style={styles.formItem}>
          <Input
            placeholder="Name"
            onChangeText={text => updateForm('name', text)}
            style={styles.formInput}
            placeholderTextColor="#b9b9b9"
          />
        </Item>
        <Item regular style={styles.formItem}>
          <Input
            placeholder="Email Id"
            onChangeText={text => updateForm('email', text)}
            style={styles.formInput}
            placeholderTextColor="#b9b9b9"
            keyboardType="email-address"
          />
        </Item>
        <Item regular style={styles.formItem}>
          <Input
            placeholder="Password"
            type="password"
            onChangeText={text => updateForm('password', text)}
            style={styles.formInput}
            placeholderTextColor="#b9b9b9"
            secureTextEntry
          />
        </Item>
        <Item regular style={styles.formItem}>
          <Input
            placeholder="Confirm Password"
            type="password"
            onChangeText={text => updateForm('confirmPassword', text)}
            style={styles.formInput}
            placeholderTextColor="#b9b9b9"
            secureTextEntry
          />
        </Item>
      </Form>
    </KeyboardAvoidingView>
    <Button block onPress={emailSignup} style={[styles.greenBtn, styles.btn]}>
      <Text style={styles.whiteTxt}>SignUp</Text>
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

export default enhancer(SignUp)
