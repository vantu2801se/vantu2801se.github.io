"use client";
import useTranslate from "@/hooks/useTranslate";

export default function KeyCapabilities(){
    const {t} = useTranslate();
    const keys = [t("key_capabilities_content_1"),t("key_capabilities_content_2"),t("key_capabilities_content_3"),t("key_capabilities_content_4"),t("key_capabilities_content_5"),t("key_capabilities_content_6")];
    return <div className="flex flex-col select-text">
        <h3 className="text-xl font-bold text-left">{t("key_capabilities_title")}</h3>
        <ul className="list-disc text-lg pl-10 break-words w-[800px] ">
            {keys.map((item, index) => (
                <li key={index} className="text-lg">{item}</li>
        ))}
        </ul>
    </div>
}
