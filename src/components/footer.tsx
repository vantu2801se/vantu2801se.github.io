import { FacebookIcon, LinkedinIcon } from 'lucide-react';
import Link from 'next/link';

export default function Footer(){
    return <div className="flex flex-col select-text justify-between items-center mx-auto pt-8 pb-2 gap-2">
        <div className="flex-row flex gap-4">
            <Link href="https://www.facebook.com/nguyenvantu2801/" className="text-blue-500 underline"> <FacebookIcon size={24}/> </Link>
            <Link href="https://www.linkedin.com/in/van-tu-nguyen-71139529a/" className="text-blue-500 underline"><LinkedinIcon size={24} /> </Link>
        </div>
        <p className="text-sm">© 2025 TU NGUYEN</p>
    </div>
}