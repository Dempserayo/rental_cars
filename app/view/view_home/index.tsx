import Banners from "@/components/common/home/home_banner";
import TextDescription from "@/components/common/home/home_description";
import SearchEngine from "@/components/common/home/home_search_engine";

export default function HomeView() {
    return(
        <section className="flex flex-col items-center bg-neutral-50 justify-between h-full">
            
            {/* Section Principal */}
            {/* Aca se importan componentes para visualizar en el Home - cada componente sigue buenas practicas SE0 >:D */}
            <>
                <main className="w-full h-full flex flex-col items-center bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/images/home-qs.webp')" }}>
                    <div className="absolute inset-0 bg-linear-to-b backdrop-blur-xs from-[#141c4e]/80 via-indigo-800/80 to-indigo-500/80" />
                    <section className="relative z-10 w-full max-w-7xl h-full flex flex-col px-10 py-40 md:px-20 md:py-40   items-center gap-10">
                        <Banners />
                        <SearchEngine />
                        <TextDescription/>
                    </section>
                </main>
            </>
        </section>
    )
}