import axios from "axios";
import { injectable } from "inversify";

export interface IHttpHelper
{
    Get(url:string, config?: any | null): any;
    Post(url:string, data?:any | null, config?: any | null): any;
}

@injectable()
export class HttpHelper implements IHttpHelper
{
    public Get(url:string, config?: any | null): any
    {
        return axios.get(url, config);
    }

    public Post(url:string, data?:any | null, config?: any | null): any 
    {
        return axios.post(url, data, config);
    }
}