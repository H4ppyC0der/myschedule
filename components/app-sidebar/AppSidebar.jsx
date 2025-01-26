import React from "react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
    {
        title: "Overview",
        url: "#",
        icon: "Home",
    },
    {
        title: "LOB",
        url: "#",
        icon: "Inbox",
    },
    {
        title: "Clients",
        url: "#",
        icon: "Calendar",
    },
    {
        title: "Agents",
        url: "#",
        icon: "Search",
    },
    {
        title: "Scheduler",
        url: "#",
        icon: "Search",
    },
    {
        title: "Users",
        url: "#",
        icon: "Settings",
    },
];
const AppSidebar = () => {
    return (
        <Sidebar>
            {/* <SidebarHeader />
            <SidebarContent>
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter /> */}

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>HelpSquad Scheduler</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};

export default AppSidebar;
