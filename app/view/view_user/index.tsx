export default function UserView() {
    return(
              <section className="flex flex-col items-center bg-neutral-50 justify-between h-full">
                    
                    {/* Section Principal */}
                    {/* Aca se importan componentes para visualizar en el Home - cada componente sigue buenas practicas SE0 >:D */}
                    <>
                        <main className="w-full h-full flex flex-col items-center bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/images/home-qs.webp')" }}>
                            <div className="absolute inset-0 bg-linear-to-b backdrop-blur-xs from-[#141c4e]/80 via-indigo-800/80 to-indigo-500/80" />
                            <section className="relative z-10 w-full max-w-7xl h-full flex flex-col py-40 px-10   items-center gap-10">
                         
                            </section>
                        </main>
                    </>
                </section>
    )
}