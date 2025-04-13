"use client";

import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  companyName: string;
}

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  successMessage?: string;
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export const FormModal = ({
  isOpen,
  onClose,
  title = "Talk to our AI HR Agent Anita",
  successMessage = "You will receive a call from Mahira shortly."
}: FormModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phoneNumber: '',
    companyName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Close modal after showing success message for 3 seconds
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        companyName: ''
      });
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="shadow-input mx-auto w-full max-w-md rounded-lg bg-white p-6 dark:bg-black relative">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        {!isSubmitted ? (
          <>
            <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              {title}
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <LabelInputContainer className="mb-2">
                <Label htmlFor="name" className="text-sm font-medium text-left">
                  Full Name
                </Label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Tyler Durden" 
                  type="text" 
                  className="mt-1"
                  required
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-2">
                <Label htmlFor="email" className="text-sm font-medium text-left">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="projectmayhem@fc.com"
                  type="email"
                  className="mt-1"
                  required
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-2">
                <Label htmlFor="phone" className="text-sm font-medium text-left">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="+1 234 567 890"
                  type="tel"
                  className="mt-1"
                  required
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="company" className="text-sm font-medium text-left">
                  Company Name
                </Label>
                <Input
                  id="company"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Fight Club"
                  type="text"
                  className="mt-1"
                  required
                />
              </LabelInputContainer>

              <button
                className="w-full bg-black text-white dark:bg-white dark:text-black font-medium py-2 px-4 rounded-md transition-colors"
                type="submit"
              >
                Continue &rarr;
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-10 typeform-fade">
            <div className="mb-6 mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-700">{successMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};
