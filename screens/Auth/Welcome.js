import React, { Component } from 'react'
import { View } from 'react-native'
import { Title, Text, Button } from 'react-native-paper'
import ImageButton from '../../components/ImageButton'
import HorizontalList from '../../components/HorizontalList'

export default class extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={{ 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Title style={{
          fontSize: 36,
          padding: 16,
          textAlign: 'center'
        }}>Welcome!</Title>
        <Text style={{
          fontSize: 18,
          textAlign: 'center',
          maxWidth: '84%',
          marginBottom: 20
        }}>
          Just sign in or sign up and you'll be ready to start coding with Repl.it
        </Text>
        
        <HorizontalList style={{ marginBottom: 16 }}>
          <ImageButton image='google' onPress={this.googleLogIn} />
          <ImageButton image='github' onPress={this.gitHubLogIn} />
          <ImageButton image='facebook' onPress={this.facebookLogIn} />
        </HorizontalList>

        <Button mode='contained' onPress={() => navigate('LogIn')}>
          Log in
        </Button>
        <Button>Sign up</Button>
      </View>
    )
  }

  googleLogIn = () => this.props.navigation.navigate('GoogleProvider')
  gitHubLogIn = () => this.props.navigation.navigate('GitHubProvider')
  facebookLogIn = () => this.props.navigation.navigate('FacebookProvider')
}