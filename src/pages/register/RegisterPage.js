import React, { Component }         from "react";
import  Reducer                     from "~/core/Reducer";
import {
  BackHandler,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity
}                                   from "react-native";
import PropTypes                    from "prop-types";
import RegisterPresenter            from "./RegisterPresenter";
import RegisterStyle                from "./RegisterStyle";
import { createNavigationOptions }  from "~/helper/NavigatorHelper";
import lang                         from "~/lang";
import swatch                       from "~/config/swatch";
import UncheckedRadioButton         from "@assets/unchecked-radio-button.png";
import CheckedRadioButton           from "@assets/checked-radio-button.png";
import KeyboardSpacer      from "react-native-keyboard-spacer";

class RegisterPage extends Component {
  presenter                 = new RegisterPresenter(this);

  static navigationOptions  = { header : null };
  static propTypes          = {
    navigation  : PropTypes.object
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackButtonPressed.bind(this));
    this.textName.focus();
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackButtonPressed.bind(this));
  }

  onBackButtonPressed() {
    const { navigation } = this.props;
    navigation?.pop();
    return true;
  }

  register() {
    this.presenter.register();
  }

  render() {
    const { 
      isChecked, 
      name, 
      phone, 
      email, 
      pin
    }            = this.state;
    const { navigation }  = this.props;
    return (
      <View style={RegisterStyle.mainView}>
        <View style={{ flex : 1 }}>
          <Text style={RegisterStyle.verificationTitleText}>{lang("registration.title")}</Text>
          <View style={RegisterStyle.secondaryView}>
            <TextInput 
              ref={ref => this.textName = ref }
              style={RegisterStyle.nameTextInput}
              placeholder={lang("registration.placeholder.your_name")}
              value={name}
              onChangeText={value => this.setState({ name : value })}
            />
            <TextInput 
              ref={ref => this.textEmail = ref }
              style={RegisterStyle.nameTextInput}
              placeholder={lang("registration.placeholder.email")}
              value={email}
              onChangeText={value => this.setState({ email : value })}

            />
            <View style={RegisterStyle.phoneView}>
              <View style={RegisterStyle.prefixView}>
                <Text style={RegisterStyle.prefixText}>+62</Text>
                <View style={RegisterStyle.separatorVertical}></View>
              </View>
              <TextInput 
                ref={ref => this.textNumber = ref }
                keyboardType="numeric"
                style={RegisterStyle.phoneNumberTextInput} 
                placeholder={lang("registration.placeholder.phone_number")}
                value={phone}
                onChangeText={value => this.setState({ phone : value })}
              />
            </View>
          </View>
          <TouchableOpacity
            style={RegisterStyle.agreementView}
            onPress={() => this.setState({ isChecked : !isChecked })}
            activeOpacity={0.85}
          >
            <Image 
              source={ !isChecked ? UncheckedRadioButton :  CheckedRadioButton } 
              resizeMode="contain" 
              style={{ width : 20, height : 20 }}/>
            <Text 
              style={RegisterStyle.agreementText}>{lang("registration.label.term_and_condition")}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={RegisterStyle.registerButton}
            onPress={this.register.bind(this)}
          >
            <Text style={RegisterStyle.registerText}>{lang("registration.button.register")}</Text>
          </TouchableOpacity>
          <View style={RegisterStyle.bottomView}>
            <View style={RegisterStyle.borderAndTextContainer}>
              <Text style={RegisterStyle.dontHaveAccountText}>
                {lang("registration.label.already_have")}
              </Text>
              <TouchableOpacity 
                onPress={() => navigation.navigate("LoginPage")}
                activeOpacity={0.85}
              >
                <Text style={{ ...RegisterStyle.dontHaveAccountText, color : swatch.primaryColor }}>
                  {lang("registration.label.login_now")}
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

export default Reducer.connect(RegisterPage, RegisterPresenter);