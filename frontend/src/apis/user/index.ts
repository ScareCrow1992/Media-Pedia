import { apiClient } from "../client";
import { UserDTO } from "./types";

export const fetchTesterLogin = async(): Promise<UserDTO[]> => {
    try{
        const res = await apiClient.get("/users");
        return res.data;
    }
    catch(error){
        console.log("Post 실패 : ", error);
        return [];
    }    
}

