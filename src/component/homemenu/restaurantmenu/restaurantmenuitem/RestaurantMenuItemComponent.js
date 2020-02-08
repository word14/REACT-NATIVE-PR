import React, { Component } from "react";
import { withNavigation }   from "react-navigation";
import  Reducer             from "~/core/Reducer";
import {
  View,
  Text,
  Image
}                           from "react-native";
import PropTypes            from "prop-types";
import RestaurantMenuItemPresenter       from "./RestaurantMenuItemPresenter";
import RestaurantMenuItemStyle           from "./RestaurantMenuItemStyle";
import lang                 from "~/lang";

class RestaurantMenuItemComponent extends Component {
  presenter                 = new RestaurantMenuItemPresenter(this);

  static propTypes          = {
    navigation  : PropTypes.object,
    data  : PropTypes.object
  };

  render() {
    //const {}            = this.state;
    const { navigation, data }  = this.props;
    return (
      <View style={RestaurantMenuItemStyle.mainView}>
        <Image source={{ uri : data?.image || "" }} style={RestaurantMenuItemStyle.itemImage}/>
        <Text style={RestaurantMenuItemStyle.restaurantName}>{data?.name}</Text>
        <Text style={RestaurantMenuItemStyle.restaurantCategory}>Chinese Food</Text>
        <Text style={RestaurantMenuItemStyle.restaurantLocation}>{data?.address}</Text>
      </View>
    );
  }
}

export default Reducer.connect(withNavigation(RestaurantMenuItemComponent), RestaurantMenuItemPresenter);