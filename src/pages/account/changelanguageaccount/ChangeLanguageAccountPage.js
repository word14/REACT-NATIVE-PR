import React, { Component }         from "react";
import  Reducer                     from "~/core/Reducer";
import {
  BackHandler,
  View,
  Text,
  Image,
  TouchableOpacity
}                                   from "react-native";
import PropTypes                    from "prop-types";
import ChangeLanguageAccountPresenter       from "./ChangeLanguageAccountPresenter";
import ChangeLanguageAccountStyle           from "./ChangeLanguageAccountStyle";
import { createNavigationOptions }  from "~/helper/NavigatorHelper";
import lang                         from "~/lang";
import englishIcon              from "@assets/english-icon.png";
import indonesianIcon              from "@assets/indonesian-icon.png";
import checkedRadioButtonIcon              from "@assets/checked-radio-button.png";

class ChangeLanguageAccountPage extends Component {
  presenter                 = new ChangeLanguageAccountPresenter(this);

  static navigationOptions  = createNavigationOptions(lang("account.change_language.title"));
  static propTypes          = {
    navigation  : PropTypes.object
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackButtonPressed.bind(this));
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackButtonPressed.bind(this));
  }

  onBackButtonPressed() {
    const { navigation } = this.props;
    navigation?.pop();
    return true;
  }
  _submitLanguage() {
    this.props.navigation.goBack(); 
  }

  render() {
    const { check }            = this.state;
    const { navigation }  = this.props;
    return (
      <View style={ChangeLanguageAccountStyle.mainView}>
        
        <TouchableOpacity style={ChangeLanguageAccountStyle.secondView} onPress={() => this.setState({ check : 0 })}>
          <Image source={englishIcon} style={ChangeLanguageAccountStyle.languageIconImage}/>
          <View style={ChangeLanguageAccountStyle.thirdView}>
            <Text style={ChangeLanguageAccountStyle.changeLanguageText}>{lang("account.change_language.english")}</Text>
            {
              !check ?
                <Image source={checkedRadioButtonIcon} style={ChangeLanguageAccountStyle.checkIconImage}/> : <View/>
            }
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={ChangeLanguageAccountStyle.secondView} onPress={() => this.setState({ check : 1 })}>
          <Image source={indonesianIcon} style={ChangeLanguageAccountStyle.languageIconImage}/>
          <View style={ChangeLanguageAccountStyle.thirdView}>
            <Text style={ChangeLanguageAccountStyle.changeLanguageText}>{lang("account.change_language.indonesian")}</Text>
            {
              check ?
                <Image source={checkedRadioButtonIcon} style={ChangeLanguageAccountStyle.checkIconImage}/> : <View/>
            }
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={ChangeLanguageAccountStyle.saveButton} onPress={() => this._submitLanguage()}>
          <Text style={ChangeLanguageAccountStyle.saveText}>{lang("account.change_language.save")}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Reducer.connect(ChangeLanguageAccountPage, ChangeLanguageAccountPresenter);