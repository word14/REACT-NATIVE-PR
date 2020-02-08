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
import EditAccountPresenter       from "./EditAccountPresenter";
import EditAccountStyle           from "./EditAccountStyle";
import { createNavigationOptions }  from "~/helper/NavigatorHelper";
import lang                         from "~/lang";
import KeyboardSpacer      from "react-native-keyboard-spacer";

class EditAccountPage extends Component {
  presenter                 = new EditAccountPresenter(this);

  static navigationOptions  = createNavigationOptions(lang("account.edit_account.title"));
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
  _submitAccount() {
    this.props.navigation.goBack();
  }
  render() {
    //const {}            = this.state;
    const { navigation }  = this.props;
    return (
      <View style={EditAccountStyle.mainView}>
        <View style={EditAccountStyle.mainView}>
          <View>
            <Text style={EditAccountStyle.textInputTitle}>{lang("account.edit_account.your_name")}</Text>
            <TextInput style={EditAccountStyle.textInputName}/>
          </View>
          <View>
            <Text style={EditAccountStyle.textInputTitle}>{lang("account.edit_account.phone_number")}</Text>
            <View style={EditAccountStyle.phoneNumberView}>
              <Text style={EditAccountStyle.textInputStatic}>+62</Text>
              <TextInput keyboardType="numeric" style={EditAccountStyle.textInputPhone}/>
            </View>
          </View>
          <TouchableOpacity style={EditAccountStyle.saveButton} onPress={() => this._submitAccount()}>
            <Text style={EditAccountStyle.saveText}>{lang("account.edit_account.save")}</Text>
          </TouchableOpacity>
        </View>
        <KeyboardSpacer/>
      </View>
    );
  }
}

export default Reducer.connect(EditAccountPage, EditAccountPresenter);