import React from 'react'
import { Content, Thumbnail, View, Text } from 'native-base'
import { images, GlobalStyles } from '@components'
import styles from './style'
import enhancer from './enhancer'

let Home = ({ profile }) => (
  <Content
    contentContainerStyle={[
      GlobalStyles.verticalAlignCenter,
      GlobalStyles.pageBackground
    ]}>
    <View style={GlobalStyles.alignCenterItem}>
      <Thumbnail style={GlobalStyles.size150} source={images['logo']} />
    </View>
    <Text style={styles.heading}>Welcome {profile.name} </Text>
  </Content>
)

export default enhancer(Home)
