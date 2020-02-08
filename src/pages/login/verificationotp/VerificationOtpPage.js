import React, { Component }         from "react";
import  Reducer                     from "~/core/Reducer";
import {
  BackHandler,
  View,
  Text,
  TextInput,
  TouchableOpacity
}                                   from "react-native";
import PropTypes                    from "prop-types";
import VerificationOtpPresenter       from "./VerificationOtpPresenter";
import VerificationOtpStyle           from "./VerificationOtpStyle";
import { createNavigationOptions }  from "~/helper/NavigatorHelper";
import lang                         from "~/lang";
import KeyboardSpacer      from "react-native-keyboard-spacer";
import OTPInput           from "react-native-otp";
import swatch                       from "~/config/swatch";
import { AntDesign } from "react-native-vector-icons";
import TimerCountdown from "react-native-timer-countdown";

class VerificationOtpPage extends Component {
  presenter                 = new VerificationOtpPresenter(this);

  static navigationOptions  = {
    header : null
  };
  static propTypes          = {
    navigation  : PropTypes.object
  };

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
  
  login() {
    this.presenter.login();
    
  }

  render() {
    const { isResend }            = this.state;
    const { navigation }  = this.props;
    return (
      <View style={VerificationOtpStyle.mainView}>
        <View style={VerificationOtpStyle.iconView}>
          <TouchableOpacity style={VerificationOtpStyle.arrowleftIcon} onPress={() => navigation.goBack()}> 
            <AntDesign name="arrowleft" size={25}/>
          </TouchableOpacity>
        </View>
        <View style={VerificationOtpStyle.mainView}>
          <Text style={VerificationOtpStyle.titleText}>{lang("login.verification_otp.title")}</Text>
          <Text style={VerificationOtpStyle.phoneNumberMainText}>
            {`${lang("login.verification_otp.otp_code_text")} `} 
            <Text style={VerificationOtpStyle.phoneNumber}>{"+62" + navigation.getParam("phoneNumber", "08972628")}</Text>
          </Text>
          <View style={VerificationOtpStyle.otpInputView}>
            <OTPInput
              cellStyle={VerificationOtpStyle.otpInput}
              tintColor={swatch.borderColor}
              offTintColor="transparent"
              otpLength={4}
              autoCapitalize={"characters"}
              keyboardType={"default"}
              onChange={code => {
                this.setState({ otpCode : code });
              }
              }
            />
          </View>
          <TouchableOpacity 
            style={VerificationOtpStyle.verifyButton}
            onPress={this.login.bind(this)}
          >
            <Text style={VerificationOtpStyle.buttonText}>{lang("login.verification_otp.verify")}</Text>
          </TouchableOpacity>
          {
            isResend &&
          <View style={VerificationOtpStyle.sentView}>
            <Text style={VerificationOtpStyle.sentText}>{lang("login.verification_otp.sent")}</Text>
          </View>
          }
          <View style={VerificationOtpStyle.verificationMainView}>
            <View style={VerificationOtpStyle.horizontalLine}/>
            {
              isResend ? 
                <View style={VerificationOtpStyle.verificationTextView}>
                  <Text style={VerificationOtpStyle.firstText}>{lang("login.verification_otp.first_text_resend")}</Text>
                  <TimerCountdown
                    initialSecondsRemaining={1000 * 60}
                    onTick={secondsRemaining => secondsRemaining}
                    onTimeElapsed={() => this.setState({ isResend : false })}
                    allowFontScaling={true}
                    style={VerificationOtpStyle.secondText}
                  />
                  <Text style={VerificationOtpStyle.firstText}>{lang("login.verification_otp.second_text_resend")}</Text>
                </View>
                : <View style={VerificationOtpStyle.verificationTextView}>
                  <Text style={VerificationOtpStyle.firstText}>{lang("login.verification_otp.didnt_get_any_code")}</Text>
                  <TouchableOpacity onPress={() => {
                    this.presenter.resend();
                    this.setState({ isResend : true });
                  }}>
                    <Text style={VerificationOtpStyle.secondText}>{lang("login.verification_otp.resend_now")}</Text>
                  </TouchableOpacity>
                </View>
                
            }
          </View>
        </View>
        <KeyboardSpacer/>
      </View>
    );
  }
}

export default Reducer.connect(VerificationOtpPage, VerificationOtpPresenter);