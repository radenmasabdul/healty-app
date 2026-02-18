"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchema } from "../schemas/login.schema";
import { authApi } from "../services/auth.api";
import { useAuthStore } from "../stores/authStore";
import { useAlertStore } from "@/store/useAlertStore";

export const useLogin = () => {
    const router = useRouter();
    const { setUser } = useAuthStore();
    const { setAlert } = useAlertStore();

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const form = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const togglePassword = () => setShowPassword(prev => !prev)

    const onSubmit = async (data: LoginSchema) => {
        try {
            setIsLoading(true);
            
            const res = await authApi.login(data);
            
            const { ...user } = res;

            setUser(user);
            localStorage.setItem("user", JSON.stringify({ 
                email: user.email,
                username: user.username,
                fullName: `${user.firstName} ${user.lastName}` 
            }));

            setAlert("Login successful", "success");
            router.push("/dashboard");
            
        } catch (error) {
            console.error(error);
            setAlert("Invalid credentials", "error");
        } finally {
            setIsLoading(false);
        }
    };

    return {
        ...form,
        showPassword,
        togglePassword,
        onSubmit,
        isLoading,
    };
};