import React                        from "react";
import { Asset, AppLoading, Font }  from "expo";
import Navigator                    from "~/component/Navigator";
import { StyleSheet, Text, View }   from "react-native";
import store                        from "~/store";
import { Provider }                 from "react-redux";
export default class App extends React.Component {
  images = [
    require("./assets/unchecked-radio-button.png"),
    require("./assets/checked-radio-button.png"),
    require("./assets/right-arrow-circle.png"),
    require("./assets/done-illustration.png"),
    require("./assets/search-icon.png"),
    require("./assets/arrow-left.png"),
    require("./assets/home-icon.png"),
    require("./assets/active-home-icon.png"),
    require("./assets/account-icon.png"),
    require("./assets/active-account-icon.png"),
    require("./assets/minus-icon.png"),
    require("./assets/plus-icon.png"),
    require("./assets/right-arrow-circle.png"),
    require("./assets/cta-icon.png"),
    require("./assets/pay-icon.png"),
    require("./assets/qr-icon.png"),
    require("./assets/top-up-icon.png"),
    require("./assets/history-icon.png"),
    require("./assets/pin-icon.png"),
    require("./assets/language-icon.png"),
    require("./assets/logout-icon.png"),
    require("./assets/account-icon.png"),
    require("./assets/active-account-icon.png"),
    require("./assets/english-icon.png"),
    require("./assets/indonesian-icon.png"),
    require("./assets/checked-radio-button.png"),
    require("./assets/small-pay-icon.png"),
    require("./assets/small-logo.png"),
    require("./assets/active-order-icon.png"),
    require("./assets/order-icon.png"),
    require("./assets/balance-icon.png")
  ];

  fonts = {
    "AvenirNext-Bold"     : require("./fonts/AvenirNext-Bold.ttf"),
    "AvenirNext-Medium"   : require("./fonts/AvenirNext-Medium.ttf"),
    "Futura-Bold"         : require("./fonts/Futura-Bold.ttf")
  };

  state = {
    isReady : false
  }
  
  loadApp() {
    return Promise.all([
      this.loadImages(),
      this.loadFonts()
    ]);
  }

  loadImages() {
    return this.images.map(image => Asset.fromModule(image).downloadAsync());
  }

  loadFonts() {
    return Font.loadAsync(this.fonts);
  }

  render() {
    return (
      this.state.isReady ?
        <Provider store={store}>
          <Navigator/>
        </Provider> :
        <AppLoading 
          startAsync={this.loadApp.bind(this)}
          onFinish={() => this.setState({ isReady : true })}
        /> 
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "#fff",
    alignItems : "center",
    justifyContent : "center"
  }
});

console.disableYellowBox = true;