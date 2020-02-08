import  Presenter          from "~/core/Presenter";
import lang from "~/lang";
import doneIcon from "@assets/done-illustration.png";
export default class EnterPinPresenter extends Presenter {
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

  _getDoneData() {
    const doneData = {
      title : lang("account.done_page.title"),
      notif : lang("account.done_page.notif"),
      buttonText : lang("account.done_page.button_text"),
      icon : doneIcon
    };

    this.setState({ doneData });
  }
}