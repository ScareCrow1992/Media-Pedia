import { apiClient } from "../client";
import { LoginDTO, UserRegisterDTO } from "./types";

export const fetchUserRegister = async (userRegisterDTO : UserRegisterDTO) =>{
    const res = await apiClient.post("/auth/register", userRegisterDTO);
    return res.data;
}

export const fetchLogin = async (loginDTO : LoginDTO) =>{
    const res = await apiClient.post("/auth/login", loginDTO);
    return res.data;
}