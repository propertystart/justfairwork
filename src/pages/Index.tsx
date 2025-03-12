
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { FileCheck, Book, Users, Phone, Clock, Shield, CheckCircle, FileText, DollarSign } from 'lucide-react';

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
        title="Have You Been Unfairly Dismissed From Your Employment?"
        subtitle="No Win, No Fee"
        description="We provide a 'No Win, No Fee' Service for representation in Fair Work Commission (FWC) unfair dismissal cases, ensuring that everyone has access to justice, regardless of their financial circumstances."
        imageSrc="/lovable-uploads/fafc5e90-4433-4986-a4df-6b2267280668.png"
        features={[
          {
            icon: <DollarSign className="w-5 h-5" />,
            title: "Financial Barriers to Justice",
            description: "In many instances, legal firms impose fees that surpass the potential compensation, discouraging individuals from pursuing their claims or securing adequate representation."
          },
          {
            icon: <FileText className="w-5 h-5" />,
            title: "Complete Legal Support",
            description: "We handle all the legal paperwork required by the Fair Work Commission and represent you at the conciliation conference."
          },
          {
            icon: <CheckCircle className="w-5 h-5" />,
            title: "Comprehensive Representation",
            description: "If no agreement is reached in conciliation, we will prepare the required documentation and represent you as a paid agent at the FWC hearing."
          }
        ]}
        ctaText="Call 1800 87 86 87"
        ctaLink="tel:1800878687"
        customContent={
          <div className="mt-6 text-navy-700">
            <p className="mb-4">This often results in valid cases going unrepresented, leading to a lack of fairness in the process.</p>
            <p className="mb-4">Our service is designed to bridge this gap, offering professional advocacy without the burden of upfront legal fees, without the risk of incurring legal costs unless a successful outcome is achieved.</p>
            <p className="mb-6 text-xl font-medium text-navy-900">Let us remove the financial stress and fight for the justice you deserve!</p>
          </div>
        }
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
