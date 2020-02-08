import React, { Component }         from "react";
import  Reducer                     from "~/core/Reducer";
import {
  BackHandler,
  View,
  Text,
  TouchableOpacity
}                                   from "react-native";
import PropTypes                    from "prop-types";
import TransferPresenter       from "./TransferPresenter";
import TransferStyle           from "./TransferStyle";
import { createNavigationOptions }  from "~/helper/NavigatorHelper";
import lang                         from "~/lang";
import ProfileItemComponent from "~/component/profileitem/ProfileItemComponent";
import { TextInput } from "react-native-gesture-handler";
import swatch from "~/config/swatch";
import KeyboardSpacer      from "react-native-keyboard-spacer";

class TransferPage extends Component {
  presenter                 = new TransferPresenter(this);

  static navigationOptions  = createNavigationOptions(lang("transfer.title"));
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

  render() {
    const { amountValue }            = this.state;
    const { navigation }  = this.props;
    return (
      <View style={TransferStyle.mainView}>
        <View style={TransferStyle.mainView}>
          <View style={TransferStyle.secondaryMain}>
            <ProfileItemComponent/>
            <View>
              <View style={TransferStyle.balanceView}>
                <Text style={TransferStyle.balanceText}>{lang("transfer.balance")}</Text>
                <Text style={TransferStyle.amountText}>Rp 1.000.000</Text>
              </View>
              <Text style={TransferStyle.amountTransferText}>{lang("transfer.amount_transfer")}</Text>
              <View style={TransferStyle.amountTransferView}>
                <Text style={
                  amountValue ?
                  {
                  ...TransferStyle.rpText, 
                  ...{color : swatch.black}}
                  : TransferStyle.rpText
                }>Rp </Text>
                <TextInput 
                ref={ref => this.textLogin = ref}
                placeholder={"0"}
                placeholderTextColor={swatch.secondaryGray}
                style={TransferStyle.amountTransferTextInput}
                keyboardType="numeric"
                onChangeText={(value) => this.setState({amountValue : value})}
                maxLength={11}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity style={
            amountValue ?
            {
              ...TransferStyle.confirmButton,
              ...{backgroundColor : swatch.secondaryColor}
            } :
            TransferStyle.confirmButton
          }>
            <Text style={TransferStyle.confirmText}>
              {lang("transfer.confirm")}
            </Text>
          </TouchableOpacity>
        </View>
        <KeyboardSpacer/>
      </View>
    );
  }
}

export default Reducer.connect(TransferPage, TransferPresenter);