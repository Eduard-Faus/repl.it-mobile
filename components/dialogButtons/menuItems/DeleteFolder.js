import React, { Component } from 'react'
import { Menu, Dialog, Portal, Text, Button, withTheme } from 'react-native-paper'

import { deleteFolder } from '../../../lib/network'

export default withTheme(class extends Component {
  state = {
    dialogOpen: false,
    loading: false,
    error: null
  }

  render() {
    return (<>
      <Menu.Item
        title='Delete'
        onPress={this.open}
      />

      <Portal>
        <Dialog visible={this.state.dialogOpen} onDismiss={this.cancel}>
          <Dialog.Title>Are you sure?</Dialog.Title>

          <Dialog.Content>
            {this.state.error && (
              <Text style={{
                color: this.props.theme.colors.error,
                marginBottom: 10
              }}>
                {this.state.error}
              </Text>
            )}

            <Text>
              Are you sure you want to delete this folder?
              All the repls it contains will be deleted forever.
            </Text>
          </Dialog.Content>

          <Dialog.Actions>
            <Button
              onPress={this.cancel}
              disabled={this.state.loading}
            >
              Cancel
            </Button>
            <Button
              onPress={this.delete}
              loading={this.state.loading}
              disabled={this.state.loading}
            >
              Delete
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>)
  }

  open = () => this.setState({ dialogOpen: true })
  cancel = () => {
    this.setState({
      dialogOpen: false,
      loading: false,
      error: null
    })
    this.props.closeMenu()
  }

  delete = async () => {
    this.setState({ loading: true })
    try {
      await deleteFolder(this.props.id)
      if (!this.state.dialogOpen) return
      const reload = this.props.navigation.getParam('reload')

      reload()
      this.props.navigation.goBack()
    } catch(error) {
      if (!this.state.dialogOpen) return
      this.setState({
        error: error.message,
        loading: false
      })
    }
  }
})