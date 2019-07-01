import React, { Component } from "react"
import { Text, View, TouchableHighlight } from "react-native"

type Props = {
  onPress: () => void;
}

export default class RetryButton extends Component<Props, {}>
{
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress} style={{backgroundColor: 'white', padding: 5}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: '#333', paddingLeft: 5}}>Retry</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
