import useTranslate from "@/hooks/useTranslate";
import { Button } from "./ui/button";
import { Download } from 'lucide-react';

export default function DownloadCVButton(){
    const {t} = useTranslate();
    return (
    <div className="relative group">
        <a href={t("download_location")} download={t("download_file_name")}>
            <Button variant="ghost">
                <Download />
            </Button>
        </a>
        <div className="absolute left-1/2 -translate-x-1/2 w-24 h-8 p-3 bg-gray-700 text-white text-xs shadow-2xl flex justify-center items-center rounded-xl opacity-0 group-hover:opacity-90 transition-opacity">
            <p>{t("download_cv")}</p>
        </div>
    </div>
    )
}

