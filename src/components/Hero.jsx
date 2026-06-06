import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero video/Developer_introduces_self_and_sk…_202606051918.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out-cubic',
      offset: 60,
    });

    const handleScroll = () => {
      if (!videoRef.current) return;
      if (window.scrollY > 5) {
        if (videoRef.current.paused) {
          videoRef.current.play().catch(err => {
            console.log("Video play prevented: ", err);
          });
        }
      } else {
        if (!videoRef.current.paused) {
          videoRef.current.pause();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSound = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* 
        16:9 Aspect Ratio Container:
        Matches the exact scale and positioning of the background video,
        ensuring the star cover element tracks the star pixel-perfectly on all screen resolutions.
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full aspect-video z-0">
        <video
          ref={videoRef}
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* 
          Opaque Sound Controller Button:
          Placed exactly over the star (measured at right: 10.1%, bottom: 21% of 16:9 frame).
          This completely blocks the star while providing the audio control.
        */}
        <button
          onClick={toggleSound}
          className="absolute z-30 w-16 h-16 md:w-20 md:h-20 rounded-full bg-black text-white border border-white/20 flex flex-col justify-center items-center gap-1 cursor-pointer hover:scale-105 hover:bg-zinc-900 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.6)] focus:outline-none"
          style={{
            bottom: '21%',
            right: '10.1%',
            transform: 'translate(50%, 50%)',
          }}
        >
          {isMuted ? (
            <>
              {/* Speaker Muted Icon */}
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
              <span className="text-[9px] uppercase tracking-wider font-medium text-white/70">Sound On</span>
            </>
          ) : (
            <>
              {/* Speaker Playing Icon */}
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
              <span className="text-[9px] uppercase tracking-wider font-medium text-white/70">Mute</span>
            </>
          )}
        </button>
      </div>

      {/* Subtle vignette — bottom gradient for text legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />


      {/* ════════════════════════════════════════
          MIDDLE-RIGHT — Role & Expertise tags (aligned like image-3)
      ════════════════════════════════════════ */}
      <div
        data-aos="fade-left"
        className="absolute top-[38%] right-6 sm:right-12 md:right-16 z-20 flex flex-col items-end gap-1 sm:gap-2 text-right"
      >
        <p className="text-white text-sm sm:text-base md:text-lg font-light tracking-wide">
          Full Stack Developer
        </p>
        <p className="text-white/80 text-xs sm:text-sm md:text-base font-light tracking-wide">
          React &amp; Node.js
        </p>
        <p className="text-white/60 text-[10px] sm:text-xs md:text-sm font-light tracking-wide">
          Open to Work
        </p>
      </div>

      {/* ════════════════════════════════════════
          BOTTOM-LEFT — Short Editorial Description (aligned like image-3)
      ════════════════════════════════════════ */}
      <div
        data-aos="fade-up"
        className="absolute bottom-[12%] left-6 sm:left-12 md:left-16 z-20 max-w-[280px] sm:max-w-md md:max-w-xl"
      >
        <p className="text-white/90 text-base sm:text-lg md:text-2xl font-light leading-relaxed">
          I build fast, scalable, and modern web applications using React, Node.js, and Tailwind CSS.
        </p>
      </div>

    </section>
  );
};

export default Hero;
