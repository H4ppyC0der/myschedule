"use client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useSession, signIn, signOut } from "next-auth/react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function LoginForm() {
    return (
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Login</TabsTrigger>
                <TabsTrigger value="password">Signup</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <Card>
                    <CardHeader>
                        <CardTitle>Welcome</CardTitle>
                        <CardDescription>
                            Provide your registered email address and password.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="youremail@gmail.com"
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" />
                        </div>
                    </CardContent>
                    <CardContent className="text-center">
                        <Button
                            onClick={() =>
                                toast("No account yet", {
                                    description:
                                        "Please contact your system admin for assistance.",
                                    action: {
                                        label: "close",
                                        onClick: () => {},
                                    },
                                })
                            }
                        >
                            Login
                        </Button>
                    </CardContent>
                    <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                        <span className="relative z-10 bg-background px-2 text-muted-foreground">
                            Or continue with
                        </span>
                    </div>

                    <CardContent>
                        <form>
                            <div className="grid gap-6">
                                <div className="flex flex-col gap-4">
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                        onClick={() => signIn()}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        Google
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="password">
                <Card>
                    <CardHeader>
                        <CardTitle>Registration</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="first-name">First name</Label>
                            <Input id="first-name" type="text" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="last-name">Last name</Label>
                            <Input id="last-name" type="text" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="organization">Organization</Label>
                            <Input id="organization" type="text" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="email">
                                Organization&apos;s email address
                            </Label>
                            <Input id="email" type="email" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="confirm-password">
                                Confirm password
                            </Label>
                            <Input id="confirm-password" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter className="text-center">
                        <Button
                            onClick={() =>
                                toast("No account yet", {
                                    description:
                                        "Please contact your system admin for assistance.",
                                    action: {
                                        label: "close",
                                        onClick: () => {},
                                    },
                                })
                            }
                        >
                            Submit
                        </Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    );
}
