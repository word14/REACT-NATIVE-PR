import Presenter           from "~/core/Presenter";
import AuthService         from "~/service/AuthService";
import Toast               from "react-native-root-toast";
import lang                         from "~/lang";

export default class RegisterPresenter extends Presenter {

  authService = new AuthService(this);

  constructor(component) {
    super(component);
    component.state = {
      isChecked : false
      // name : "Kevin Charlie",
      // phone : "81212191198",
      // email : "soratavin27@gmail.com"
      // pin : "1234"
    };
  }

  static mapDispatchToProps(dispatch) {
    return {};
  }

  static mapStateToProps(state) {
    return {};
  }

  async register() {

    const {
      phone,
      name,
      email,
      pin,
      isChecked
    } = this.state;
    const { navigation } = this.props;

    const data = {
      phone : `0${phone}`,
      first_name : name.split(" ")[0],
      last_name : name.split(" ")[1] || "",
      email,
      pin
    };
    if(this.isChecked()) {
      navigation.navigate("PinPage", { registerData : data });
    }
  }

  isChecked() {
    const { isChecked } = this.state;
    if(!isChecked) {
      Toast.show(lang("registration.term_and_condition"), {
        duration : Toast.durations.LONG,
        position : 420
      });
      return false;
    }
    return true;
  }
}