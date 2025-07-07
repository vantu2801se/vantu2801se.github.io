"use client";
import useTranslate from "@/hooks/useTranslate";

export default function SoftwareExperience(){
    const {t} = useTranslate();
    const keys1 = [t("experience_timeline_1_do_1"),t("experience_timeline_1_do_2"),t("experience_timeline_1_do_3")];
    const keys2 = [t("experience_timeline_2_do_1"),t("experience_timeline_2_do_2"),t("experience_timeline_2_do_3"),t("experience_timeline_2_do_4"),t("experience_timeline_2_do_5"),t("experience_timeline_2_do_6")];
    const keys3 = [t("experience_timeline_3_do_1"),t("experience_timeline_3_do_2")];

    return <div className="flex flex-col select-text w-[800px]">
        <h3 className="text-xl font-bold text-left">{t("experience_title")}</h3>
        <h4 className="text-lg font-bold text-left pl-2">{t("experience_timeline_1")}</h4>
        
        <ul className="list-disc pl-10 break-words w-[max-w-full]">
            {keys1.map((item, index) => (
                <li key={index} className="text-lg">{item}</li>
        ))}
        </ul>

        <h4 className="text-lg font-bold text-left pl-2">{t("experience_timeline_2")}</h4>
        <ul className="list-disc pl-10 break-words w-[max-w-full]">
            {keys2.map((item, index) => (
                <li key={index} className="text-lg">{item}</li>
        ))}
        </ul>

        <h4 className="text-lg font-bold text-left pl-2">{t("experience_timeline_3")}</h4>
        <ul className="list-disc pl-10 break-words w-[max-w-full]">
            {keys3.map((item, index) => (
                <li key={index} className="text-lg">{item}</li>
        ))}
        </ul>

        <h4 className="text-lg font-bold text-left pl-2">{t("experience_timeline_4")}</h4>
        
    </div>
}
