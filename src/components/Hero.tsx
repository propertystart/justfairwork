
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Framer motion is not installed so let's create a simple component for animation
const Motion = ({ children, ...props }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add('appear');
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  return (
    <div ref={ref} className="appear-animation" {...props}>
      {children}
    </div>
  );
};

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-50 to-transparent opacity-40 z-0"></div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 space-y-8">
          <Motion>
            <span className="inline-block py-1 px-3 rounded-full bg-navy-100 text-navy-700 text-sm font-medium mb-4">
              Fair Work Australia
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-navy-900 leading-tight">
              Making work <span className="text-navy-700">fair</span> for everyone
            </h1>
            <p className="text-lg md:text-xl text-navy-700 max-w-lg">
              We provide expert guidance on workplace rights and responsibilities to ensure fair and compliant workplaces across Australia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="px-8 py-6 bg-navy-700 hover:bg-navy-800 transition-all rounded-md text-white flex items-center gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="px-8 py-6 border-navy-200 hover:bg-navy-50 text-navy-700 transition-all rounded-md">
                Learn More
              </Button>
            </div>
          </Motion>
        </div>
        
        <div className="w-full lg:w-1/2">
          <Motion>
            <div className="relative w-full">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-navy-100 rounded-full filter blur-3xl opacity-50"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-navy-200 rounded-full filter blur-3xl opacity-50"></div>
              
              <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border border-navy-100 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-navy-700"></div>
                      <h3 className="font-semibold text-navy-800">Fair Work Information</h3>
                    </div>
                    <div className="flex space-x-2">
                      <div className="h-3 w-3 rounded-full bg-navy-100"></div>
                      <div className="h-3 w-3 rounded-full bg-navy-100"></div>
                      <div className="h-3 w-3 rounded-full bg-navy-100"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-4 rounded-lg bg-navy-50">
                      <h4 className="font-medium text-navy-800 mb-2">National Employment Standards</h4>
                      <p className="text-navy-600 text-sm">Minimum employment entitlements that must be provided to all employees.</p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-navy-50">
                      <h4 className="font-medium text-navy-800 mb-2">Modern Awards</h4>
                      <p className="text-navy-600 text-sm">Legal documents that outline the minimum pay rates and conditions for an industry or occupation.</p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-navy-50">
                      <h4 className="font-medium text-navy-800 mb-2">Fair Work Information Statement</h4>
                      <p className="text-navy-600 text-sm">Must be given to all new employees when they start work.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
};

export default Hero;
