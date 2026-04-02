import Home_Banners from "@/components/common/page_home/home_banner";
import Home_Description from "@/components/common/page_home/home_description";
import Home_Search_Engine from "@/components/common/page_home/home_search_engine";

export default function HomeView() {
    return(
        <section className="flex flex-col items-center bg-neutral-50 justify-between h-full">
            <>
                <main className="w-full h-full flex flex-col items-center bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/images/home-qs.webp')" }}>
                    <div className="absolute inset-0 bg-linear-to-b backdrop-blur-xs from-[#141c4e]/80 via-indigo-800/80 to-indigo-500/80" />
                    <section className="relative z-10 w-full max-w-7xl h-full flex flex-col px-10 py-10 md:px-20 md:py-20   items-center gap-10">
                        <Home_Banners />
                        <Home_Search_Engine />
                        <Home_Description/>
                    </section>
                </main>
            </>
        </section>
    )
}