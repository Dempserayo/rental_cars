import Banners from "@/app/components/common/home/home_banner";
import TextDescription from "@/app/components/common/home/home_description";
import SearchEngine from "@/app/components/common/home/home_search_engine";
import Footer from "@/app/components/constants/footer";
import Navbar from "@/app/components/constants/navbar";

export default function HomeView() {
    return(
        <section className="flex flex-col items-center bg-neutral-50 justify-between h-full">
            <Navbar />

            <main className="w-full h-full flex flex-col items-center bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/images/home-qs.webp')" }}>
                <div className="absolute inset-0 bg-linear-to-b backdrop-blur-xs from-[#141c4e]/80 via-indigo-800/80 to-indigo-500/80" />
                <section className="relative z-10 w-full h-screen flex flex-col p-40  items-center gap-4">
                    <Banners />
                    <SearchEngine />
                    <TextDescription/>
                </section>
            </main>
            
            <Footer />
        </section>
    )
}