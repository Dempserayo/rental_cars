'use client'
import "@/src/i18n"
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();
  function changeLanguage(lang: string) {
    i18n.changeLanguage(lang);
  }

  return (
    <footer className="w-full h-auto flex flex-col py-40 gap-20 items-center text-neutral-800 text-[10px] md:text-xs font-thin">
      <>
        <section className="w-full max-w-7xl flex flex-col p-10 xl:p-0">
          <Image src="/images/logo/logo.svg" alt="Home background" width={100} height={100} />

          <div className="flex flex-col md:justify-between py-10 gap-4 md:gap-0">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
              <span className="flex flex-col sm:flex-row sm:gap-4">
                <p>{t("footer.cancelationPolicies")}</p>
                <p>{t("footer.privacyPolicies")}</p>
                <p>{t("footer.termsAndConditions")}</p>
              </span>
              <p className="hidden lg:flex">{t("footer.siteMap")}</p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
              <span className="flex flex-col sm:flex-row sm:gap-4">
                <p>{t("footer.complaints")}</p>
                <p>{t("footer.cancelReservation")}</p>
                <p>{t("footer.faq")}</p>
              </span>
              <p className="hidden lg:flex">{t("footer.myReservations")}</p>
            </div>
          </div>
        </section>
      </>
      <>
        <section className="w-full h-40 bg-[#00e55e]" />
      </>
      <>
        <section className="w-full max-w-7xl flex flex-col py-10 p-10 xl:p-0 gap-4 md:gap-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <span className="flex flex-col sm:flex-row sm:gap-4">
              <button type="button" onClick={() => changeLanguage("en")} className="cursor-pointer transition-all duration-500 hover:text-indigo-500">English</button>
              <button type="button" onClick={() => changeLanguage("es")} className="cursor-pointer transition-all duration-500 hover:text-indigo-500">Español</button>
              <button type="button" onClick={() => changeLanguage("pr")} className="cursor-pointer transition-all duration-500 hover:text-indigo-500">Português</button>
              <button type="button" onClick={() => changeLanguage("fr")} className="cursor-pointer transition-all duration-500 hover:text-indigo-500">Français</button>
              <button type="button" onClick={() => changeLanguage("ch")} className="cursor-pointer transition-all duration-500 hover:text-indigo-500">中文（简体）</button>
              <button type="button" onClick={() => changeLanguage("jp")} className="cursor-pointer transition-all duration-500 hover:text-indigo-500">日本語</button>
              <button type="button" onClick={() => changeLanguage("ru")} className="cursor-pointer transition-all duration-500 hover:text-indigo-500">Русский</button>
            </span>
            <p className="hidden lg:flex">{t("footer.changeLanguage")}</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <span className="flex flex-col sm:flex-row sm:gap-4">
              <p>Outlet Rental Cars</p>
              <p>+57 (601) 607-8917</p>
              <p>78 SW 7th St Suite 500, Miami, FL 33130</p>
            </span>
            <p className="hidden lg:flex">{t("footer.copyright")}</p>
          </div>
        </section>
      </>
    </footer>
  );
}