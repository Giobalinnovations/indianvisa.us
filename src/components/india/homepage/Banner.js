'use client';
import { useRef } from 'react';

const Banner = () => {
  const ref = useRef(null);

  return (
    <div className="relative">
      <div
        className="relative mt-20 bg-no-repeat bg-cover h-[600px] transition-all duration-500 ease-in-out overflow-hidden"
        style={{
          backgroundImage: 'url("/assets/images/india/home/banner.png")',
          backgroundPosition: 'center',
        }}
      >
        {/* Modern Overlay with Mesh Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/80 to-primary/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange/20 via-transparent to-transparent"></div>

        {/* Decorative Elements */}
        <div className="absolute inset-0">
          {/* Top Border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange to-transparent opacity-30"></div>
          {/* Bottom Border */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
          {/* Left Border */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-pink to-transparent opacity-30"></div>
          {/* Right Border */}
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-success to-transparent opacity-30"></div>
        </div>

        {/* Content */}
        <div className="relative h-full text-white">
          <div className="container h-full p-0">
            <div className="flex flex-col items-center justify-center w-full h-full space-y-10 text-center">
              <div className="max-w-4xl px-4 md:px-0">
                <div className="relative inline-block mb-8">
                  <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                    Online Portal for{' '}
                    <span className="relative">
                      <span className="relative z-10 bg-gradient-to-r from-orange via-pink to-primary bg-clip-text text-transparent">
                        Visa Application
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange via-pink to-primary opacity-50 blur-sm"></span>
                    </span>{' '}
                    to India
                  </h1>
                  {/* Decorative elements */}
                  <div className="absolute -top-8 -left-8 w-16 h-16 border-t-2 border-l-2 border-orange/30"></div>
                  <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-2 border-r-2 border-primary/30"></div>
                </div>
                <p className="max-w-2xl mx-auto text-base leading-relaxed text-gray-300 md:text-lg lg:text-xl">
                  All foreign nationals entering India are required to possess a
                  valid international travel document in the form of a national
                  passport with a valid visa from an Indian Mission/Post or
                  eVisa.
                </p>
              </div>

              {/* Modern Decorative Elements */}
              <div className="absolute left-0 w-96 h-96 bg-gradient-to-br from-orange/10 via-primary/5 to-transparent rounded-full blur-[100px] -z-10 animate-pulse"></div>
              <div className="absolute right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 via-pink/5 to-transparent rounded-full blur-[100px] -z-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Announcement Bar */}
      <div className="absolute bottom-0 w-full bg-gradient-to-r from-secondary/95 via-secondary/90 to-secondary/95 backdrop-blur-lg border-t border-white/10">
        <div className="container py-4">
          <div className="flex items-center justify-between text-white">
            <div className="w-full overflow-hidden">
              <marquee
                className="text-sm font-medium tracking-wide md:text-base"
                behavior="scroll"
                direction="left"
                scrollamount="5"
              >
                <span className="inline-flex items-center">
                  <span className="w-2 h-2 mr-4 bg-gradient-to-r from-orange to-primary rounded-full"></span>
                  Avail Indian Visa plus services through &quot;Official app
                  Indian Visa Su-Swagatam&quot; mobile App for 60 countries
                  <span className="mx-8 text-primary">•</span>
                  One stop solution for all Visa related services
                  <span className="w-2 h-2 ml-4 bg-gradient-to-r from-primary to-orange rounded-full"></span>
                </span>
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
