import React from "react";
import { FaUsersCog } from "react-icons/fa";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar/AppSidebar";
import AppTable from "@/components/app-table/AppTable";

const page = () => {
    return (
        // <SidebarProvider>
        //     <main className="grid grid-cols-2">
        //         <AppSidebar />
        //         <section>
        //             <AppTable />
        //         </section>
        //     </main>
        // </SidebarProvider>
        <p>This feature is in progress</p>
    );
};

export default page;
