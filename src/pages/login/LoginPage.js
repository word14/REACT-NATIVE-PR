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
import LoginPresenter               from "./LoginPresenter";
import LoginStyle                   from "./LoginStyle";
import { createNavigationOptions }  from "~/helper/NavigatorHelper";
import lang                         from "~/lang";
import KeyboardSpacer               from "react-native-keyboard-spacer";

class LoginPage extends Component {
  presenter                 = new LoginPresenter(this);

  static navigationOptions  = {
    header : null
  };
  static propTypes          = {
    navigation  : PropTypes.object
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackButtonPressed.bind(this));
    this.textLogin.focus();
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
    //const {}            = this.state;
    const { navigation }  = this.props;
    return (
      <View style={LoginStyle.mainView}>
        <View style={LoginStyle.mainView}>
          <Text style={LoginStyle.titleText}>{lang("login.title")}</Text>
          <View style={LoginStyle.inputTextView}>
            <Text style={LoginStyle.lineText}>+62</Text>
            <View style={LoginStyle.line}/>
            <TextInput ref={ref => this.textLogin = ref}
              placeholder={lang("login.phone_number")} 
              keyboardType="numeric"
              onChangeText={(phoneNumber) => this.setState({ phoneNumber : `0${phoneNumber}` })} 
              style={LoginStyle.textInput}/>
          </View>
          <TouchableOpacity style={LoginStyle.loginButton} onPress={() => this.login()}>
            <Text style={LoginStyle.buttonText}>
              {lang("login.title")}
            </Text>
          </TouchableOpacity>
          <View style={LoginStyle.registerMainView}>
            <View style={LoginStyle.horizontalLine}/>
            <View style={LoginStyle.registerTextView}>
              <Text
                style={LoginStyle.firstText}>
                {lang("login.dont_have_an_account")}
              </Text>
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => navigation.navigate("RegisterPage")}>
                <Text style={LoginStyle.secondText}>
                  {lang("login.register_now")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <KeyboardSpacer/>
      </View>
    );
  }
}

export default Reducer.connect(LoginPage, LoginPresenter);