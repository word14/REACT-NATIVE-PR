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
import TransactionPresenter       from "./TransactionPresenter";
import TransactionStyle           from "./TransactionStyle";
import lang                 from "~/lang";

import RightCircleArrowIcon         from "@assets/right-arrow-circle.png";

class TransactionComponent extends Component {
  presenter                 = new TransactionPresenter(this);

  static propTypes          = {
    navigation  : PropTypes.object
  };

  render() {
    //const {}            = this.state;
    const { navigation }  = this.props;
    return (
      <TouchableOpacity 
        activeOpacity={1}
        style={TransactionStyle.mainView}
        onPress={() => navigation.navigate("HistoryDetailPage")}>
        <View style={TransactionStyle.rowView}>
          <Text style={TransactionStyle.transactionTypeText}>{"Transfered From\nKevin Charlie"}</Text>
          <Text style={TransactionStyle.transactionValueText}>500000</Text>
        </View>
        <Text style={TransactionStyle.grayText}>TRF-34567891000</Text>
        <View style={TransactionStyle.rowView}>
          <Text style={TransactionStyle.grayText}>1 Januari 2019</Text>
          <View style={TransactionStyle.seeMoreContainer}>
            <Text style={TransactionStyle.seeMoreText}>
              {lang("outlet.label.order_now")}
            </Text>
            <Image 
              style={TransactionStyle.seeMoreIcon}
              source={RightCircleArrowIcon}/>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
export default Reducer.connect(withNavigation(TransactionComponent), TransactionPresenter);