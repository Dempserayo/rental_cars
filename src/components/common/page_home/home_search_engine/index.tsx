'use client'
import "@/src/i18n"
import { FiCalendar, FiLayers, FiMap, FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Home_Search_Engine(){
    const { t } = useTranslation()
    const [activeField, setActiveField] = useState<string | null>(null);
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [hours, setHours] = useState("");
    const [returnInfo, setReturnInfo] = useState("");

    useEffect(() => {
        const savedLocation = localStorage.getItem("location");
        const savedDate = localStorage.getItem("date");
        const savedHours = localStorage.getItem("hours");

        if (savedLocation) setLocation(savedLocation);
        if (savedDate) setDate(savedDate);
        if (savedHours) setHours(savedHours);
    }, []);

    useEffect(() => {
        localStorage.setItem("location", location);
        localStorage.setItem("date", date);
        localStorage.setItem("hours", hours);
    }, [location, date, hours]);

    useEffect(() => {
        if (!date || !hours) return;

        const [year, month, day] = date.split("-").map(Number);
        const pickupDate = new Date(year, month - 1, day);
        const now = new Date();
        const currentHour = now.getHours();

        const remainingHoursToday = 24 - currentHour;

        let returnDate = new Date(pickupDate);
        let returnHour = 0;

        if (Number(hours) <= remainingHoursToday) {
            returnHour = currentHour + Number(hours);
        } else {
            returnDate.setDate(returnDate.getDate() + 1);
            returnHour = 6;
        }

        const formattedPickup = pickupDate.toLocaleDateString("es-CO");
        const formattedReturn = returnDate.toLocaleDateString("es-CO");

        setReturnInfo(
            t("home.search.returnInfo", {
                pickup: formattedPickup,
                returnDate: formattedReturn,
                hour: returnHour,
            })
        );

    }, [date, hours, t]);

    return(
        <section className="w-full h-auto flex flex-col justify-center items-center font-thin text-neutral-800">
            
            <section className="w-full h-auto bg-[#00e55e] flex flex-row items-center justify-between px-10 py-4">
                <div className="flex flex-row text-[10px] md:text-xs">    
                    <button className={`p-2 ${activeField === "location" ? " text-indigo-500 bg-neutral-100" : ""}`}>
                        <FiMap />
                    </button>

                    <button className={`p-2 ${activeField === "date" ? "text-indigo-500 bg-neutral-100" : ""}`}>
                        <FiCalendar />
                    </button>

                    <button className={`p-2 ${activeField === "hours" ? "text-indigo-500 bg-neutral-100" : ""}`}>
                        <FiLayers />
                    </button>
                </div>
                    
                <Link href='search' className="flex gap-4 items-center text-[10px] md:text-xs hover:text-indigo-500 transition-all">
                    <p>{t("home.search.searchButton")}</p>
                    <FiSearch />
                </Link>
            </section>

            <section className="w-full flex flex-col bg-neutral-100 p-10 md:p-20 gap-4">

                <section className="flex flex-col md:flex-row gap-4">
                    
                    <div className="flex flex-col w-full text-xs">
                        <label>{t("home.search.location")}</label>
                        <input
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            onFocus={() => setActiveField("location")}
                            type="text"
                            placeholder={t("home.search.locationPlaceholder")}
                            className="border-b border-neutral-500/50 p-4 bg-transparent focus:outline-none"
                        />
                    </div>

                    <div className="flex flex-col w-full text-xs">
                        <label>{t("home.search.pickupDate")}</label>
                        <input
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            onFocus={() => setActiveField("date")}
                            type="date"
                            className="border-b border-neutral-500/50 p-4 bg-transparent focus:outline-none"
                        />
                    </div>
                </section>

                <div className="flex flex-col w-full text-xs">
                    <label>{t("home.search.hoursOfUse")}</label>
                    <input
                        value={hours}
                        onChange={(e) => setHours(e.target.value)}
                        onFocus={() => setActiveField("hours")}
                        type="number"
                        placeholder={t("home.search.hoursPlaceholder")}
                        className="border-b border-neutral-500/50 p-4 bg-transparent focus:outline-none"
                    />
                </div>

                <div className="flex w-full text-xs">
                    <p className="text-neutral-500 py-4">
                        {returnInfo || t("home.search.returnVehicle")}
                    </p>
                </div>

            </section>
        </section>
    )
}
