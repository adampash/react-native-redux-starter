'use babel'

import React from 'react-native'

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React

let styles = StyleSheet.create({
  dummy: {
    fontSize: 25,
    padding: 15,
    backgroundColor: '#F5FCFF',
  },
})

export default class DumbComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  handlePress(e) {
    this.props.test('oh hi')
  }

  render() {
    return(
      <TouchableHighlight onPress={this.handlePress.bind(this)}>
        <Text style={styles.dummy}>
          Hello there! {this.props.foo}
        </Text>
      </TouchableHighlight>
    )
  }

}

