import { Github, Instagram, Linkedin, Mail, Map, Phone, Send } from "lucide-react"
import { success, error as showError } from "../utils/toast";
import { useState } from "react"
import emailjs from "@emailjs/browser";
export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({ name: "", email: "", message: "" });
    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = { name: "", email: "", message: "" };

        if (!name.trim()) newErrors.name = "Name is required";

        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) newErrors.email = "Enter a valid email";
        }

        if (!message.trim()) newErrors.message = "Message is required";

        if (newErrors.name || newErrors.email || newErrors.message) {
            setErrors(newErrors);
            return;
        }

        setErrors({ name: "", email: "", message: "" });
        setIsSubmitting(true);

        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            showError("Email service is not configured. Please set environment variables.");
            setIsSubmitting(false);
            return;
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then(() => {
                success("Message sent successfully!");
                e.target.reset();
                setName("");
                setEmail("");
                setMessage("");
                setIsSubmitting(false);
            })
            .catch(() => {
                showError("Failed to send the message!");
                setIsSubmitting(false);
                e.target.reset();
                setName("");
                setEmail("");
                setMessage("");
                setIsSubmitting(false);
            });


    }
    return (
        <section id="contact" className="relative bg-secondary/30 w-full">
            <div className="container mx-2 w-full">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Get In <span className="text-primary">Touch</span></h2>
                <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                    I'm always open to discussing <span className="text-primary font-bold">new projects</span>, <span className="text-primary font-bold">creative ideas</span>, or <span className="text-primary font-bold">opportunities</span> to be part of your visions. Feel free to reach out to me
                </p>
                <div className="grid grid-cols-1 gap-12">

                    <div className="bg-transparent flex flex-col md:flex-row w-full md:gap-8">
                        <div className="md:flex flex-col object-fit justify-center items-center w-full md:w-1/2">
                            <img src="/connect-image.svg" alt="connect-image" className="size-[600px]" />
                        </div>
                        <div className="flex flex-col justify-center w-full md:w-1/2 mx-auto">
                            <form className="space-y-6 border border-primary/40 p-8 rounded-lg" onSubmit={handleSubmit} noValidate>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
                                        <input type="text" value={name} onChange={(e) => { setName(e.target.value); setErrors(prev => ({ ...prev, name: "" })); }} id="name" name="name" className="w-full mt-1 p-2 border rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" required />
                                        {errors.name && (
                                            <p className="text-red-500 text-sm">{errors.name}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
                                        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); setErrors(prev => ({ ...prev, email: "" })); }} id="email" name="email" className="w-full mt-1 p-2 border rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" required />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm">{errors.email}</p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2 mt-8">Your Message</label>
                                    <textarea value={message} onChange={(e) => { setMessage(e.target.value); setErrors(prev => ({ ...prev, message: "" })); }} id="message" name="message" className="w-full mt-1 p-2 border rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary  resize-none h-32" required />
                                    {errors.message && (
                                        <p className="text-red-500 text-sm">{errors.message}</p>
                                    )}
                                </div>
                                <button disabled={isSubmitting} type="submit" className="flex items-center justify-center bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors w-full gap-4">{isSubmitting ? "Sending..." : "Send Message"}<Send className="text-center" size={16} /></button>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}