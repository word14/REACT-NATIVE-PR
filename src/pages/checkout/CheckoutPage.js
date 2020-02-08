import React, { Component }         from "react";
import  Reducer                     from "~/core/Reducer";
import {
  BackHandler,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Switch
}                                   from "react-native";
import PropTypes                    from "prop-types";
import CheckoutPresenter       from "./CheckoutPresenter";
import CheckoutStyle           from "./CheckoutStyle";
import { createNavigationOptions }  from "~/helper/NavigatorHelper";
import lang                         from "~/lang";

//componenet
import OrderItemComponent from "~/component/orderitem/OrderItemComponent";
import GrandTotalComponent from "~/component/grandtotal/GrandTotalComponent";


class CheckoutPage extends Component {
  presenter                 = new CheckoutPresenter(this);

  static navigationOptions  = createNavigationOptions("Title");
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

  render() {
    //const {}            = this.state;
    const { navigation }  = this.props;
    return (
      <View style={CheckoutStyle.mainView}>
        <FlatList 
          data={this.presenter.getCheckoutComponent()}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => {
            return <View style={CheckoutStyle.separator}/>;
          }}
          renderItem={({ item, index }) => {
            if(item == CheckoutPresenter.CHECKOUT_COMPONENT.ORDER_ITEM) {
              return <OrderItemComponent useCartButton={true}/>;
            } else if(item == CheckoutPresenter.CHECKOUT_COMPONENT.ORDER_ADDITIONAL_INFORMATION) {
              return (
                <View style={CheckoutStyle.extraNoteView}>
                  <TextInput
                    placeholder={"Note"}
                    style={CheckoutStyle.noteTextInput}
                    multiline={true}
                  />
                  <View style={CheckoutStyle.rowView}>
                    <Text style={CheckoutStyle.dineInText}>{lang("history.detail.dine_in")}</Text>
                    <View style={CheckoutStyle.switchButton}>
                      <Switch/>
                    </View>
                  </View>
                </View>);
            } else if(item == CheckoutPresenter.CHECKOUT_COMPONENT.GRAND_TOTAL) {
              return <GrandTotalComponent/>;
            }
          }}
        />
        <TouchableOpacity style={CheckoutStyle.payButton}>
          <Text style={CheckoutStyle.payText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Reducer.connect(CheckoutPage, CheckoutPresenter);