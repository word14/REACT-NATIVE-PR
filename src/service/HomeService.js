import BaseService from "./BaseService";

export default class HomeService extends BaseService {

  getHomeData(data) {
    const options = {
      method  : "GET"
    };
    return this.fetch("v1/cms/home", options);
  }
}