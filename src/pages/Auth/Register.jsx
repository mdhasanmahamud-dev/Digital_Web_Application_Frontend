import React from "react";
import { useForm } from "react-hook-form";
import { User, Mail, Lock, Phone, ArrowRight } from "lucide-react";
import { useUser } from "../../context/UserProvider";
import { NavLink, useNavigate } from "react-router";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { createUser } = useUser();
  // Submit Handler
  const onSubmit = async (data) => {
    const success = await createUser(data);
    if (success) {
      reset();
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-lg bg-card-primary border border-primary rounded-3xl p-8 shadow-2xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold font-heading text-white mb-3">
            Create Account
          </h1>

          <p className="text-white-muted text-sm leading-7">
            নতুন account তৈরি করে শুরু করুন
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm mb-2 text-white-soft">
              Full Name
            </label>

            <div className="flex items-center bg-card-secondary border border-white/10 rounded-xl px-4">
              <User size={18} className="text-primary" />

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-transparent px-3 py-4 outline-none text-sm placeholder:text-white/40"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters",
                  },
                })}
              />
            </div>

            {errors.name && (
              <p className="text-red-400 text-sm mt-2">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2 text-white-soft">
              Email Address
            </label>

            <div className="flex items-center bg-card-secondary border border-white/10 rounded-xl px-4">
              <Mail size={18} className="text-primary" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-3 py-4 outline-none text-sm placeholder:text-white/40"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>

            {errors.email && (
              <p className="text-red-400 text-sm mt-2">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-2 text-white-soft">
              Password
            </label>

            <div className="flex items-center bg-card-secondary border border-white/10 rounded-xl px-4">
              <Lock size={18} className="text-primary" />

              <input
                type="password"
                placeholder="Create password"
                className="w-full bg-transparent px-3 py-4 outline-none text-sm placeholder:text-white/40"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
            </div>

            {errors.password && (
              <p className="text-red-400 text-sm mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-accent hover:opacity-90 text-black font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
          >
            Register
            <ArrowRight size={18} />
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-sm text-white-muted">
            Alredy have an account?{" "}
            <NavLink
              to="/login"
              className="text-primary hover:text-yellow-400 transition-all"
            >
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
