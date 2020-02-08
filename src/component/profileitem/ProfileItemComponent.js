import React, { Component } from "react";
import { withNavigation }   from "react-navigation";
import  Reducer             from "~/core/Reducer";
import {
  View,
  Text,
  Image
}                           from "react-native";
import PropTypes            from "prop-types";
import ProfileItemPresenter       from "./ProfileItemPresenter";
import ProfileItemStyle           from "./ProfileItemStyle";
import lang                 from "~/lang";

class ProfileItemComponent extends Component {
  presenter                 = new ProfileItemPresenter(this);

  static propTypes          = {
    navigation  : PropTypes.object
  };

  render() {
    //const {}            = this.state;
    const { navigation }  = this.props;
    return (
      <View style={ProfileItemStyle.accountBackgroundView}>
          <View style={ProfileItemStyle.accountImageView}> 
            <Image />
          </View>
          <View>
            <Text style={ProfileItemStyle.accountNameText}>Samuel Sonny Salim</Text>
            <Text style={ProfileItemStyle.accountPhoneText}>+62 821 2050 0833</Text>
          </View>
      </View>
    );
  }
}

export default Reducer.connect(withNavigation(ProfileItemComponent), ProfileItemPresenter);