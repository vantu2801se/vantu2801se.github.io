import '../style/globals.css';
export default function NotFound() {
    return (
      <div className="min-h-screen w-screen flex justify-center items-center">
        <div className="container px-auto px-4 text-slate-500 justify-center items-center flex flex-col">        
            <h1 className="text-4xl ">404</h1>
            <h1 className='text-[25px]'>NOT FOUND</h1>
        </div>
      </div>
    );
}