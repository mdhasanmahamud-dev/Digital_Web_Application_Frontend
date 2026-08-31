import { useForm } from "react-hook-form";
import DashboardTitle from "../../DashboardTitle/DashboardTitle";
import { ImagePlus, Send } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { useProject } from "../../../context/ProjectProvider";
import { useEffect } from "react";

const EditProject = () => {
  const { projects, updateProject } = useProject();

  const navigate = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Previous Data Fill Up
  useEffect(() => {
    const singleProject = projects.find((project) => project._id === id);
    if (singleProject) {
      reset({
        title: singleProject.title,
        tag: singleProject.tag,
        img: singleProject.img,
        desc: singleProject.desc,
      });
    }
  }, [id, projects, reset]);

  // Form Submit
  const onSubmit = async (data) => {
    try {
      const res = await updateProject(id, data);

      if (res?.success) {
        navigate("/dashboard/projects");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <DashboardTitle
        title="Edit Project"
        subtitle="Update your existing project information"
      />
      <div className="bg-dark border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl max-w-3xl flex items-center justify-self-center">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Project Title + Project Tag */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Title Input */}
            <div className="space-y-2">
              <label className="text-xs text-gray-400 uppercase tracking-wider">
                PROJECT TITLE *
              </label>
              <input
                {...register("title", {
                  required: "প্রজেক্টের নাম দেওয়া বাধ্যতামূলক",
                })}
                type="text"
                placeholder="যেমন: FinTrack Mobile"
                className="w-full bg-transparent border border-white/10 rounded-lg p-3 text-sm text-white focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            {/* Tag Input */}
            <div className="space-y-2">
              <label className="text-xs text-gray-400 uppercase tracking-wider">
                PROJECT TAG / CATEGORY *
              </label>
              <input
                {...register("tag", {
                  required: "ট্যাগ বা ক্যাটাগরি দেওয়া বাধ্যতামূলক",
                })}
                type="text"
                placeholder="যেমন: UI/UX Design, Full Stack"
                className="w-full bg-transparent border border-white/10 rounded-lg p-3 text-sm text-white focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all"
              />
              {errors.tag && (
                <p className="text-red-500 text-sm">{errors.tag.message}</p>
              )}
            </div>
          </div>

          {/* Image URL Input */}
          <div className="space-y-2">
            <label className="text-xs text-gray-400 uppercase tracking-wider">
              IMAGE URL *
            </label>
            <div className="relative flex items-center">
              <input
                {...register("img", {
                  required: "প্রজেক্টের ইমেজ লিংক দেওয়া বাধ্যতামূলক",
                })}
                type="text"
                placeholder="https://example.com/project-image.jpg"
                className="w-full bg-transparent border border-white/10 rounded-lg p-3 pl-10 text-sm text-white focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all"
              />
              <ImagePlus size={16} className="absolute left-3 text-gray-400" />
            </div>
            {errors.img && (
              <p className="text-red-500 text-sm">{errors.img.message}</p>
            )}
          </div>

          {/* Description Input */}
          <div className="space-y-2">
            <label className="text-xs text-gray-400 uppercase tracking-wider">
              PROJECT DESCRIPTION *
            </label>
            <textarea
              rows="4"
              {...register("desc", {
                required: "প্রজেক্টের বিবরণ দেওয়া বাধ্যতামূলক",
                minLength: {
                  value: 10,
                  message: "কমপক্ষে ১০ অক্ষরের বিবরণ লিখুন",
                },
              })}
              placeholder="আপনার প্রজেক্টের সংক্ষিপ্ত বিবরণ এখানে লিখুন..."
              className="w-full bg-transparent border border-white/10 rounded-lg p-3 text-sm text-white focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all resize-none"
            />
            {errors.desc && (
              <p className="text-red-500 text-sm">{errors.desc.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-95 cursor-pointer"
          >
            <Send size={18} />
            Publish Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProject;
