import React from "react";
import { useForm } from "react-hook-form";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { useUser } from "../../context/UserProvider";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { loginUser } = useUser();
  const navigate = useNavigate();

  // Submit Handler
  const onSubmit = async (data) => {
    try {
      const success = await loginUser(data);
      if (success) {
        reset();
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <div className="w-full max-w-md md:max-w-lg bg-card-primary border border-primary rounded-3xl p-8 shadow-2xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-3">Welcome Back</h1>
          <p className="text-white-muted text-sm">আপনার account এ login করুন</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                placeholder="Enter your password"
                className="w-full bg-transparent px-3 py-4 outline-none text-sm placeholder:text-white/40"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters required",
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
            Login
            <ArrowRight size={18} />
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-white-muted">
            Don’t have an account?{" "}
            <NavLink
              to="/register"
              className="text-primary hover:text-yellow-400 transition-all"
            >
              Register
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
