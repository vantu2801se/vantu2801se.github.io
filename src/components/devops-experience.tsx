"use client";
import useTranslate from "@/hooks/useTranslate";

export default function DevopsExperience(){
    const {t} = useTranslate();
    const keys = [
        t("experience_timeline_1_do_1"),
        t("experience_timeline_1_do_2"),
        t("experience_timeline_1_do_3"),
        t("experience_timeline_1_do_4"),
        t("experience_timeline_1_do_5"),
        t("experience_timeline_1_do_6"),
        t("experience_timeline_2_do_1"),
        t("experience_timeline_2_do_2"),
        t("experience_timeline_2_do_3"),
        t("experience_timeline_2_do_4"),
        t("experience_timeline_2_do_5"),
        t("experience_timeline_2_do_6"),
    ];

    return <div className="flex flex-col select-text ">
        <h3 className="text-xl font-bold text-left">{t("experience_title")}</h3>
        <h4 className="text-lg font-bold text-left pl-2">{t("experience_timeline_1")}</h4>
        <h4 className="text-lg font-bold text-left pl-2 indent-4  w-[800px] break-words">{t("experience_project_1")}</h4>
        <h4 className="text-sm italic text-left pl-2 indent-4 w-128 break-words">{t("expirience_project_description")}</h4>
        <h4 className="text-sm italic text-left pl-2 indent-4  w-[800px] break-words">{t("expirience_project_tech_stack")}</h4>
        
        <ul className="list-disc pl-10 break-words w-[800px]">
            {keys.map((item, index) => (
                <li key={index} className="text-lg">{item}</li>
        ))}
        </ul>
    </div>
}
