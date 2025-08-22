import Image from "next/image";


const Contact = () => {
  return (
    <section id='contact' className="  w-full py-16 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row gap-16 lg:mt-24">

        {/* Left Section */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Let's talk!</h2>
          <p className="text-gray-300 text-lg">Ask us anything or just say hi 👋</p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">📧</span>
              <span>papolahimanshu5402@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">📞</span>
              <span>+(91) 7906344991</span>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <form className="lg:w-1/2 space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block mb-1">Name</label>
              <input type="text" className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none" placeholder="John Doe" />
            </div>
            <div className="flex-1">
              <label className="block mb-1">Email</label>
              <input type="email" className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none" placeholder="example@email.com" />
            </div>
          </div>

          <div>
            <label className="block mb-1">Message</label>
            <textarea className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none" placeholder="Hi there.." rows="4" />
          </div>

          <button type="submit" className="bg-black border border-gray-500 px-6 py-2 rounded-full hover:bg-white hover:text-black transition shadow-[0_0_60px_rgba(163,53,238,0.3)]">
            Say hello!
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="mt-16 flex flex-col items-center space-y-12">
        <Image
          src="/images/logo.png"
          alt="Signature"
          width={150}   // Set based on actual logo size
          height={50}   // Adjust to match aspect ratio
          className="h-12 mt-12 filter grayscale w-[150px]"
        />

        <div className="flex gap-6 text-sm tracking-widest">
          <a href="#services">SERVICES</a>
          <a href="#resume">RESUMÉ</a>
          <a href="#portfolio">PORTFOLIO</a>
          <a href="#about">ABOUT</a>
        </div>

        <p className="text-xs text-gray-500">© 2024 AlphaGfx. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
