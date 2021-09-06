
// interface InfoToken {
//   username: string,
//   tokens :{
//     acessToken: string,
//     refreshToken: string,
//     exparedAt: number
//   }
// }

// interface ServicesInt {
//   postData: () => InfoToken,
//   userPostFetch: () => void,
//   userLoginFetch: () => void,
//   getRefreshFetch: () => void
// }

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

  postData = async (url:string, data:UserInfo|ShortUserInfo) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({...data})
    });

    return await res.json();
  };

  userPostFetch =  async(user:UserInfo) => {
    this.postData('http://react-test.somee.com/api/register', user)
    .then(data => {
      localStorage.setItem("acessToken", data.tokens.acessToken)
      localStorage.setItem("refreshToken", data.tokens.refreshToken)
    })
  }

  userLoginFetch =  async(user:ShortUserInfo) => {
    this.postData('http://react-test.somee.com/api/login', user)
    .then(data => {
      localStorage.setItem("acessToken", data.tokens.acessToken)
      localStorage.setItem("refreshToken", data.tokens.refreshToken)
    })  
  }
  getRefreshFetch = () => {
    
    const token = localStorage.getItem("refreshToken");
    const tokenQery = `refreshToken=${token}`;
    if (token) {
      return fetch('http://react-test.somee.com/api/refresh?'+ tokenQery, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          console.log(data.message);
          localStorage.clear();
        } 
      })
    }
  }

  getProfileFetch = () => {
    const token = localStorage.getItem("acessToken");
        
    return  fetch('http://react-test.somee.com/api/user', {
      method: "GET",
        headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
          'Authorization': `${token}`
        }
    })            
  }
}