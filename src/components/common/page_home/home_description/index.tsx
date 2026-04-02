'use client'
import "@/src/i18n"
import { useTranslation } from "react-i18next"

export default function Home_Description() {
    const { t } = useTranslation()

    return (
        <section className="w-full max-w-7xl text-neutral-100 text-[10px] md:text-xs font-thin flex flex-col md:flex-row justify-between items-end">
            <p>{t("home.description.left")}</p>
            <p>{t("home.description.right")}</p>
        </section>
    )
}
