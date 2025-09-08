import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_hhictdw",   // replace with your Service ID
          "template_sbfpoci",  // replace with your Template ID
          form.current,
          "iMaBmI2x4cv-d768h"    // replace with your Public Key
        )
        .then(
          () => {
            alert("✅ Message sent successfully!");
            form.current?.reset();
          },
          (error) => {
            alert("❌ Failed to send message. " + error.text);
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="p-4 bg-gray-900 text-gold rounded-2xl shadow-lg space-y-4">
      <input type="text" name="name" placeholder="YOUR NAME" required className="w-full p-2 rounded text-black" />
      <input type="email" name="email" placeholder="YOUR EMAIL" required className="w-full p-2 rounded text-black" />
      <input type="text" name="title" placeholder="Subject" required className="w-full p-2 rounded text-black" />
      <textarea name="message" placeholder="YOUR MESSAGE" required className="w-full p-2 rounded text-black h-32"></textarea>
      <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-2xl w-full">
        Send Message
        
      </button>
      <a
  href="https://x.com/messages/compose?recipient_id=1509341079119794179"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-gold hover:bg-white/15 hover:border-gold transition space-x-2"
>
  <img 
    src="/x-logo.png"   // 👈 we saved it in public, so just write /x-logo.png
    alt="X Logo" 
    className="w-5 h-5"
  />
  <span>DM me on X</span>
</a>

      
    </form>
  );
};

export default ContactForm;
