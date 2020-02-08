import  Presenter          from "~/core/Presenter";

export default class EditAccountPresenter extends Presenter {
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
}