import axios from 'axios';
import {UserInfo, ShortUserInfo} from '../interfaces/interfaces'

export default class Services {
  private static instance: Services;
  private CancelToken = axios.CancelToken;
  private source = this.CancelToken.source();
  private  headers = { 
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  };
  public static getInstance(): Services {
    if (!Services.instance) {
      Services.instance = new Services();
    }

    return Services.instance;
  }
  public postData = async(url:string, data:UserInfo|ShortUserInfo) => {
    return axios(
      {
        method: "POST",
        url, 
        headers:this.headers,
        data: {...data}
      });
  };

  public getRefreshToken = () => {
    const token = localStorage.getItem("refreshToken");
    const tokenQery = `refreshToken=${token}`;
    return axios('api/refresh?'+ tokenQery, {
      method: "GET",
      headers: this.headers,
    })
  }

  public getProfileUser = () => {
    const token = localStorage.getItem("acessToken");
    return  axios.get('api/user', {
        headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
          'Authorization': `${token}`
        },
        cancelToken: this.source.token
    })            
  }
}