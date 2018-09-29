import React from 'react'
import { Button, Content, Text, Thumbnail, View } from 'native-base'
import { Linking, TouchableOpacity } from 'react-native'
import enhancer from './enhancer'
import styles from './style'
import { images, GlobalStyles } from '@components'
import { appInfo } from '@config'

let Settings = ({ navigation: { navigate }, logout }) => (
  <Content
    contentContainerStyle={[
      GlobalStyles.verticalAlignCenter,
      GlobalStyles.pageBackground
    ]}>
    <View style={GlobalStyles.alignCenterItem}>
      <Thumbnail
        style={[GlobalStyles.size150, GlobalStyles.marginV15]}
        source={images['logo']}
      />
    </View>
    <View>
      <Button
        block
        onPress={() => {
          navigate('ChangePassword')
        }}
        style={[
          GlobalStyles.greenBtn,
          GlobalStyles.btn,
          GlobalStyles.marginV15
        ]}>
        <Text style={GlobalStyles.whiteTxt} uppercase={false}>
          Change Password
        </Text>
      </Button>
    </View>
    <View>
      <View style={styles.bar}>
        <TouchableOpacity
          onPress={() => Linking.openURL(appInfo.privacyPolicyUrl)}>
          <Text style={styles.linkStyle}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bar}>
        <TouchableOpacity onPress={() => Linking.openURL(appInfo.aboutusUrl)}>
          <Text style={styles.linkStyle}>About Us</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bar}>
        <TouchableOpacity onPress={() => Linking.openURL(appInfo.termsUrl)}>
          <Text style={styles.linkStyle}>Terms</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bar}>
        <TouchableOpacity onPress={() => Linking.openURL(appInfo.websiteUrl)}>
          <Text style={styles.linkStyle}>Website</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bar}>
        <Text style={styles.m15}>Version</Text>
        <Text style={styles.marginSetting}>{appInfo.version}</Text>
      </View>
      <Button
        block
        onPress={logout}
        style={[
          GlobalStyles.btn,
          GlobalStyles.orangeBtn,
          GlobalStyles.marginV15
        ]}>
        <Text style={GlobalStyles.whiteTxt} uppercase={false}>
          Logout
        </Text>
      </Button>
    </View>
  </Content>
)

export default enhancer(Settings)
