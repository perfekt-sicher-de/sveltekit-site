import { SendPostRequest } from './HTTPService';
import { baseURL } from './Common';
export async function PostContactQuery(data) {
    return await SendPostRequest(baseURL, data);
}