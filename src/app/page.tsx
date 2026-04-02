'use client'
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="w-full text-center">{t('Welcome to React')}</h1>
    </>
  );
}
