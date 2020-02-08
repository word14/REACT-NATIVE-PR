import  Presenter          from "~/core/Presenter";
import  OutletsService from "~/service/OutletsService";

export default class ComponentNamePresenter extends Presenter {

  outletsService = new OutletsService(this);

  constructor(component) {
    super(component);
    component.state = {
      outletName : "",
      outlets : []
    };
  }

  static mapDispatchToProps(dispatch) {
    return {};
  }

  static mapStateToProps(state) {
    return {};
  }

  async getOutlets() {
    try {
      const { outletName } = this.state;
      const response = await this.outletsService.getOutlets("");
      if(response?.data) {
        this.setState({ outlets : response.data });
      } 
    } catch(e) {
      console.log(e.message);
    }
  }
}