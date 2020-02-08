import BaseService from "./BaseService";

class AuthService extends BaseService {
  
  register(data) {
    const options = {
      method  : "POST",
      body    : JSON.stringify(data)    
    };
    return this.fetch("v1/auth/register", options);
  }


  login(data) {
    const options = {
      method  : "POST",
      body    : JSON.stringify(data)    
    };
    return this.fetch("v1/auth/login", options);
  }

  otpRequest(data) {
    const options = {
      method  : "POST",
      body    : JSON.stringify(data)    
    };
    return this.fetch("v1/otp/request", options);
  }
  
}

export default AuthService;