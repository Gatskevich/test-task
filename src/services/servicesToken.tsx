import Service from './services'


export default class ServicesToken {
    private ser = Service.getInstance();


    private refreshToken = () => {
        this.ser.getRefreshToken()
        .then((data:any) => {
            localStorage.setItem("acessToken", data.data.tokens.acessToken)
            localStorage.setItem("refreshToken", data.data.tokens.refreshToken)
        })
        .catch((data:any) => {
            localStorage.clear();
        })  
    }

    private createTimer = (exparedAt:number) => {
        const timing:number = exparedAt*1000;
        const timerId = setInterval(this.refreshToken, timing - 60000);
        if(!localStorage.getItem("refreshToken")){
            clearInterval(timerId)
        }

    }

    public addToken = (data:any) => {
        console.log("data", data);
        localStorage.setItem("acessToken", data.data.tokens.acessToken)
        localStorage.setItem("refreshToken", data.data.tokens.refreshToken)
        localStorage.setItem("exparedAt", data.data.tokens.exparedAt)
        this.createTimer(data.data.tokens.exparedAt)
    }
}