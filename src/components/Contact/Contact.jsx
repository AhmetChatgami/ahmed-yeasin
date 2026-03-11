import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"; 
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8gwuay8", 
        "template_gmcdfcb", 
        form.current,
        "ejwuFXkg8GGSahtYd",
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully.",
            icon: "success",
          });
          e.target.reset();
        },
        (error) => {
          toast.error("This didn't work.");
        },
      );
  };

  return (
    // CHANGE 1: overflow-x-hidden যোগ করা হয়েছে যাতে মোবাইলে সাইড স্ক্রলবার না আসে
    <section id="contact" className="py-20 bg-base-100 overflow-x-hidden" data-aos="fade-up">
      {/* CHANGE 2: px-4 ব্যবহার করা হয়েছে যাতে মোবাইলে কন্টেন্ট স্ক্রিনের সাথে লেগে না থাকে */}
      <div className="container mx-auto px-4 md:px-5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold border-b-4 border-primary inline-block pb-2">
            Get In Touch
          </h2>
        </div>

        {/* CHANGE 3: gap-8 (মোবাইলে কম) এবং gap-12 (ডেস্কটপে বেশি) গ্যাপ সেট করা হয়েছে */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Left Side: Contact Form */}
          <div className="card bg-base-200 shadow-xl p-6 md:p-8">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="form-control">
                <label className="label"><span className="label-text">Your Name</span></label>
                <input type="text" name="user_name" placeholder="Enter your name" className="input input-bordered w-full focus:input-primary" required />
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text">Your Email</span></label>
                <input type="email" name="user_email" placeholder="Enter your email" className="input input-bordered w-full focus:input-primary" required />
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text">Message</span></label>
                <textarea name="message" className="textarea textarea-bordered h-32 w-full focus:textarea-primary" placeholder="Write your message..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full text-white text-lg">Send Message</button>
            </form>
          </div>

          {/* Right Side: Socials & Info - মোবাইলে টেক্সট সেন্টার করা হয়েছে */}
          <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Let's Talk!</h3>
              <p className="text-base md:text-lg">
                I am currently looking for new opportunities and collaborations. Feel free to drop a message!
              </p>
            </div>

            <div className="space-y-3">
              <p className="break-all"><span className="font-bold text-primary">Email:</span> ahmetchatgami@gmail.com</p>
              <p><span className="font-bold text-primary">Location:</span> Chattogram, Bangladesh</p>
            </div>

            {/* Social Icons - মোবাইলে আইকনগুলো সেন্টারে আনার জন্য justify-center যোগ করা হয়েছে */}
            <div className="flex gap-6 text-3xl justify-center md:justify-start">
              <a href="https://github.com/AhmetChatgami" target="_blank" rel="noreferrer" className="hover:text-primary transition-all"><FaGithub /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-primary transition-all"><FaLinkedin /></a>
              <a href="https://x.com/" target="_blank" rel="noreferrer" className="hover:text-primary transition-all"><FaXTwitter /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-all"><FaFacebook /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;