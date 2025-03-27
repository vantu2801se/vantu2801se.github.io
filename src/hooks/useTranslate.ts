"use client";
import {useState, useEffect} from 'react';
import { usePathname } from "next/navigation";
import ENGLISH from "@/locales/en";
import JAPANESE from "@/locales/ja";
import VIETNAMESE from "@/locales/vi";

type TranslationType = Record<string,string>
const LangMap: Record<string, TranslationType> = {
  en: ENGLISH,
  ja: JAPANESE,
  vi: VIETNAMESE,
};

export default function useTranslate() {
  const pathname = usePathname(); 
  const locale = pathname.split("/")[1] || "en";
  const [translations, setTranslations] = useState(LangMap[locale]);

  useEffect(() => {
    setTranslations(LangMap[locale] || ENGLISH);
  }, [locale]);

  const t = (key: string): string =>  translations[key] || key;

  return { t };
}
