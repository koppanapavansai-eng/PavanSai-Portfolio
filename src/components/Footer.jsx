import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-[#666666] py-12 sm:py-16 px-5 sm:px-8 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh] border-t border-white/5">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>Cinematic & Creative Production</p>
          <p>Lighting, Editing, Photo</p>
          <p>Motion Graphics</p>
        </div>
        
        <div className="flex flex-col gap-1 sm:items-center">
          <p>5+ years of experience</p>
          <a href="#work" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">View Work</a>
        </div>
        
        <div className="flex flex-col gap-1 sm:items-end">
          <p>Worldwide Available</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[22vw] sm:text-[18vw] md:text-[15vw] leading-none font-sans font-black tracking-tighter lowercase select-none text-white w-full text-center">
          pavan sai
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold text-white">Contact</a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Pavan Sai | Built with React
          </p>
        </div>
        
        <div className="flex flex-col gap-1 sm:items-center">
          <a href="mailto:hello@pavansai.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">hello@pavansai.com</a>
        </div>
        
        <div className="flex flex-col gap-1 sm:items-end">
          <a href="#" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
