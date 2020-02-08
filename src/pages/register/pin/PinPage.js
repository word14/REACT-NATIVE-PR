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
import PinPresenter                   from "./PinPresenter";
import PinStyle                       from "./PinStyle";
import { createNavigationOptions }    from "~/helper/NavigatorHelper";
import lang                           from "~/lang";
import KeyboardSpacer                 from "react-native-keyboard-spacer";
import OTPInput                       from "react-native-otp";
import swatch                         from "~/config/swatch";
import { AntDesign }                  from "react-native-vector-icons";
import TimerCountdown                 from "react-native-timer-countdown";

class PinPage extends Component {
  presenter                 = new PinPresenter(this);

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

  maskingPin(pin) {
    this.presenter.maskingPin(pin);
  }

  toPinConfirmationPage() {
    this.presenter.toPinConfirmationPage();
  }
  
  render() {
    const { pin, realPin }            = this.state;
    const { navigation }          = this.props;
    return (
      <View style={PinStyle.mainView}>
        <View style={PinStyle.iconView}>
          <TouchableOpacity style={PinStyle.arrowleftIcon} onPress={() => navigation.goBack()}> 
            <AntDesign name="arrowleft" size={25}/>
          </TouchableOpacity>
        </View>
        <View style={PinStyle.mainView}>
          <Text style={PinStyle.titleText}>{lang("pin.title")}</Text>
          <Text style={PinStyle.phoneNumberMainText}>
            {`${lang("pin.enter_your_pin")} `} 
          </Text>
          <View style={PinStyle.otpInputView}>
            <OTPInput
              cellStyle={PinStyle.otpInput}
              tintColor={swatch.borderColor}
              offTintColor="transparent"
              otpLength={PinPage.PIN_LENGTH}
              multiline={false}
              value={pin ? Array(pin?.length + 1).join("•") : ""}
              onChange={pin => this.maskingPin.bind(this)(pin)}
            />
          </View>
          <TouchableOpacity 
            style={PinStyle.verifyButton}
            onPress={this.toPinConfirmationPage.bind(this)}>
            <Text style={PinStyle.buttonText}>{lang("pin.button.next")}</Text>
          </TouchableOpacity>
        </View>
        <KeyboardSpacer/>
      </View>
    );
  }
}

export default Reducer.connect(PinPage, PinPresenter);