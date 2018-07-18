import axios from "axios"
import {AxiosPromise } from "axios"
import { injectable } from "inversify"
import Config from '../config'

export interface IAuthData { 
    Email: string
    Password: string
}

export interface IAuthenticationService {
    getToken(Data: IAuthData): AxiosPromise<any>;
    setAuthToken(token: string): void;
    getAuthToken(): string | null;
    getAuthHeader(): any;
    getCaptchaKey(): string | undefined;
}

@injectable()
export class AuthenticationService implements IAuthenticationService {

    public getToken(Data: IAuthData): AxiosPromise<any> {
        const user = {
            "Email": Data.Email,
            "Password": Data.Password
        };

        const config =  {
            headers: {
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
                'Access-Control-Allow-Origin': '*'
            }
        }
        
        return axios.post(Config.API_URL + "token/", user, config);
    }

    public setAuthToken(token: string): void {
        const localStorage = this.getLocalStorage();
        if (localStorage)
        {
            localStorage.setItem('imjay_jwtToken', token);
        }
        else { 
            const tokenElement = document.getElementById('t') as HTMLInputElement;
            if (tokenElement != null) {
                tokenElement.value = token;
            }
        } 
    }

    public getAuthToken(): string | null {

        let token: string | null = "";
        const tokenElement = document.getElementById('t') as HTMLInputElement;

        if (tokenElement) {
            token = tokenElement.value
        } else {

            const localStorage = this.getLocalStorage();
            if (localStorage) {
                token = localStorage.getItem('imjay_jwtToken');
            }
        }

        return token;
    }

    public getLocalStorage(): Storage | null {
        if (typeof window !== "undefined") {
            return window.localStorage;
            // return localStorage.LocalStorage;
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

    public getCaptchaKey(): string | undefined {

        if (typeof window === 'undefined') { return '' };

        const captchaKeyElement = document.getElementById('rkey') as HTMLInputElement;
        if (captchaKeyElement != null)
        {
            return captchaKeyElement.value;
        }

        return '';

    }

}