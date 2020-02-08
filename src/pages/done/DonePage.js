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
import DonePresenter       from "./DonePresenter";
import DoneStyle           from "./DoneStyle";
import { createNavigationOptions }  from "~/helper/NavigatorHelper";
import lang                         from "~/lang";
import DoneIcon                     from "@assets/done-illustration.png";

class DonePage extends Component {
  presenter                 = new DonePresenter(this);

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
    const data = navigation.getParam("doneData");
    return (
      <View style={DoneStyle.mainView}>
        <View style={{ flex : 1 }}>
          <Text style={DoneStyle.doneText}>{data.title}</Text>
          <Image source={data.icon} style={DoneStyle.doneIcon}/> 
          <Text style={DoneStyle.informationText}>{data.notif}</Text>
        </View>
        
        <TouchableOpacity 
          style={DoneStyle.backToHomeButton}
          activeOpacity={0.85}
        >
          <Text style={DoneStyle.backToHomeText}>
            {data.buttonText}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Reducer.connect(DonePage, DonePresenter);