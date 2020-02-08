import BaseService from "./BaseService";

class OutletsService extends BaseService {
  
  async getOutlets(query) {
    const options = {
      method : "GET"
    };
    try {
      return this.fetch(`v1/outlets?order_key=name&order=asc&limit=10&name=${query}`, options, true);
    } catch(e) {
      console.log(e.message);
    }
  }
}

export default OutletsService;