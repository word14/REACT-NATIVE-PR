import React, { Component } from "react";
import { withNavigation }   from "react-navigation";
import  Reducer             from "~/core/Reducer";
import {
  View,
  Text,
  Image,
  TouchableOpacity
}                           from "react-native";
import PropTypes            from "prop-types";
import TopMenuItemPresenter       from "./TopMenuItemPresenter";
import TopMenuItemStyle           from "./TopMenuItemStyle";
import lang                 from "~/lang";
import payIcon              from "@assets/pay-icon.png";
import qrIcon              from "@assets/qr-icon.png";
import topUpIcon              from "@assets/top-up-icon.png";
import historyIcon              from "@assets/history-icon.png";

class TopMenuItemComponent extends Component {
  presenter                 = new TopMenuItemPresenter(this);

  static propTypes          = {
    navigation  : PropTypes.object
  };

  render() {
    //const {}            = this.state;
    const { navigation }  = this.props;
    return (
      <View style={TopMenuItemStyle.mainView}>
        <View>
          <TouchableOpacity style={TopMenuItemStyle.topMenuButton} onPress={() => navigation.navigate("PayPage")}>
            <Image source={payIcon} resizeMode="contain" style={TopMenuItemStyle.topMenuImage}/>
          </TouchableOpacity>
          <Text style={TopMenuItemStyle.topMenuText}>{lang("home.top_menu.pay")}</Text>
        </View>
        <View>
          <TouchableOpacity style={TopMenuItemStyle.topMenuButton}>
            <Image source={topUpIcon} resizeMode="contain" style={TopMenuItemStyle.topMenuImage}/>
          </TouchableOpacity>
          <Text style={TopMenuItemStyle.topMenuText}>{lang("home.top_menu.top_up")}</Text>
        </View>
        <View>
          <TouchableOpacity style={TopMenuItemStyle.topMenuButton} onPress={() => navigation.navigate("MyQrPage")}>
            <Image source={qrIcon} resizeMode="contain" style={TopMenuItemStyle.topMenuImage}/>
          </TouchableOpacity>
          <Text style={TopMenuItemStyle.topMenuText}>{lang("home.top_menu.my_qr")}</Text>
        </View>
        <View>
          <TouchableOpacity resizeMode="contain" style={TopMenuItemStyle.topMenuButton} onPress={() => navigation.navigate("HistoryListPage")}>
            <Image source={historyIcon} style={TopMenuItemStyle.topMenuImage}/>
          </TouchableOpacity>
          <Text style={TopMenuItemStyle.topMenuText}>{lang("home.top_menu.history")}</Text>
        </View>
      </View>
    );
  }
}

export default Reducer.connect(withNavigation(TopMenuItemComponent), TopMenuItemPresenter);