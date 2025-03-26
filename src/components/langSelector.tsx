"use client"
import * as React from "react"
import enImg from "@/assets/image/flags/en.jpg";
import jaImg from "@/assets/image/flags/ja.jpg";
import viImg from "@/assets/image/flags/vi.jpg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import Image, { StaticImageData } from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function LangSelector() {
  const router = useRouter()
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1] as LanguageKey;

  type LanguageKey = "en" | "ja" | "vi"
  const langOptions: Record<LanguageKey, { label: string; img: StaticImageData  }> = {
    en: { label: "English", img: enImg },
    ja: { label: "Japanese", img: jaImg },
    vi: { label: "Vietnamese", img: viImg },
  }

  const [selectedLang, setSelectedLang] = React.useState(currentLang)
  const [selectedLangImg, setSelectedLangImg] = React.useState(langOptions[currentLang]?.img || enImg);
  
  const handleChangeLang = (lang: LanguageKey) => {
    setSelectedLangImg(langOptions[lang].img);
    setSelectedLang(lang);
    console.log("lang:", selectedLangImg);
    router.push(`/${lang}`);
  };

  return (
    <>
    <Select onValueChange={handleChangeLang} value={selectedLang}>
            <SelectTrigger className="flex items-center justify-between w-[60px] h-[35px] border rounded-full px-4 py-2">
                <Image 
                    src={selectedLangImg}
                    alt="Select a language"
                    className="rounded-sm w-full h-full object-cover"
                />
            </SelectTrigger>
            
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="en" >
                        <div className="flex items-center gap-2">
                            <Image src={langOptions["en"].img} alt="English" width={25} height={18} />
                            <span>English</span>
                        </div>
                    </SelectItem>

                    <SelectItem value="ja">
                        <div className="flex items-center gap-2">
                            <Image src={langOptions["ja"].img} alt="English" width={25} height={18} />
                            <span>Japanese</span>
                        </div>
                    </SelectItem>

                    <SelectItem value="vi">
                        <div className="flex items-center gap-2">
                            <Image src={langOptions["vi"].img} alt="English" width={25} height={18} />
                            <span> Vietnamese</span>
                        </div>
                    </SelectItem>
                </SelectGroup>
      </SelectContent>
    </Select>
    </>
  )
}
