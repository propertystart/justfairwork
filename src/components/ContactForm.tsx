
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Mail, MapPin } from 'lucide-react';

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

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    isDismissed: '',
    jobLocation: '',
    employmentDuration: '',
    dismissalTime: '',
    employmentType: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOptionSelect = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        isDismissed: '',
        jobLocation: '',
        employmentDuration: '',
        dismissalTime: '',
        employmentType: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone',
      content: '+61 3 9999 9999',
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      content: 'contact@fairwork.example.com',
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Address',
      content: '123 Main Street, Melbourne, VIC 3000, Australia',
    },
  ];

  // Define option button styles
  const baseButtonStyles = "px-4 py-2 rounded-md transition-all duration-200 focus:outline-none border border-gray-200";
  const activeButtonStyles = "bg-[#10b981] text-white border-[#10b981]";
  const inactiveButtonStyles = "bg-gray-100 text-navy-700 hover:bg-gray-200";

  return (
    <section id="contact" className="py-20 lg:py-32 bg-navy-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Motion>
            <span className="inline-block py-1 px-3 rounded-full bg-navy-100 text-navy-700 text-sm font-medium mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">Contact Us</h2>
            <p className="text-lg text-navy-700 max-w-2xl mx-auto">
              Have questions about workplace rights and responsibilities? Our team is here to help.
            </p>
          </Motion>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Motion>
            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-navy-800 mb-6">Please fill out the form below</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-navy-700">
                    Full Name *
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="border-navy-200 focus:border-navy-400 focus:ring-navy-400"
                  />
                  {!formData.fullName && (
                    <p className="text-red-500 text-xs">Field is required</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-navy-700">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    className="border-navy-200 focus:border-navy-400 focus:ring-navy-400"
                  />
                  {!formData.email && (
                    <p className="text-red-500 text-xs">Field is required</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phoneNumber" className="text-sm font-medium text-navy-700">
                    Phone number *
                  </label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="border-navy-200 focus:border-navy-400 focus:ring-navy-400"
                  />
                  {!formData.phoneNumber && (
                    <p className="text-red-500 text-xs">Field is required</p>
                  )}
                </div>
                
                <div className="space-y-4">
                  <label className="text-sm font-medium text-navy-700">
                    Have you already been dismissed? *
                  </label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => handleOptionSelect('isDismissed', 'YES')}
                      className={`${baseButtonStyles} ${formData.isDismissed === 'YES' ? activeButtonStyles : inactiveButtonStyles}`}
                    >
                      YES
                    </button>
                    <button
                      type="button"
                      onClick={() => handleOptionSelect('isDismissed', 'NO')}
                      className={`${baseButtonStyles} ${formData.isDismissed === 'NO' ? activeButtonStyles : inactiveButtonStyles}`}
                    >
                      NO
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-medium text-navy-700">
                    Where was your job based? *
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {['VIC', 'NSW', 'QLD', 'SA', 'WA'].map((location) => (
                      <button
                        key={location}
                        type="button"
                        onClick={() => handleOptionSelect('jobLocation', location)}
                        className={`${baseButtonStyles} ${formData.jobLocation === location ? activeButtonStyles : inactiveButtonStyles}`}
                      >
                        {location}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-medium text-navy-700">
                    How long had you been employed for? *
                  </label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => handleOptionSelect('employmentDuration', '12+ Months')}
                      className={`${baseButtonStyles} ${formData.employmentDuration === '12+ Months' ? activeButtonStyles : inactiveButtonStyles}`}
                    >
                      12+ Months
                    </button>
                    <button
                      type="button"
                      onClick={() => handleOptionSelect('employmentDuration', '0-12 Months')}
                      className={`${baseButtonStyles} ${formData.employmentDuration === '0-12 Months' ? activeButtonStyles : inactiveButtonStyles}`}
                    >
                      0-12 Months
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-medium text-navy-700">
                    When were you Dismissed? *
                  </label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => handleOptionSelect('dismissalTime', 'Under 21 Days Ago')}
                      className={`${baseButtonStyles} ${formData.dismissalTime === 'Under 21 Days Ago' ? activeButtonStyles : inactiveButtonStyles}`}
                    >
                      Under 21 Days Ago
                    </button>
                    <button
                      type="button"
                      onClick={() => handleOptionSelect('dismissalTime', 'Over 21 Days Ago')}
                      className={`${baseButtonStyles} ${formData.dismissalTime === 'Over 21 Days Ago' ? activeButtonStyles : inactiveButtonStyles}`}
                    >
                      Over 21 Days Ago
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-medium text-navy-700">
                    How were you employed? *
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {['Casual', 'Full Time', 'Part Time'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handleOptionSelect('employmentType', type)}
                        className={`${baseButtonStyles} ${formData.employmentType === type ? activeButtonStyles : inactiveButtonStyles}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 bg-[#6366f1] hover:bg-[#4f46e5] transition-all"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Form'}
                </Button>
              </form>
            </div>
          </Motion>
          
          <Motion>
            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 h-full">
              <h3 className="text-2xl font-bold text-navy-800 mb-6">Contact Information</h3>
              
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-navy-100 text-navy-700 rounded-full p-3">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-navy-800 mb-1">{item.title}</h4>
                      <p className="text-navy-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <h4 className="font-medium text-navy-800 mb-4">Operating Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-navy-600">
                    <span>Monday - Friday</span>
                    <span>8:30 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between text-navy-600">
                    <span>Saturday</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between text-navy-600">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-medium text-navy-800 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-navy-100 text-navy-700 hover:bg-navy-200 rounded-full p-3 transition-all">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-navy-100 text-navy-700 hover:bg-navy-200 rounded-full p-3 transition-all">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="bg-navy-100 text-navy-700 hover:bg-navy-200 rounded-full p-3 transition-all">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-navy-100 text-navy-700 hover:bg-navy-200 rounded-full p-3 transition-all">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
