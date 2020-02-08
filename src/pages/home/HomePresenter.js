import  Presenter          from "~/core/Presenter";
import HomeService         from "~/service/HomeService";

export default class HomePresenter extends Presenter {
  homeService = new HomeService(this);
  
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

  async getData() {
    const { data } = await this.homeService.getHomeData();
    if(data) {
      this.setState({ 
        homeBannerData : data?.banners,
        homeCategoryData : data?.cms_outlets_categories
      });
    }
  }
}