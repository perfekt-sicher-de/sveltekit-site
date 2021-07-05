import { SendGetRequest } from './HTTPService';
import { scanURL } from './Common';
export async function GetWebsiteSecurityScore(url) {
    return await SendGetRequest(`${scanURL}?domain=${url}`);
}
