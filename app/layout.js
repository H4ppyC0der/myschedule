import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    weight: "500",
    subsets: ["latin"],
    variable: "--font-inter",
});

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "MySchedule - Simplified Employee Scheduling for Efficient Workflows",
    // metadataBase: new URL(
    //     process.env.NEXT_PUBLIC_APP_BASE_URL || "https://myschedule.vercel.app/"
    // ),
    metadataBase: "https://myschedule.vercel.app/",
    description:
        "MySchedule is a user-friendly employee scheduler designed to streamline workforce management. Create, organize, and share schedules effortlessly for improved team coordination and productivity.",
    creator: "Christian Macasinag Rodriguez",
    keywords: [
        "employee scheduler",
        "workforce management",
        "team scheduling",
        "work schedule",
        "schedule planner",
        "employee management app",
        "shift scheduling",
        "staff planner",
        "va schedule",
        "va scheduler",
        "myscheduler",
        "myschedule"
    ],
    openGraph: {
        type: "website",
        url: "https://myschedule.vercel.app/",
        title: "My Schedule - Simplified Employee Scheduling for Efficient Workflows",
        description:
            "My Schedule is a user-friendly employee scheduler designed to streamline workforce management. Create, organize, and share schedules effortlessly for improved team coordination and productivity.",
        images: "/favicon.jpeg",
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/favicon.jpeg",
        shortcut: "favicon.jpeg",
    },
    verification: {
        google: "google",
        yandex: "yandex",
        yahoo: "yahoo",
    },
    alternates: {
        canonical: "https://myschedule.vercel.app/",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
