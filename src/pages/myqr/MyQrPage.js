import React, { Component }         from "react";
import  Reducer                     from "~/core/Reducer";
import {
  BackHandler,
  View,
  Text,
  Dimensions,
  Image
}                                   from "react-native";
import PropTypes                    from "prop-types";
import MyQrPresenter       from "./MyQrPresenter";
import MyQrStyle           from "./MyQrStyle";
import { createNavigationOptions }  from "~/helper/NavigatorHelper";
import lang                         from "~/lang";
import QRCode from 'react-native-qrcode';
import smallPayIcon from "@assets/small-pay-icon.png";

class MyQrPage extends Component {
  presenter                 = new MyQrPresenter(this);

  static navigationOptions  = createNavigationOptions(lang("my_qr.title"));
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
    const data = JSON.parse(navigation.getParam("data", JSON.stringify({
      type : "bistro_123",
      noRek : "0895611234" 
    })));
    const { width } = Dimensions.get("window");
    return (
      <View style={MyQrStyle.mainView}>
        <View style={MyQrStyle.qrcodeView}>
          <QRCode
              value={JSON.stringify({
                type : data.type,
                noRek : data.noRek
              })
              }
              size={width*4/6}
              bgColor='black'
              fgColor='white'/>
        </View>
        <View style={MyQrStyle.stepView}>
          <View style={MyQrStyle.firstStepView}>
            <Text style={{...MyQrStyle.stepText , marginBottom : -10}}>{`1. ${lang("my_qr.step_1")} `}</Text>
            <Image source={smallPayIcon} style={MyQrStyle.smallPayIconImage}/>
            <Text style={MyQrStyle.payText}>{` ${lang("my_qr.pay")}`}</Text>
          </View>
          <Text style={MyQrStyle.stepText}>{`2. ${lang("my_qr.step_2")}`}</Text>
          <Text style={MyQrStyle.stepText}>{`3. ${lang("my_qr.step_3")}`}</Text>
        </View>
      </View>
    );
  }
}

export default Reducer.connect(MyQrPage, MyQrPresenter);