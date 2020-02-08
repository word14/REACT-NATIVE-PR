import  Presenter          from "~/core/Presenter";

export default class ItemPresenter extends Presenter {
  constructor(component) {
    super(component);
    component.state = {
      quantity : 0,
      endEditing : true
    };
  }

  static mapDispatchToProps(dispatch) {
    return {};
  }

  static mapStateToProps(state) {
    return {};
  }
}