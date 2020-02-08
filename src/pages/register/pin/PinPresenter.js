import  Presenter           from "~/core/Presenter";
import  AuthService         from "~/service/AuthService";
import { AsyncStorage }     from "react-native";
import Toast                from "react-native-root-toast";

export default class PinPresenter extends Presenter {

  authService = new AuthService(this);

  constructor(component) {
    super(component);
    component.state = {
      realPin : ""
    };
  }

  static mapDispatchToProps(dispatch) {
    return {};
  }

  static mapStateToProps(state) {
    return {};
  }

  maskingPin(pin) {
    let { realPin } = this.state;
    if(pin.nativeEvent?.text.length >= 1 ) {
      if(pin.nativeEvent?.text.length < realPin.length) {
        currentPin = null;
      } else {
        currentPin = pin.nativeEvent?.text.substr(-1);
      }
    } else if(pin.nativeEvent?.text.length < 1 ) {
      realPin = realPin.slice(0, realPin.length - 1);
      currentPin = null;
    }
    if(currentPin) {
      realPin = realPin + currentPin.toString();
    } else {
      realPin = realPin.slice(0, realPin.length - 1);
    }
    this.setState({ pin : pin, realPin });
  }

  toPinConfirmationPage() {
    const { realPin } = this.state;
    const { navigation } = this.props;
    const registerData = {
      ...navigation.getParam("registerData"),
      pin : realPin
    };
    if(realPin.length == 4) {
      navigation.navigate("ConfirmationPinPage", { registerData });
    } else {
      alert("pin Kurang");
    }
  }

  

}