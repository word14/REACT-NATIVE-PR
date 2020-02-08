import React, { Component }         from "react";
import  Reducer                     from "~/core/Reducer";
import {
  BackHandler,
  View,
  Text,
  TextInput,
  TouchableOpacity
}                                     from "react-native";
import PropTypes                      from "prop-types";
import ConfirmationPinPresenter       from "./ConfirmationPinPresenter";
import ConfirmationPinStyle           from "./ConfirmationPinStyle";
import { createNavigationOptions }    from "~/helper/NavigatorHelper";
import lang                           from "~/lang";
import KeyboardSpacer                 from "react-native-keyboard-spacer";
import OTPInput                       from "react-native-otp";
import swatch                         from "~/config/swatch";
import { AntDesign }                  from "react-native-vector-icons";
import TimerCountdown                 from "react-native-timer-countdown";

class ConfirmationPinPage extends Component {
  presenter                 = new ConfirmationPinPresenter(this);

  static navigationOptions  = {
    header : null
  };
  static propTypes          = {
    navigation  : PropTypes.object
  };

  static PIN_LENGTH = 4;

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackButtonPressed.bind(this));
    const phoneNumber = this.props.navigation.getParam("phoneNumber");
    this.setState({ phoneNumber });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackButtonPressed.bind(this));
  }

  onBackButtonPressed() {
    const { navigation } = this.props;
    navigation?.pop();
    return true;
  }

  async register() {
    this.presenter.register();
  }

  maskingPin(pin) {
    this.presenter.maskingPin(pin);
  }

  render() {
    const { pin, confirmationPin }            = this.state;
    const { navigation }          = this.props;
    return (
      <View style={ConfirmationPinStyle.mainView}>
        <View style={ConfirmationPinStyle.iconView}>
          <TouchableOpacity style={ConfirmationPinStyle.arrowleftIcon} onPress={() => navigation.goBack()}> 
            <AntDesign name="arrowleft" size={25}/>
          </TouchableOpacity>
        </View>
        <View style={ConfirmationPinStyle.mainView}>
          <Text style={ConfirmationPinStyle.titleText}>{lang("confirmation_pin.title")}</Text>
          <Text style={ConfirmationPinStyle.phoneNumberMainText}>
            {`${lang("confirmation_pin.enter_your_pin")} `} 
          </Text>
          <View style={ConfirmationPinStyle.otpInputView}>
            <OTPInput
              cellStyle={ConfirmationPinStyle.otpInput}
              tintColor={swatch.borderColor}
              offTintColor="transparent"
              otpLength={ConfirmationPinPage.PIN_LENGTH}
              multiline={false}
              value={pin ? Array(pin?.length + 1).join("•") : ""}
              onChange={pin => this.maskingPin.bind(this)(pin)}
            />
          </View>
          <TouchableOpacity 
            style={ConfirmationPinStyle.verifyButton}
            onPress={this.register.bind(this)}
          >
            <Text style={ConfirmationPinStyle.buttonText}>{lang("confirmation_pin.button.next")}</Text>
          </TouchableOpacity>
        </View>
        <KeyboardSpacer/>
      </View>
    );
  }
}

export default Reducer.connect(ConfirmationPinPage, ConfirmationPinPresenter);