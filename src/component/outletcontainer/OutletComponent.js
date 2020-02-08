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
import OutletPresenter       from "./OutletPresenter";
import OutletStyle           from "./OutletStyle";
import lang                 from "~/lang";
//icon
import RightCircleArrowIcon         from "@assets/right-arrow-circle.png";

class OutletComponent extends Component {
  presenter                 = new OutletPresenter(this);

  static propTypes          = {
    navigation  : PropTypes.object,
    outletDetail : PropTypes.object
  };

  render() {
    //const {}            = this.state;
    const { navigation, outletDetail }  = this.props;
    return (
      <TouchableOpacity 
        activeOpacity={0.85}
        style={OutletStyle.mainView}>
        <View style={OutletStyle.imageContainer}>
          <Image 
            source={{ uri : "https://toptier.id/wp-content/uploads/2018/02/toptier-layar-seafood-2-650x500.jpg" }}
            style={{ height : 80, width : 80, borderRadius : 8 }}
          />
        </View>
        <View style={OutletStyle.informationContainer}>
          <Text style={OutletStyle.restaurantNameText}>{outletDetail?.name}</Text>
          <Text style={OutletStyle.restaurantTypeText}>Chinese Seafood</Text>
          <Text style={OutletStyle.restaurantLocationText}>{outletDetail?.address}</Text>
          <View style={OutletStyle.orderNowContainer}>
            <Text style={OutletStyle.orderNowText}>
              {lang("outlet.label.order_now")}
            </Text>
            <Image style={OutletStyle.orderNowIcon}source={RightCircleArrowIcon}/>
          </View>
        </View>
       
      </TouchableOpacity>
    );
  }
}

export default Reducer.connect(withNavigation(OutletComponent), OutletPresenter);