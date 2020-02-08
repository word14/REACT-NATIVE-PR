import  Presenter           from "~/core/Presenter";
import  AuthService         from "~/service/AuthService";
import { AsyncStorage } from "react-native";

export default class VerificationOtpPresenter extends Presenter {

  authService = new AuthService(this);

  constructor(component) {
    super(component);
    component.state = {};
  }

  static mapDispatchToProps(dispatch) {
    return {};
  }

  static mapStateToProps(state) {
    return {};
  }

  async login() {
    const { navigation }    = this.props;
    const phone             = navigation.getParam("phoneNumber");
    const { otpCode }       = this.state;
    try {
      const response          = await this.authService.login({ phone, otp : otpCode });
      if(response.data) {
        await AsyncStorage.multiSet(
          [
            [ "access_token", response?.data?.access_token ],
            [ "phone", phone ]
          ]
        );
        navigation.navigate("MainPage");
      }
    } catch(e) {
      console.log(e);
    }
    
  }

  async resend() {
    const { phoneNumber } = this.state;
    try {
      const response = await this.authService.otpRequest( { phone : phoneNumber });
    } catch(e) {
      this.setState({ isResend : false });
      console.log(e);
    }
  }

}