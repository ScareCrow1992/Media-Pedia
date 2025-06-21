import { apiPublicClient } from "../client";
import { LoginDTO, UserRegisterDTO } from "./types";

export const fetchUserRegister = async (userRegisterDTO : UserRegisterDTO) =>{
    const res = await apiPublicClient.post("/auth/register", userRegisterDTO);
    return res.data;
}

export const fetchLogin = async (loginDTO : LoginDTO) =>{
    const res = await apiPublicClient.post("/auth/login", loginDTO);
    return res.data;
}