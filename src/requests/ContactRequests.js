import { SendPostRequest } from './HTTPService';
import { contactURL } from './Common';
export async function PostContactQuery(data) {
    return await SendPostRequest(contactURL, data);
}
