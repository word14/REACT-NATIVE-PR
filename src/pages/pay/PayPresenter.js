import  Presenter          from "~/core/Presenter";

export default class PayPresenter extends Presenter {
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

  goToTransferPage(type, data) {
    try {
      const qrData = JSON.parse(data);
      if(qrData.type == "bistro_123") {
        this.props.navigation.navigate("TransferPage", {qrData})
      }
    } catch(e) {}
  }
}