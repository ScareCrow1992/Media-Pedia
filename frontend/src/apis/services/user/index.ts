import { apiPublicClient } from "../../client";
import { UserCredential } from "./types";

export const fetchTesterLogin = async(): Promise<UserCredential[]> => {
    try{
        const res = await apiPublicClient.get("/users");
        return res.data;
    }
    catch(error){
        console.log("Post 실패 : ", error);
        return [];
    }    
}

