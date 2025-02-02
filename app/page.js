import Calendar from "@/components/calendar/Calendar";
import Search from "@/components/search/Search";
import RadioFilter from "@/components/radio-filter/RadioFilter";
import Nav from "@/components/nav/Nav";

export default function Home() {
    return (
        <>
            <Nav
                buttonText="Dashboard"
                pageLink="/login-signup"
                organizationLogo="/help-squad-logo-black.png"
            />
            <main className="relative overflow-hidden h-fit p-1 lg:p-2 ">
                <section className="p-2">
                    <Search />
                    <RadioFilter />
                    <Calendar />
                </section>
            </main>
        </>
    );
}
