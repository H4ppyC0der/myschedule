import React from "react";
import Nav from "@/components/nav/Nav";
import { LoginForm } from "@/components/login-form/LoginForm";

const page = () => {
    return (
        <>
            <Nav
                buttonText="Back"
                pageLink="/"
                organizationLogo="/help-squad-logo-black.png"
            />
            <main className="h-fit flex justify-center items-center">
                <LoginForm />
            </main>
        </>
    );
};

export default page;
