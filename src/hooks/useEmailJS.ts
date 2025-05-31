
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const useEmailJS = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const sendEmail = async (data: EmailData) => {
    setIsLoading(true);
    
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_name: 'Gourob Saha',
      };

      await emailjs.send(
        'service_0lg9pdf', // Service ID
        'template_4p2g4la', // Template ID - This needs to be created in EmailJS dashboard
        templateParams,
        '2s6PsJ8id9go2ibJs' // Public Key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      return true;
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      
      let errorMessage = "Please try again or contact me directly via email.";
      
      if (error.status === 400 && error.text?.includes('template ID not found')) {
        errorMessage = "Email service configuration issue. Please contact me directly at gourobsaha2319@gmail.com";
      } else if (error.status === 401) {
        errorMessage = "Email service authentication issue. Please contact me directly at gourobsaha2319@gmail.com";
      }
      
      toast({
        title: "Failed to send message",
        description: errorMessage,
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { sendEmail, isLoading };
};
