import React, { Component } from "react";
import { withNavigation }   from "react-navigation";
import  Reducer             from "~/core/Reducer";
import {
  View,
  Text
}                           from "react-native";
import PropTypes            from "prop-types";
import GrandtotalPresenter       from "./GrandTotalPresenter";
import GrandtotalStyle           from "./GrandTotalStyle";
import lang                 from "~/lang";

class GrandtotalComponent extends Component {
  presenter                 = new GrandtotalPresenter(this);

  static propTypes          = {
    navigation  : PropTypes.object
  };

  render() {
    //const {}            = this.state;
    const { navigation }  = this.props;
    return (
      <View style={GrandtotalStyle.mainView}>
        <View style={GrandtotalStyle.rowView}>
          <Text style={GrandtotalStyle.grandTotalText}>{lang("grand_total")}</Text>
          <Text style={GrandtotalStyle.grandTotalAmountText}>50000</Text>
        </View>
      </View>
    );
  }
}

export default Reducer.connect(withNavigation(GrandtotalComponent), GrandtotalPresenter);