import Image from "next/image";

const Hero_second = () => {

    return (
        <>
            <div className="w-full h-screen px-4 py-12 flex flex-col items-center justify-center space-y-10">
                <div className="max-w-3xl text-center space-y-4">
                    <p className="text-3xl leading-relaxed font-black">
                        Rallying diverse teams, instilling a growth mindset,
                        and turning ambitious visions into tangible realities.
                        <span className="text-amber-200">  Let's roll up our sleeves and create something extraordinary!</span>
                    </p>
                </div>

                <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg relative">
                    <Image
                        src="/images/herosecond.jpg"
                        alt="Featured Project"
                        width={1600}         // You can tweak based on actual image size
                        height={600}         // Proportional to your layout
                        className="w-full md:h-96 object-cover opacity-65"
                    />
                </div>
            </div>
        </>
    );
}

export default Hero_second;
