export async function SendGetRequest(url) {
    try {
        let response = await fetch(url,
            {
                method: 'GET'
            });
        let json = await response.json();
        return json;
    }
    catch (err) {
        return null;
    }
}
export async function SendPostRequest(url, data) {
    try {
        let response = await fetch(url,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
        return response.json();
    }
    catch (err) {
        return null;
    }
}
