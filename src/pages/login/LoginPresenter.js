import  Presenter          from "~/core/Presenter";
import AuthService         from "~/service/AuthService";
import Toast from "react-native-root-toast";

export default class LoginPresenter extends Presenter {
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
    const { phoneNumber } = this.state;
    try {
      const response = await this.authService.otpRequest( { phone : phoneNumber });
      Toast.show(response.data.otp_code, {
        duration  : Toast.durations.LONG, 
        position  : Toast.positions.CENTER
      });
      this.props.navigation.navigate("VerificationOtpPage", { phoneNumber });
    } catch(e) {  
      Toast.show(
        typeof e?.message == "string" ? e?.message : e?.message?.phone?.[0], {
          duration  : Toast.durations.LONG, 
          position  : Toast.positions.CENTER
        });
      console.log(e);
    }
  }

}