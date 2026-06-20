import {google} from "googleapis"
import  apikeys from "./apikeys.json"
import Config from "./config"


async function authorize(){
    const jwtClient = new google.auth.JWT(
        apikeys.client_email,
        null,
        apikeys.private_key,
        Config.scope
    );
    await jwtClient.authorize();
    return jwtClient;
}

export const GetGDrive = async () => {
    const authClient = await authorize();
    const drive = google.drive({version:'v3',auth:authClient});
    return drive;
}