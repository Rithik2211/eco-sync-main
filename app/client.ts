import { createThirdwebClient } from 'thirdweb';

const clientId = process.env.THIRD_WEB_CLIENT_ID;

if(!clientId){
    throw new Error("ThirdWeb client id not provided!")
}

export const client = createThirdwebClient({
    clientId : clientId
})