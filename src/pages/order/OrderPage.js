import React, { Component }         from "react";
import  Reducer                     from "~/core/Reducer";
import {
  BackHandler,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
}                                   from "react-native";
import PropTypes                    from "prop-types";
import OrderPresenter               from "./OrderPresenter";
import OrderStyle                   from "./OrderStyle";
import { 
  createNavigationOptions,
  createBottomTabBarItem 
}  from "~/helper/NavigatorHelper";
import lang                         from "~/lang";
import { BarCodeScanner, Permissions } from "expo";
import activeOrderIcon              from "@assets/active-order-icon.png";
import orderIcon              from "@assets/order-icon.png";
import searchIcon              from "@assets/search-icon.png";

class OrderPage extends Component {
  presenter                 = new OrderPresenter(this);

  static navigationOptions = createNavigationOptions(
    lang("main.order.title"),
    navigation => ({
      headerLeft      : null,
      headerRight     : 
      <TouchableOpacity onPress={() => navigation.navigate("OutletsSearchPage")}>
        <Image source={searchIcon} style={OrderStyle.searchImage} />
      </TouchableOpacity>,
      ...createBottomTabBarItem({
        inactiveImage : orderIcon,
        activeImage   : activeOrderIcon,
        label         : lang("main.order.title")
      })
    })
  );

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

  handleBarCodeScanned = ({ type, data }) => {
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    this.props.navigation.navigate("OutletDetailPage");
  }

  render() {
    const { hasCameraPermission } = this.state;

    if(hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if(hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex : 1 }}>
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          style={StyleSheet.absoluteFill}
        />
      </View>
    );
  }
}

export default Reducer.connect(OrderPage, OrderPresenter);