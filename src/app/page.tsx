import Education from "@/components/education";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Introduction from "@/components/introduction";
import ShortKey from "@/components/short_key";

export default function Home() {
  return (
    <div className="min-h-screen text-neutral-800 text-4xl select-none">
      <div className="container mx-auto flex flex-col items-center">
      <Introduction/>
      <ShortKey/>
      <Experience/>
      <Education/>
      <Footer/>
      </div>
    </div>
  );
}
