import React, { Component } from 'react'
import { View } from 'react-native'

import { fetchCanWrite } from '../../lib/network'

import Theme from '../../components/wrappers/Theme'
import ActivityIndicator from '../../components/customized/ActivityIndicator'

export default class extends Component {
  render() {
    return (
      <Theme>
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <ActivityIndicator />
        </View>
      </Theme>
    )
  }

  async componentDidMount() {
    const { replace, getParam } = this.props.navigation
    const canWrite = await fetchCanWrite(getParam('url'))
    replace('Repl', {
      id: info.id,
      title: info.title,
      url: info.url,
      language: info.language,
      canWrite,
      reload: getParam('reload')
    })
  }
}