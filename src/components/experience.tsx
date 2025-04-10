"use client";
import { usePathname } from 'next/navigation'
import DevopsExperience from "./devops-experience";
import SoftwareExperience from "./se-experience";
export default function Experience(){
    const pathname = usePathname()

    return <>
        <div>
            {pathname === '/devops' ? <DevopsExperience/> : <SoftwareExperience/>}
        </div>
    </>
}
