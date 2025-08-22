const Hero = () => {
    
    return (
        <>
            <div id="herobg" className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center">
                    <div className="w-[70%] flex flex-col items-start ">
                        <h2 className="text-amber-300 text-[18px] font-medium">GRAPHIC   -   EDITOR   -   WEB</h2>
                        <h1 className="font-extrabold text-6xl leading-tight text-left">Cinematic brand stories optimized to engage</h1>
                        <div className="mt-8 flex gap-4">
                            <button className="px-6 bg-[#151515] text-[18px] rounded-4xl py-2  shadow-[0_0_10px_#dadada]  hover:scale-104 transition duration-300">Resume</button>
                            <button className="px-6 bg-none  border border-white text-[18px] rounded-4xl py-2">Watch Now</button>
                        </div>
                    
                    </div>
            </div>
        </>
    );
}
 
export default Hero;