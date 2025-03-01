import React from "react";
import Nav from "@/components/nav/Nav";
import { LoginForm } from "@/components/login-form/LoginForm";
import { signIn, signOut, auth } from "@/app/auth";

const page = async () => {
    // const session = await auth();
    // console.log(session?.user);
    return (
        <>
            <Nav
                buttonText="Back"
                pageLink="/"
                organizationLogo="/help-squad-logo-black.png"
            />
            <main className="h-fit flex justify-center items-center mt-[20vh]">
                <LoginForm />
            </main>
        </>
    );
};

export default page;
