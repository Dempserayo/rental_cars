import Search_Card from "@/components/common/page_search/search_card";

export default function SearchView() {
    return(
     <section className="h-full flex flex-col items-center bg-neutral-200 justify-between">
            <>
                <main className="w-full max-w-7xl h-full flex flex-col p-4 md:p-10">
                    <section className="w-full max-w-7xl h-full flex flex-col md:px-10 items-center gap-4">
                         <Search_Card
                            name="Nissan Versa"
                            category="Compacto"
                            price={197292}
                            totalPrice={789206}
                            image="/images/cars/CCAR_US_BLUE.webp"
                            url="/search/Nissan_Versa_US_BLUE"
                        />
                         <Search_Card
                            name="Nissan Versa"
                            category="Compacto"
                            price={197292}
                            totalPrice={789206}
                            image="/images/cars/CCAR_US.webp"
                            url="/search/Nissan_Versa_US"
                        />
                         <Search_Card
                            name="FORD Fusion"
                            category="Full-Size"
                            price={204520}
                            totalPrice={818155}
                            image="/images/cars/FCAR_US.webp"
                            url="/search/Ford_Fusion"
                        />
                    </section>
                </main>
            </>
        </section>
    )
}