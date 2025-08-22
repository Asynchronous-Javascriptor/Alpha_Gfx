import Image from "next/image";

const About = () => {
    return (
        <>
            <section id='about' className="w-full py-16 px-6 lg:px-24">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        alt="Profile"
                        <Image
                            src="/images/Profile.png"
                            alt="Profile"
                            width={400}
                            height={400}
                            unoptimized
                            className="filter grayscale rounded-xl w-full max-w-md mx-auto shadow-[0_0_30px_rgba(163,53,238,0.3)]"
                        />

                    </div>

                    <div className="w-full lg:w-1/2 text-center flex flex-col gap-8 lg:text-left">
                        <h5 className="uppercase text-sm tracking-widest text-gray-400 mb-2">About Me</h5>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Who's this guy?</h2>
                        <p className="mb-4">
                            Uttarakhand-born and currently based in Noida, I’m a passionate Master’s student pursuing my MCA, blending technical expertise with creative flair.
                        </p>
                        <p className="mb-4">
                            With strong skills in frontend and backend development — JavaScript, React, Next.js, Node.js — I also bring creativity to the table through video editing and graphic design.
                        </p>
                        <p className="mb-8">
                            I thrive at the intersection of code and creativity, turning ideas into impactful digital experiences. Let’s build something extraordinary together!
                        </p>

                        <div className="flex justify-center lg:justify-start gap-4">
                            <button className="bg-[#1a1a1a] border border-gray-600 rounded-full px-6 py-2 hover:bg-[#222] transition">
                                Resumé
                            </button>
                            <button className="border border-gray-500 rounded-full px-6 py-2 flex items-center gap-2 hover:bg-white hover:text-black transition">
                                Portfolio
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
