
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Clock, FileText, Star } from 'lucide-react';

interface InfoSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc?: string;
  reversed?: boolean;
  features?: { icon: React.ReactNode; title: string; description: string }[];
  ctaText?: string;
  ctaLink?: string;
}

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

const InfoSection = ({
  id,
  title,
  subtitle,
  description,
  imageSrc,
  reversed = false,
  features,
  ctaText = 'Learn More',
  ctaLink = '#',
}: InfoSectionProps) => {
  return (
    <section id={id} className="py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}>
          <div className="w-full lg:w-1/2">
            <Motion>
              <div className="relative">
                <div className="absolute -z-10 w-64 h-64 bg-navy-100 rounded-full filter blur-3xl opacity-30 -left-10 -top-10"></div>
                <div className="bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden">
                  {imageSrc ? (
                    <img 
                      src={imageSrc} 
                      alt={title} 
                      className="w-full h-auto object-cover transition-all duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="aspect-w-16 aspect-h-9 bg-navy-50 flex items-center justify-center p-12">
                      <div className="text-center space-y-4">
                        <div className="mx-auto bg-navy-100 text-navy-700 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                          <FileText className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-medium text-navy-700">Fair Work Resources</h3>
                        <p className="text-navy-600">Access valuable information and resources to ensure workplace compliance.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Motion>
          </div>
          
          <div className="w-full lg:w-1/2">
            <Motion>
              <span className="inline-block py-1 px-3 rounded-full bg-navy-100 text-navy-700 text-sm font-medium mb-4">
                {subtitle}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6">{title}</h2>
              <p className="text-lg text-navy-700 mb-8 max-w-lg">{description}</p>
              
              {features && (
                <div className="space-y-6 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1 text-navy-700">
                        {feature.icon || <CheckCircle className="w-5 h-5" />}
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-800 mb-1">{feature.title}</h4>
                        <p className="text-navy-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <Button className="mt-2 bg-navy-700 hover:bg-navy-800 transition-all flex items-center gap-2">
                {ctaText}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Motion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
