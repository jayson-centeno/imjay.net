import { AxiosPromise } from "axios";
import Config from '../config';
import { injectable, inject } from "inversify";
import { IHttpHelper } from './HttpHelper';

export interface IAuthData { 
    Email: string
    Password: string
}

interface ITokenData {
    TimeStamp:number,
    Token: string
}

export interface IAuthenticationService {
    getTokenFromDb(Data: IAuthData): AxiosPromise<any>;
    setAuthToken(token: ITokenData): void;
    getAuthToken(): string | null;
    getAuthHeader(): any;
    getCaptchaKey(): string | '';
}

@injectable()
export class AuthenticationService implements IAuthenticationService {

    private httpHelper : IHttpHelper;

    constructor(@inject("IHttpHelper") httpHelper: IHttpHelper)
    {
        this.httpHelper = httpHelper;
    }

    public getTokenFromDb(Data: IAuthData): AxiosPromise<any> {
        return this.httpHelper.Post(Config.API_URL + "token/", Data);
    }

    public setAuthToken(token: ITokenData): void {

        const localStorage = this.getLocalStorage();
        const tokenData = JSON.stringify(token);

        if (localStorage) {
            localStorage.setItem(Config.TOKEN_KEY, tokenData);
        }
        else {

            const tokenElement = document.getElementById(Config.TOKEN_ELEMENT_ID) as HTMLInputElement;
            if (tokenElement != null) {
                tokenElement.value = tokenData;
            }

        }
    }

    public getAuthToken(): string | null {

        let tempToken: string | null = "";

        const localStorage = this.getLocalStorage();

        if (localStorage) {
            tempToken = localStorage.getItem(Config.TOKEN_KEY);
        } else {

            const tokenElement = document.getElementById(Config.TOKEN_ELEMENT_ID) as HTMLInputElement;
            if (tokenElement && tokenElement.value !== '') {
                tempToken = tokenElement.value;
            }

        }

        if(tempToken !== null)
        {
            let tokenData : ITokenData;

            try{

                tokenData = JSON.parse(tempToken) as ITokenData;
                const isActive = new Date(tokenData.TimeStamp).getTime() >= new Date().getTime();

                if(isActive){
                    tempToken = tokenData.Token
                } else {

                    tempToken = null;
                    this.ClearToken();

                }

            } catch(e){
                tempToken = null;
                this.ClearToken();
            }
   
        }

        return tempToken;
    }

    public ClearToken(): void {

        const localStorage = this.getLocalStorage();

        if(localStorage !== null){
            localStorage.removeItem(Config.TOKEN_KEY);
        } else {
            const tokenElement = document.getElementById(Config.TOKEN_ELEMENT_ID) as HTMLInputElement;
            if(tokenElement !== null){
                tokenElement.value = "";
            }
        }
    }

    public getLocalStorage(): Storage | null {
        if (typeof window !== "undefined") {
            return window.localStorage;
        } else {
            return null;
        }
    }

    public getAuthHeader(): any {
        return {
            headers: {
                "Authorization": this.getAuthToken()
            }
        }
    }

    public getCaptchaKey(): string | '' {

        if (typeof window === 'undefined') { return '' };

        const captchaKeyElement = document.getElementById(Config.CAPTCHA_ELEMENT_KEY) as HTMLInputElement;
        if (captchaKeyElement != null){
            return captchaKeyElement.value;
        }

        return '';
    }

}