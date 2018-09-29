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
let ChangePassword = ({
  navigation: { navigate },
  updateForm,
  changePassword
}) => (
  <Content
    contentContainerStyle={[styles.verticalAlignCenter, styles.pageBackground]}>
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.alignCenterItem}>
        <Thumbnail style={styles.size150} source={images['logo']} />
      </View>

      <Form style={styles.marginH15}>
        <Item regular style={styles.formItem}>
          <Input
            placeholder="Old Password"
            onChangeText={text => updateForm('oldpass', text)}
            style={styles.formInput}
            placeholderTextColor="#b9b9b9"
            type="password"
            secureTextEntry
          />
        </Item>
        <Item regular style={styles.formItem}>
          <Input
            placeholder="New Password"
            onChangeText={text => updateForm('newpass', text)}
            style={styles.formInput}
            placeholderTextColor="#b9b9b9"
            type="password"
            secureTextEntry
          />
        </Item>
        <Item regular style={styles.formItem}>
          <Input
            placeholder="Confirm Password"
            onChangeText={text => updateForm('confirmpass', text)}
            style={styles.formInput}
            placeholderTextColor="#b9b9b9"
            type="password"
            secureTextEntry
          />
        </Item>
      </Form>
    </KeyboardAvoidingView>
    <Button
      block
      onPress={changePassword}
      style={[styles.greenBtn, styles.btn]}>
      <Text style={styles.whiteTxt} uppercase={false}>
        Change Password
      </Text>
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
        Logout
      </Text>
    </Button>
  </Content>
)
export default enhancer(ChangePassword)
