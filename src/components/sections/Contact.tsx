
import React from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Calendar, Linkedin } from 'lucide-react';
import ContactForm from '../ui/ContactForm';
import SocialIcons from '../ui/SocialIcons';
import {socialLinks as contactSocialLinks} from '../../constants/sociallinks';
import type { FormData } from '../ui/ContactForm';

const Contact: React.FC = () => {
  const handleFormSubmit = async (data: FormData) => {
    try {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
      
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          name: data.name,
          email: data.email,
          to_email: 'ktp.fiverr@gmail.com',
          reply_to: data.email,
          current_date: new Date().toLocaleString(),
        }
      );
      
      console.log('✅ Email sent successfully!');
    } catch (error) {
      console.error('❌ Error:', error);
      throw new Error('Failed to send email');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Have a project in mind or want to discuss how I can help your business? I'll respond within 24 hours.
          </p>
          <div className="h-1 w-20 bg-teal-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:kshiti.de@gmail.com" className="text-black hover:text-teal-400 transition-colors duration-300">
                      kshiti.de@gmail.com
                    </a><br></br>
                    <a href="mailto:ktp.fiverr@gmail.com" className="text-black hover:text-teal-400 transition-colors duration-300">
                      ktp.fiverr@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-lg mr-4">
                    <Calendar className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Book Consultation</h4>
                    <a className="text-black hover:text-teal-400 transition-colors duration-300" href='https://calendar.app.google/Q95YxehEeVWCQfju9'>https://calendar.app.google/Q95YxehEeVWCQfju9</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-lg mr-4">
                    <Linkedin className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/kshitipatel1999/" className="text-black hover:text-teal-400 transition-colors duration-300">
                      Kshiti Patel
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-700">Hamburg, Germany</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-3">Follow me</h4>
                <SocialIcons 
                  links={contactSocialLinks}
                  variant="default"
                  size="md"
                />
              </div>
              
              <div className="mt-10 p-6 bg-teal-50 rounded-lg border border-teal-100">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Send className="h-5 w-5 mr-2 text-teal-600" />
                  Quick Response
                </h4>
                <p className="text-gray-700 text-sm">
                  I typically respond to all inquiries within 24 hours. You'll receive an automatic confirmation email immediately after submitting this form.
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            {/* ⬇️ PASS THE onSubmit METHOD AS PROP ⬇️ */}
            <ContactForm 
              onSubmit={handleFormSubmit}
              title="Send a Message"
              description="I'll send you a confirmation email and respond personally within 24 hours"
              variant="default"
              submitText="Send Message"
              subjects={[
                "Project Inquiry",
                "Consultation Request",
                "Partnership Opportunity",
                "Technical Question",
                "Job Opportunity",
                "Other"
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;