import React from "react";
import { Lock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useUser } from "../../context/UserProvider";
import { useNavigate } from "react-router";
import { useContact } from "../../context/ContactProvider";

const ContactForm = () => {
  const { user } = useUser();
  const { loading, createContact } = useContact();
  const navigate = useNavigate();
  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Submit Handler
  const onSubmit = async (data) => {
    // Check User Login
    if (!user) {
      alert("login a account");
      return navigate("/login");
    }
    // Contact Data
    const contactData = {
      ...data,
      email: user?.email,
    };
    // Create Contact
    const result = await createContact(contactData);
    // Reset Form
    if (result?.success) {
      reset();
    }
  };

  return (
    <div className=" bg-dark border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl">
      <div>
        <h3 className="text-xl font-bold mb-2 font-heading">
          Free Consultation Book করুন
        </h3>
        <p className="text-gray-400 text-sm mb-8 font-light">
          সাধারণত ২ ঘণ্টার মধ্যে reply করি
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name + WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-xs text-gray-400">আপনার নাম *</label>
            <input
              {...register("name", {
                required: "নাম দেওয়া বাধ্যতামূলক",
              })}
              type="text"
              placeholder="আহমেদ রাফি"
              className="w-full border border-white/10 rounded-lg p-3 text-sm text-white focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-xs text-gray-400">WHATSAPP নম্বর *</label>
            <input
              {...register("phone", {
                required: "ফোন নম্বর দেওয়া বাধ্যতামূলক",
                minLength: {
                  value: 11,
                  message: "কমপক্ষে ১১ সংখ্যার নম্বর দিন",
                },
              })}
              type="text"
              placeholder="+880 1X-XXXXXXXX"
              className="w-full border border-white/10 rounded-lg p-3 text-sm text-white focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all"
            />

            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
        </div>
        {/* Email */}
        {/* <div className="space-y-2">
          <label className="text-xs text-gray-400">ইমেইল</label>
          <input
            type="email"
            placeholder="আপনার ইমেইল লিখুন (example@gmail.com)"
            className="w-full  border border-white/10 rounded-lg p-3 text-sm text-white focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all"
          />
        </div> */}
        {/* Message */}
        <div className="space-y-2">
          <label className="text-xs text-gray-400">
            আপনার BUSINESS সম্পর্কে বলুন
          </label>
          <textarea
            rows="3"
            {...register("message", {
              required: "Message দেওয়া বাধ্যতামূলক",
              minLength: {
                value: 30,
                message: "কমপক্ষে ৩০ অক্ষরের message লিখুন",
              },
            })}
            placeholder="আপনার business বা project সম্পর্কে বিস্তারিত জানান, আমরা আপনার জন্য সেরা solution তৈরি করব..."
            className="w-full  border border-white/10 rounded-lg p-3 text-sm text-white focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all resize-none"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>
        {/* Button */}
        <button
          type="submit"
          className="w-full bg-accent hover:bg-accent/90 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-95 cursor-pointer"
        >
          <Send size={18} />
          Free Consultation Book করুন
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
