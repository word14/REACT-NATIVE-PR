import React, { Component }         from "react";
import  Reducer                     from "~/core/Reducer";
import {
  BackHandler,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
}                                   from "react-native";
import PropTypes                    from "prop-types";
import PayPresenter       from "./PayPresenter";
import PayStyle           from "./PayStyle";
import { createNavigationOptions }  from "~/helper/NavigatorHelper";
import lang                         from "~/lang";
import { BarCodeScanner, Permissions } from "expo";
// import QRCodeScanner from 'react-native-qrcode-scanner';

class PayPage extends Component {
  presenter                 = new PayPresenter(this);

  static navigationOptions  = createNavigationOptions(lang("pay.title"));
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
    this.presenter.goToTransferPage(type, data);
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

export default Reducer.connect(PayPage, PayPresenter);