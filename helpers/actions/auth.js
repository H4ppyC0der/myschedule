"use server";
import { signIn, signOut } from "@/app/auth";

export const login = async () => {
    try {
        await signIn("google", { redirect: false });
    } catch (err) {
        if (err) console.log(err);
    }
};

export const logout = async () => {
    await signOut({ redirectTo: "/" });
};
