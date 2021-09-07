import axios from 'axios';

interface UserInfo {
  Username: string,
  Password: string,
  FirstName: string,
  LastName: string

}

interface ShortUserInfo {
  Username: string,
  Password: string
}

export default class Services {
  private static instance: Services;
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

  public getRefreshFetch = () => {
    const token = localStorage.getItem("refreshToken");
    const tokenQery = `refreshToken=${token}`;
    return axios('http://react-test.somee.com/api/refresh?'+ tokenQery, {
      method: "GET",
      headers: this.headers,
    })
  }

  public getProfileFetch = () => {
    const token = localStorage.getItem("acessToken");
    return  axios('http://react-test.somee.com/api/user', {
        method: "GET",
        headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
          'Authorization': `${token}`
        }
    })            
  }
}