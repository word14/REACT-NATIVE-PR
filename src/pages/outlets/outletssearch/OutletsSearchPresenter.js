import  Presenter          from "~/core/Presenter";
import  OutletsService from "~/service/OutletsService";

export default class OutletsSearchPresenter extends Presenter {
  outletsService = new OutletsService(this);

  constructor(component) {
    super(component);
    component.state = {
      outletName : ""
    };
  }

  static mapDispatchToProps(dispatch) {
    return {};
  }

  static mapStateToProps(state) {
    return {};
  }

  async getOutlets(outletName = "") {
    console.log(outletName);
    try {
      clearTimeout(this.timeout);
      this.timeout = setTimeout( async () => {
        const response = await this.outletsService.getOutlets(outletName);
        if(response?.data) {
          this.setState({ outlets : response.data });
        }
      }, 200);
       
    } catch(e) {
      console.log(e);
    }
  }
}