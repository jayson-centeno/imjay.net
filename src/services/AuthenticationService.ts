import axios from "axios"
import { injectable } from "inversify"

export interface IAuthData { 
    Email: string
    Password: string
}

export interface IAuthenticationService {
    getToken(Data: IAuthData): any;
    setAuthToken(token: string): void;
    getAuthToken(): string | null;
    getAuthHeader(): any;
}

@injectable()
export class AuthenticationService implements IAuthenticationService {

    public getToken(Data: IAuthData): any {

        const user:any = { 
            email: Data.Email, 
            password:  Data.Password       
        };

        return axios.post("api/token", user)
    }

    public setAuthToken(token: string): void {
        const localStorage = this.getLocalStorage();
        if (localStorage) {
            localStorage.setItem('jcodes_jwtToken', token);
        }
        else { 
            const tokenElement = document.getElementById('Token') as HTMLInputElement;
            if (tokenElement != null){
                tokenElement.value = token;
            }
        } 
    }

    public getAuthToken(): string | null {

        let token: string | null = "";
        const tokenElement = document.getElementById('Token') as HTMLInputElement;

        if (tokenElement){
            token = tokenElement.value
        }
        else {

            const localStorage = this.getLocalStorage();
            if (localStorage) {
                token = localStorage.getItem('jcodes_jwtToken');
            }
        }

        return token;
    }

    public getLocalStorage(): Storage | null {
        if (typeof window !== "undefined") {
            return window.localStorage; // return localStorage.LocalStorage;
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

}