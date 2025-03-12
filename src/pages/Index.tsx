
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Shield, FileCheck, Book, Users, Phone, Clock } from 'lucide-react';

const Index = () => {
  // Initialize intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const animatedElements = document.querySelectorAll('.appear-animation');
    animatedElements.forEach((el) => observer.observe(el));
    
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-navy-900">
      <Navbar />
      
      <Hero />
      
      <InfoSection
        id="about"
        title="About Fair Work Australia"
        subtitle="Who We Are"
        description="Fair Work Australia is the national workplace relations tribunal. We are an independent body with authority to carry out a range of functions under the Fair Work Act 2009."
        features={[
          {
            icon: <Shield className="w-5 h-5" />,
            title: "Protect Workplace Rights",
            description: "We ensure employees receive their proper entitlements and protections under Australian law."
          },
          {
            icon: <FileCheck className="w-5 h-5" />,
            title: "Compliant Workplaces",
            description: "We help businesses understand their obligations to create fair and lawful workplaces."
          },
          {
            icon: <Book className="w-5 h-5" />,
            title: "Educational Resources",
            description: "We provide comprehensive guides and resources on workplace laws and regulations."
          }
        ]}
      />
      
      <InfoSection
        id="services"
        title="Our Services"
        subtitle="What We Offer"
        description="We provide expert guidance and resources to help both employers and employees navigate workplace regulations and rights."
        reversed={true}
        features={[
          {
            icon: <Users className="w-5 h-5" />,
            title: "Employment Advice",
            description: "Expert guidance on employment contracts, awards, and enterprise agreements."
          },
          {
            icon: <Phone className="w-5 h-5" />,
            title: "Dispute Resolution",
            description: "Professional mediation services to resolve workplace conflicts effectively."
          },
          {
            icon: <Clock className="w-5 h-5" />,
            title: "Compliance Audits",
            description: "Comprehensive workplace audits to ensure compliance with all relevant laws."
          }
        ]}
      />
      
      <ContactForm />
      
      <Footer />
    </div>
  );
};

export default Index;
