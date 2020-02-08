import React, { Component }         from "react";
import  Reducer                     from "~/core/Reducer";
import {
  BackHandler,
  View,
  Text,
  TouchableOpacity
}                                   from "react-native";
import PropTypes                    from "prop-types";
import EnterPinPresenter       from "./EnterPinPresenter";
import EnterPinStyle           from "./EnterPinStyle";
import { createNavigationOptions }  from "~/helper/NavigatorHelper";
import lang                         from "~/lang";
import OTPInput           from "react-native-otp";
import swatch         from "~/config/swatch";
import KeyboardSpacer      from "react-native-keyboard-spacer";
import OTPCodeInput from "react-native-confirmation-code-input";
class EnterPinPage extends Component {
  presenter                 = new EnterPinPresenter(this);

  static navigationOptions  = null;
  static propTypes          = {
    navigation  : PropTypes.object
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackButtonPressed.bind(this));
    this.presenter._getDoneData();
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackButtonPressed.bind(this));
  }

  onBackButtonPressed() {
    const { navigation } = this.props;
    navigation?.pop();
    return true;
  }
  _onFinishCheckingCode(codeValue) {
    this.setState({ codeValue });
  }

  render() {
    const { validationNotif, doneData }            = this.state;
    const { navigation }  = this.props;
    const data = navigation.getParam("enterPin");
    return (
      <View style={EnterPinStyle.mainView}>
        <View style={EnterPinStyle.mainView}>
          <Text style={EnterPinStyle.titleText}>{data.title}</Text>
          <View style={EnterPinStyle.otpInputView}>
            <OTPCodeInput
              secureTextEntry
              autoFocus={true}
              ignoreCase={true}
              inputPosition="center"
              size={50}
              keyboardType="numeric"
              codeLength={6}
              onFulfill={(codeValue) => this._onFinishCheckingCode(codeValue)}
              codeInputStyle={EnterPinStyle.otpInput}
            />
          </View>
          {
            validationNotif &&
          <View style={EnterPinStyle.notifView}>
            <Text style={EnterPinStyle.notifText}>{data.notif}</Text>
          </View>
          }
          <TouchableOpacity style={EnterPinStyle.saveButton} onPress={() => navigation.navigate("DonePage", { doneData })}>
            <Text style={EnterPinStyle.saveText}>{data.buttonText}</Text>
          </TouchableOpacity>
        </View>
        <KeyboardSpacer/>
      </View>
    );
  }
}

export default Reducer.connect(EnterPinPage, EnterPinPresenter);