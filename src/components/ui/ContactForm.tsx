import React, { useState } from 'react';
import { Send, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormProps {
  onSubmit?: (data: FormData) => Promise<void> | void;
  title?: string;
  description?: string;
  variant?: 'default' | 'glow' | 'minimal';
  showTitle?: boolean;
  className?: string;
  submitText?: string;
  subjects?: string[];
}

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  title = "Send a Message",
  description,
  variant = 'default',
  showTitle = true,
  className = '',
  submitText = "Send Message",
  subjects = [
    "Project Inquiry",
    "Consultation Request", 
    "Partnership Opportunity",
    "Technical Question",
    "Other"
  ]
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default simulation
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      
      setSubmitMessage({
        type: 'success',
        text: 'Your message has been sent successfully! I\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
      
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Something went wrong. Please try again or contact me directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFormClasses = () => {
    switch (variant) {
      case 'glow':
        return 'bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl';
      case 'minimal':
        return 'bg-transparent border-0 shadow-none';
      default:
        return 'bg-white border border-gray-100 shadow-sm';
    }
  };

  const getInputClasses = (fieldName: string) => {
    const baseClasses = "w-full px-4 py-3 rounded-md transition-all duration-300 border outline-none";
    const focusClasses = "focus:ring-2 focus:ring-teal-500 focus:border-transparent";
    
    switch (variant) {
      case 'glow':
        return `${baseClasses} bg-white/10 border-white/20 text-white placeholder-white/60 ${focusClasses} focus:bg-white/20`;
      case 'minimal':
        return `${baseClasses} bg-gray-50 border-gray-200 hover:border-gray-300 ${focusClasses}`;
      default:
        return `${baseClasses} bg-white border-gray-300 hover:border-gray-400 ${focusClasses}`;
    }
  };

  const getLabelClasses = () => {
    switch (variant) {
      case 'glow':
        return 'block text-sm font-medium text-white/90 mb-2';
      default:
        return 'block text-sm font-medium text-gray-700 mb-2';
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Gradient glow background for glow variant */}
      {variant === 'glow' && (
        <>
          <div className="absolute -top-4 -left-4 w-1/3 h-1/3 bg-teal-400/20 rounded-full blur-xl filter" />
          <div className="absolute -bottom-4 -right-4 w-1/3 h-1/3 bg-amber-400/20 rounded-full blur-xl filter" />
        </>
      )}
      <div className="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-teal-500 via-amber-500 to-pink-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200" />
        
      <form 
        onSubmit={handleSubmit} 
        className={`relative z-10 p-8 rounded-xl transition-all duration-300 ${getFormClasses()}`}
      >
        {showTitle && (
          <div className="mb-8">
            <h3 className={`text-2xl font-bold mb-2 ${variant === 'glow' ? 'text-white' : 'text-gray-900'}`}>
              {title}
            </h3>
            {description && (
              <p className={`${variant === 'glow' ? 'text-white/80' : 'text-gray-600'}`}>
                {description}
              </p>
            )}
          </div>
        )}
        
        {submitMessage && (
          <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
            submitMessage.type === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {submitMessage.type === 'success' ? (
              <CheckCircle className="h-5 w-5 flex-shrink-0" />
            ) : (
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
            )}
            <span>{submitMessage.text}</span>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-1">
            <label htmlFor="name" className={getLabelClasses()}>
              Your Name *
            </label>
            <div className="relative group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className={getInputClasses('name')}
                required
                placeholder="Max Mustermann"
              />
              {focusedField === 'name' && variant === 'glow' && (
                <div className="absolute inset-0 rounded-lg bg-teal-400/10 pointer-events-none" />
              )}
            </div>
          </div>
          
          <div className="space-y-1">
            <label htmlFor="email" className={getLabelClasses()}>
              Your Email *
            </label>
            <div className="relative group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className={getInputClasses('email')}
                required
                placeholder="max@mustermann.de"
              />
              {focusedField === 'email' && variant === 'glow' && (
                <div className="absolute inset-0 rounded-lg bg-teal-400/10 pointer-events-none" />
              )}
            </div>
          </div>
        </div>
        
        <div className="mb-6 space-y-1">
          <label htmlFor="subject" className={getLabelClasses()}>
            Subject *
          </label>
          <div className="relative group">
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onFocus={() => setFocusedField('subject')}
              onBlur={() => setFocusedField(null)}
              className={getInputClasses('subject')}
              required
            >
              <option value="">Select a subject</option>
              {subjects.map((subject, index) => (
                <option key={index} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            {focusedField === 'subject' && variant === 'glow' && (
              <div className="absolute inset-0 rounded-lg bg-teal-400/10 pointer-events-none" />
            )}
          </div>
        </div>
        
        <div className="mb-8 space-y-1">
          <label htmlFor="message" className={getLabelClasses()}>
            Your Message *
          </label>
          <div className="relative group">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              rows={5}
              className={getInputClasses('message')}
              required
              placeholder="Tell me about your project..."
            />
            {focusedField === 'message' && variant === 'glow' && (
              <div className="absolute inset-0 rounded-lg bg-teal-400/10 pointer-events-none" />
            )}
          </div>
        </div>
        
        <div className="relative group">
          {/* Gradient glow for submit button */}
          <div className="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-teal-500 via-amber-500 to-pink-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200" />
        
          <button
            type="submit"
            disabled={isSubmitting}
            className={`relative z-10 w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg hover:-translate-y-0.5 hover:shadow-teal-600/30 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
              variant === 'glow' ? 'focus:ring-offset-transparent' : ''
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                <span>{submitText}</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;