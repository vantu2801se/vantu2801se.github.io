"use client";
import useTranslate from "@/hooks/useTranslate";

export default function Education(){
    const {t} = useTranslate();
    const keys = [t("education_certificate")];
    return <div className="flex flex-col select-text">
        <h3 className="text-xl font-bold text-left">{t("education_title")}</h3>
        <h4 className="text-lg font-bold text-left pl-2">{t("education_timeline_1")}</h4>
        <ul className="list-disc pl-10 break-words w-[800px]">
            {keys.map((item, index) => (
                <li key={index} className="text-lg">{item}</li>
        ))}
        </ul>
    </div>
}