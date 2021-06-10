import { SendGetRequest } from './HTTPService';
import { baseURL } from './Common';
export async function GetWebsiteSecurityScore(url) {
    return await SendGetRequest(`${baseURL}?domain=${url}`);
}