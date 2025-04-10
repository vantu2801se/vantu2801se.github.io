import Education from "@/components/education";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Introduction from "@/components/introduction";
import KeyCapabilities from "@/components/keyCapabilities";
export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ja" }, { locale: "vi" }, {locale: "devops"}]; 
}
export default function CV() {
  return (
    <div className="min-h-screen text-neutral-800 text-4xl select-none">
      <div className="container mx-auto flex flex-col items-center">
      <Introduction/>
      <KeyCapabilities/>
      <Experience/>
      <Education/>
      <Footer/>
      </div>
    </div>
  );
}
