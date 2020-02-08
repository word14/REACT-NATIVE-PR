import React, { Component }         from "react";
import  Reducer                     from "~/core/Reducer";
import {
  BackHandler,
  View,
  Text,
  Image,
  TouchableOpacity
}                                   from "react-native";
import PropTypes                    from "prop-types";
import CheckoutDonePresenter        from "./CheckoutDonePresenter";
import CheckoutDoneStyle            from "./CheckoutDoneStyle";
import { createNavigationOptions }  from "~/helper/NavigatorHelper";
import lang                         from "~/lang";
//icon
import DoneIcon                     from "@assets/done-illustration.png";

class CheckoutDonePage extends Component {
  presenter                 = new CheckoutDonePresenter(this);

  static navigationOptions  = {
    header : null
  };
  
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
      <View style={CheckoutDoneStyle.mainView}>
        <View style={{ flex : 1 }}>
          <Text style={CheckoutDoneStyle.doneText}>Done</Text>
          <Image source={DoneIcon} style={CheckoutDoneStyle.doneIcon}/> 
          <Text style={CheckoutDoneStyle.informationText}>{lang("checkout_done.information")}</Text>
        </View>
        
        <TouchableOpacity 
          style={CheckoutDoneStyle.backToHomeButton}
          activeOpacity={0.85}
        >
          <Text style={CheckoutDoneStyle.backToHomeText}>
            {lang("checkout_done.button.back_to_home")}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Reducer.connect(CheckoutDonePage, CheckoutDonePresenter);