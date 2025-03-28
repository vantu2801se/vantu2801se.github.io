"use client";
import Image from 'next/image'
import profilePic from '../assets/image/me.jpg'
import Link from "next/link";
import { Phone, GithubIcon, MapPinHouse, Mail, CalendarDaysIcon } from 'lucide-react';
import LangSelector from './langSelector';
import useTranslate from '@/hooks/useTranslate';
import DownloadCVButton from './downloadCV';

export default function Introduction() { 
    const {t} = useTranslate();

    return <div className="flex flex-row my-4 mx-auto gap-4">
        <Image
            className="rounded-3xl shadow-2xl"
            src={profilePic}
            alt="Picture of the author"
            width={400}
        />
        <div className="flex flex-col">
            <div className="flex flex-row justify-between ">
                <h3 className="4xl font-bold ">{t("introduction_header_name")}</h3>
                <div className="flex flex-row justify-between items-center">
                    <DownloadCVButton/>
                     <LangSelector/>
                </div>
            </div>
            <p className="text-xl my-2 font-bold w-96 break-words"> {t("introduction_header_role_title")} </p>
            <div className="select-text text-sm mx-4">
                <div className="flex items-center gap-2">
                    <Mail size={16} /> 
                    <p> nguyenvantu28011998it@gmail.com </p>
                </div>
                <div className="flex items-center gap-2">
                    <Phone size={16} /> 
                    <p> (+84) 965 031 436 </p>
                </div>
                <div className="flex items-center gap-2">
                    <CalendarDaysIcon size={16}/>
                    <p> {t("born")} </p>
                </div>
                <div className="flex items-center gap-2">
                    <MapPinHouse size={16} /> 
                    <p> {t("introduction_contact_address")}</p>
                </div>
                <div className="flex items-center gap-2">
                    <GithubIcon size={16} /> 
                    <Link href="https://github.com/vantu2801se" className="text-blue-500 underline"> github.com/vantu2801se </Link>
                </div>
            </div>
            <div className="select-text w-96 break-words my-2 text-lg">
                {t("introduction_description")}
            </div>
        </div>
    </div>;
}
