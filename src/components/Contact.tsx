import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-[#222831]">Let's Build Something Amazing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Got an idea? Let's turn it into an app! Drop me a message and I'll get back to you within 24 hours.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardHeader>
                <h3 className="text-[#222831]">Get in Touch</h3>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#00ADB5]/10 rounded-lg flex-shrink-0">
                    <Mail className="text-[#00ADB5]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a href="mailto:your.email@example.com" className="text-[#222831] hover:text-[#00ADB5]">
                      iamtasain.00@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#00ADB5]/10 rounded-lg flex-shrink-0">
                    <Phone className="text-[#00ADB5]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <a href="tel:+1234567890" className="text-[#222831] hover:text-[#00ADB5]">
                     +91 8899951986
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#00ADB5]/10 rounded-lg flex-shrink-0">
                    <MapPin className="text-[#00ADB5]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-[#222831]">Anantnag, J & K</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-4">Follow me on social media</p>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/TassainRasool" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-[#00ADB5]/10 rounded-lg hover:bg-[#00ADB5]/20 transition-colors"
                    >
                      <Github className="text-[#00ADB5]" size={20} />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/trm0229" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-[#00ADB5]/10 rounded-lg hover:bg-[#00ADB5]/20 transition-colors"
                    >
                      <Linkedin className="text-[#00ADB5]" size={20} />
                    </a>
                    {/* <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-[#00ADB5]/10 rounded-lg hover:bg-[#00ADB5]/20 transition-colors"
                    >
                      <Twitter className="text-[#00ADB5]" size={20} />
                    </a> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardHeader>
                <h3 className="text-[#222831]">Send a Message</h3>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="mt-1 border-gray-400 placeholder:text-gray-500"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="mt-1 border-gray-400 placeholder:text-gray-500"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      className="mt-1 border-gray-400 placeholder:text-gray-500"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#00ADB5] hover:bg-[#00ADB5]/90"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
