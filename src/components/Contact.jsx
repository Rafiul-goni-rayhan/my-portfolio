"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Gift, Link, Timer } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_g98ly4s", // Replace with your EmailJS Service ID
        "template_i09pr7i", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "RXzX_sRUz1Bx3aRwq" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const socials = [
    { icon: <Gift size={20} />, href: "#" },
    { icon: <Link size={20} />, href: "#" },
    { icon: <Timer size={20} />, href: "#" }
  ];

  const contactDetails = [
    { icon: <Mail className="w-6 h-6" />, title: "Email Me", detail: "rayhan.cse8.bu8@gmail.com", color: "bg-blue-50 text-blue-600" },
    { icon: <Phone className="w-6 h-6" />, title: "Call Me", detail: "+880 1911259090", color: "bg-green-50 text-green-600" },
    { icon: <MapPin className="w-6 h-6" />, title: "Location", detail: "Barishal, Bangladesh", color: "bg-orange-50 text-orange-600" },
  ];

  return (
    <section className="py-24 px-6 bg-[#fafafa] dark:bg-zinc-950" id="contact">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Contact Me</span>
          <h2 className="text-4xl p-5 md:text-5xl font-extrabold mt-3 bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 ">
            Let&apos;s Build Something Great
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {contactDetails.map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-6 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800"
              >
                <div className={`p-4 rounded-2xl mr-5 ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-zinc-400 font-medium">{item.title}</p>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-zinc-200">{item.detail}</h4>
                </div>
              </motion.div>
            ))}

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5 }}
                  className="p-4 bg-gray-900 text-white dark:bg-white dark:text-black rounded-full shadow-lg flex items-center justify-center"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-500/5 border border-gray-100 dark:border-zinc-800"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-zinc-200">Send me your message</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold ml-1">Message</label>
                <textarea
                  name="message"
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-blue-500 outline-none resize-none transition-all"
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-2xl shadow-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;