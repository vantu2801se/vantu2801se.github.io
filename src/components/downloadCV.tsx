import { useState, useEffect } from "react";
import useTranslate from "@/hooks/useTranslate";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

export default function DownloadCVButton() {
    const { t } = useTranslate();
    const [isDownloading, setIsDownloading] = useState(false);
    const [countdown, setCountdown] = useState(0);

    useEffect(() => {
        if (isDownloading && countdown > 0) {
            const timer = setInterval(() => {
                setCountdown(prev => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (countdown === 0) {
            setIsDownloading(false);
        }
    }, [isDownloading, countdown]);

    const handleDownload = (event: { preventDefault: () => void; }) => {
        if (isDownloading) {
            event.preventDefault();
            return;
        }
        setIsDownloading(true);
        setCountdown(60);
    };

    return (
        <div className="relative group">
            <a 
                href={t("download_location")} 
                download={t("download_file_name")}
                onClick={handleDownload}
            >
                <Button variant="ghost" disabled={isDownloading}>
                    <Download />
                </Button>
            </a>
            <div className="absolute left-1/2 -translate-x-1/2 w-24 h-8 p-3 bg-gray-700 text-white text-xs shadow-2xl flex justify-center items-center rounded-xl opacity-0 group-hover:opacity-90 transition-opacity">
                {isDownloading ? <p>{countdown} sec</p> : <p>{t("download_cv")}</p>}
            </div>
        </div>
    );
}
