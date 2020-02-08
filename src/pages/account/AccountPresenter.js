import  Presenter          from "~/core/Presenter";
import lang from "~/lang";

export default class AccountPresenter extends Presenter {
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

  getEnterPinData() {
    const enterPin = {
      title : lang("account.enter_pin.title"),
      notif : lang("account.enter_pin.notif"),
      buttonText : lang("account.enter_pin.button_text")
    };
    this.setState({ enterPin });
  }
}