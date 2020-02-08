import  Presenter           from "~/core/Presenter";
import  AuthService         from "~/service/AuthService";
import { AsyncStorage }     from "react-native";
import Toast               from "react-native-root-toast";

export default class ConfirmationPinPresenter extends Presenter {

  authService = new AuthService(this);

  constructor(component) {
    super(component);
    component.state = {
      confirmationPin : ""
    };
  }

  static mapDispatchToProps(dispatch) {
    return {};
  }

  static mapStateToProps(state) {
    return {};
  }

  async register() {
    let data = this.props.navigation.getParam("registerData");
    const { confirmationPin } = this.state;
    if(await this.isPinValid(data.pin, confirmationPin)) {
      try {
        const response = await this.authService.register(data);
        if(response?.data) {
          Toast.show(response.data.otp_code, {
            duration  : Toast.durations.LONG, 
            position  : Toast.positions.CENTER
          });
          navigation.navigate("VerificationOtpPage", { phoneNumber : data.phone, registerData : null });
        }
      } catch(e) {
        console.log(e);
      }
    } else {
      Toast.show("Pin yang dimasukkan tidak sesuai", {
        duration : Toast.durations.LONG,
        position : 420
      });
    }
  }

  maskingPin(pin) {
    let { confirmationPin } = this.state;
    if(pin.nativeEvent?.text.length >= 1 ) {
      if(pin.nativeEvent?.text.length < confirmationPin.length) {
        currentPin = null;
      } else {
        currentPin = pin.nativeEvent?.text.substr(-1);
      }
    } else if(pin.nativeEvent?.text.length < 1 ) {
      confirmationPin = confirmationPin.slice(0, confirmationPin.length - 1);
      currentPin = null;
    }
    if(currentPin) {
      confirmationPin = confirmationPin + currentPin.toString();
    } else {
      confirmationPin = confirmationPin.slice(0, confirmationPin.length - 1);
    }
    this.setState({ pin : pin, confirmationPin });
  }

  async isPinValid(insertedPin, confirmationPin) {
    return insertedPin == confirmationPin;
  }

  

}