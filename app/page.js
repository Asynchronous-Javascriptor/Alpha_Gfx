'use client';

import dynamic from "next/dynamic";


const Hero = dynamic(() => import("./Hero/page"), { ssr: false });
const Hero_second = dynamic(() => import("./HeroSecond/page"), { ssr: false });
const About = dynamic(() => import("./About/page"), { ssr: false });
const ServicePage = dynamic(() => import("./Services/page"), { ssr: false });
const Portfolio = dynamic(() => import("./Portfolio/page"), { ssr: false });
const Contact = dynamic(() => import("./Contact/page"), { ssr: false });


const page = () => {
    return (
        <>
            <Hero />
            <Hero_second />
            <ServicePage />
            <About />
            <Portfolio />
            <Contact />
        </>
    );
};

export default page;
