import React, { Component } from "react";
import { withNavigation }   from "react-navigation";
import  Reducer             from "~/core/Reducer";
import {
  View,
  Text,
  FlatList
}                                   from "react-native";
import PropTypes                    from "prop-types";
import OrderItemPresenter           from "./OrderItemPresenter";
import OrderItemStyle           from "./OrderItemStyle";
import lang                         from "~/lang";
//component
import ItemComponent                from "~/component/item/ItemComponent";
class OrderItemComponent extends Component {
  presenter                 = new OrderItemPresenter(this);

  static propTypes          = {
    navigation  : PropTypes.object,
    useCartButton : PropTypes.bool
  };

  render() {
    //const {}            = this.state;
    const { navigation, useCartButton }  = this.props;
    return (
      <FlatList 
        style={OrderItemStyle.mainView}
        ItemSeparatorComponent={() => {
          return <View style={OrderItemStyle.separator}></View>;
        }}
        data={[ 1, 2, 3 ]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return <ItemComponent useCartButton={useCartButton}/>;
        }}
        
      />
    );
  }
}

export default Reducer.connect(withNavigation(OrderItemComponent), OrderItemPresenter);