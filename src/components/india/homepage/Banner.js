'use client';
import { useRef } from 'react';

const Banner = () => {
  const ref = useRef(null);

  return (
    <div className="relative">
      <div
        className="relative mt-20 bg-no-repeat bg-cover transition-all duration-500 ease-in-out overflow-hidden
          min-h-[600px] md:min-h-[calc(100vh-5rem)] flex items-center justify-center"
        style={{
          backgroundImage: 'url("/assets/images/india/home/banner.png")',
          backgroundPosition: 'center',
        }}
      >
        {/* Unique Diagonal Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-primary/50 via-transparent to-transparent"></div>

        {/* Unique Decorative Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-1 bg-gradient-to-l from-orange/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-primary/40 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1 h-1/2 bg-gradient-to-b from-orange/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1 h-1/2 bg-gradient-to-t from-primary/40 to-transparent"></div>
        </div>

        {/* Centered Content with Unique Style */}
        <div className="relative w-full text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center mx-auto max-w-4xl text-center">
              <div className="relative inline-block mb-6 md:mb-8">
                <span className="block text-sm md:text-base font-medium text-orange mb-3">
                  Simplified Process
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                  Your Gateway to{' '}
                  <span className="relative">
                    <span className="relative z-10 text-orange">
                      Indian Visa
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange to-primary blur-sm"></span>
                  </span>
                </h1>
                {/* Unique Corner Accents */}
                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-8 h-8 md:w-12 md:h-12 border-t-2 border-r-2 border-orange/30 transform rotate-45"></div>
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-8 h-8 md:w-12 md:h-12 border-b-2 border-l-2 border-primary/30 transform -rotate-45"></div>
              </div>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-200 max-w-3xl">
                Experience a seamless visa application process with our
                dedicated platform. We ensure a smooth journey from application
                to approval.
              </p>
            </div>
          </div>

          {/* Unique Floating Elements */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-tr from-orange/20 via-primary/10 to-transparent rounded-full blur-[80px] -z-10 animate-float"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-tl from-primary/20 via-orange/10 to-transparent rounded-full blur-[80px] -z-10 animate-float-delayed"></div>
        </div>
      </div>

      {/* Unique Announcement Bar */}
      <div className="absolute bottom-0 w-full bg-gradient-to-r from-secondary/95 via-secondary/90 to-secondary/95 backdrop-blur-lg border-t border-white/10">
        <div className="container mx-auto py-3 md:py-4">
          <div className="flex items-center justify-between text-white">
            <div className="w-full overflow-hidden">
              <marquee
                className="text-xs md:text-sm lg:text-base font-medium tracking-wide"
                behavior="scroll"
                direction="left"
                scrollamount="5"
              >
                <span className="inline-flex items-center">
                  <span className="w-1.5 md:w-2 h-1.5 md:h-2 mr-2 md:mr-4 bg-gradient-to-r from-orange to-primary rounded-full"></span>
                  Avail Indian Visa plus services through &quot;Official app
                  Indian Visa Su-Swagatam&quot; mobile App for 60 countries
                  <span className="mx-4 md:mx-8 text-orange">•</span>
                  One stop solution for all Visa related services
                  <span className="w-1.5 md:w-2 h-1.5 md:h-2 ml-2 md:ml-4 bg-gradient-to-r from-primary to-orange rounded-full"></span>
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
