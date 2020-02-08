import React, { Component } from "react";
import { withNavigation }   from "react-navigation";
import  Reducer             from "~/core/Reducer";
import {
  View,
  Text
}                           from "react-native";
import PropTypes            from "prop-types";
import OutletItemPresenter       from "./OutletItemPresenter";
import OutletItemStyle           from "./OutletItemStyle";
import lang                 from "~/lang";

//component
import OrderItemComponent from "~/component/orderitem/OrderItemComponent";


class OutletItemComponent extends Component {
  presenter                 = new OutletItemPresenter(this);

  static propTypes          = {
    navigation  : PropTypes.object,
    categoryName : PropTypes.string
  };

  render() {
    //const {}            = this.state;
    const { navigation, categoryName }  = this.props;
    return (
      <View style={OutletItemStyle.mainView}>
        <View style={OutletItemStyle.categoryNameView}>
          <Text style={OutletItemStyle.categoryNameText}>{categoryName}</Text>
          <View style={OutletItemStyle.separator}/>
        </View>
        <OrderItemComponent useCartButton={true}/>
      </View>
    );
  }
}

export default Reducer.connect(withNavigation(OutletItemComponent), OutletItemPresenter);