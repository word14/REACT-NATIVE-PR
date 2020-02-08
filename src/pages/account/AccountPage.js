import React, { Component }         from "react";
import  Reducer                     from "~/core/Reducer";
import {
  BackHandler,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
}                                   from "react-native";
import PropTypes                    from "prop-types";
import AccountPresenter             from "./AccountPresenter";
import AccountStyle                 from "./AccountStyle";
import { 
  createNavigationOptions,
  createBottomTabBarItem 
}                                   from "~/helper/NavigatorHelper";
import lang                         from "~/lang";
import editIcon              from "@assets/edit-icon.png";
import pinIcon              from "@assets/pin-icon.png";
import languageIcon              from "@assets/language-icon.png";
import logoutIcon              from "@assets/logout-icon.png";
import ModalComponent                from "~/component/modal/ModalComponent";
import accountIcon                  from "@assets/account-icon.png";
import activeAccountIcon            from "@assets/active-account-icon.png";
import ProfileItemComponent from "~/component/profileitem/ProfileItemComponent";
class AccountPage extends Component {
  presenter                 = new AccountPresenter(this);

  static navigationOptions = createNavigationOptions(
    lang("account.title"),
    navigation => ({
      headerLeft      : null,
      ...createBottomTabBarItem({
        inactiveImage : accountIcon,
        activeImage   : activeAccountIcon,
        label         : lang("main.account")
      })
    })
  );

  static propTypes          = {
    navigation  : PropTypes.object,
    onDismiss : PropTypes.func
  };

  componentDidMount() {
    // BackHandler.addEventListener("hardwareBackPress", this.onBackButtonPressed.bind(this));
    this.presenter.getEnterPinData();
  }

  // componentWillUnmount() {
  //   BackHandler.removeEventListener("hardwareBackPress", this.onBackButtonPressed.bind(this));
  // }

  // onBackButtonPressed() {
  //   const { navigation } = this.props;
  //   navigation?.pop();
  //   return true;
  // }

  render() {
    const { modalVisible, enterPin }            = this.state;
    const { navigation, onDismiss }  = this.props;
    return (
      <View style={AccountStyle.mainView}>
        <ProfileItemComponent/>
        <TouchableOpacity style={AccountStyle.editMainView} onPress={() => navigation.navigate("EditAccountPage")}>
          <Image source={editIcon} style={AccountStyle.iconImage} />
          <View style={AccountStyle.editView}>
            <Text style={AccountStyle.editText}>{lang("account.edit_account.title")}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={AccountStyle.editMainView} onPress={() => navigation.navigate("EnterPinPage", { enterPin })}>
          <Image source={pinIcon} style={AccountStyle.iconImage}/>
          <View style={AccountStyle.editView}>
            <Text style={AccountStyle.editText}>{lang("account.create_pin")}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={AccountStyle.editMainView} onPress={() => navigation.navigate("ChangeLanguageAccountPage")}>
          <Image source={languageIcon} style={AccountStyle.iconImage}/>
          <View style={AccountStyle.editView}>
            <Text style={AccountStyle.editText}>{lang("account.change_language.title")}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={AccountStyle.editMainView} onPress={() => this.setState({ modalVisible : true })}>
          <Image source={logoutIcon} style={AccountStyle.iconImage}/>
          <View style={AccountStyle.editView}>
            <Text style={AccountStyle.editText}>{lang("account.logout")}</Text>
          </View>
        </TouchableOpacity>
        <Text style={AccountStyle.versionText}>{lang("account.version_app")}</Text>
        <ModalComponent
          title={"Are you sure to logout this account?"}
          visible={modalVisible}
          onClose={() => this.setState({ modalVisible : false })}
        >
          <View style={AccountStyle.mainViewModal}>
            <TouchableOpacity style={AccountStyle.noButton} onPress={() => this.setState({ modalVisible : false })}>
              <Text style={AccountStyle.noText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={AccountStyle.yesButton} onPress={() => this.setState({ modalVisible : false })}>
              <Text style={AccountStyle.yesText}>Yes</Text>
            </TouchableOpacity>
          </View>
        </ModalComponent>
      </View>
    );
  }
}

export default Reducer.connect(AccountPage, AccountPresenter);