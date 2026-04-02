'use client'
import "@/src/i18n"
import { useTranslation } from "react-i18next"

export default function Home_Banners() {
    const { t } = useTranslation()

    return (
        <section className="w-full h-auto flex justify-center items-center font-thin text-neutral-100">
            <span className="w-full max-w-7xl flex flex-col">
                <h1 className="text-[10px] md:text-xl uppercase">
                    {t("home.banner.title")} <span className="text-[#00e55e]">{t("home.banner.titleHighlight")}</span>
                </h1>
                <p className="text-[10px] md:text-xs">
                    {t("home.banner.subtitle")} <span className="text-[#00e55e]">{t("home.banner.subtitleHighlight")}</span> {t("home.banner.subtitleSuffix")}
                </p>
            </span>
        </section>
    )
}
