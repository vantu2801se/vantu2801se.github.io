import Image from 'next/image'
import profilePic from '../assets/image/me.jpg'
import Link from "next/link";
import { Phone, GithubIcon, MapPinHouse, Mail } from 'lucide-react';

export default function Introduction() {
    return <div className="flex flex-row my-4 mx-auto gap-4">
        <Image
            className="rounded-3xl shadow-2xl"
            src={profilePic}
            alt="Picture of the author"
            width={400}
        />
        <div className="flex flex-col">
            <h3 className="4xl font-bold">TU NGUYEN</h3>
            <p className="text-xl my-2 font-bold">Backend developer | Software Engineer </p>
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
                    <MapPinHouse size={16} /> 
                    <p> Lien Chieu, Da Nang</p>
                </div>
                <div className="flex items-center gap-2">
                    <GithubIcon size={16} /> 
                    <Link href="https://github.com/vantu2801se" className="text-blue-500 underline"> github.com/vantu2801se </Link>
                </div>
            </div>
            <div className="select-text w-96 break-words my-2 text-lg">
                I&apos;m a self-motivated Web backend developer with the business focus, the learning mindset, always ready for new challenges and 3+ years of experience in the design and develop backend microservice system by Golang. Also researched and participated in building infrastructure in the software development process.
            </div>
        </div>
    </div>;
}
