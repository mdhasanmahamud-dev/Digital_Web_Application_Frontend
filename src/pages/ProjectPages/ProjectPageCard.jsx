// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import { useProject } from "../../context/ProjectProvider";

// const ProjectPageCard = () => {
//   const { projects} = useProject();
//   return (
//     <div className="container-custom grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//       {projects?.map((p, i) => (
//         <motion.a
//           key={p.title}
//           href="#contact"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: i * 0.1 }}
//           className="group relative overflow-hidden rounded-2xl border border-primary transition-all duration-500"
//         >
//           <div className="aspect-4/3 overflow-hidden">
//             <img
//               src={p.img}
//               alt={p.title}
//               loading="lazy"
//               width={1024}
//               height={768}
//               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//             />
//           </div>
//           <div className="p-6">
//             <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
//               {p.tag}
//             </div>
//             <div className="flex items-start justify-between gap-4">
//               <h3 className="text-xl font-bold">{p.title}</h3>
//               <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:rotate-45 transition-all" />
//             </div>
//             <p className="text-muted-foreground text-sm mt-2">{p.desc}</p>
//           </div>
//         </motion.a>
//       ))}
//     </div>
//   );
// };

// export default ProjectPageCard;
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { useProject } from "../../context/ProjectProvider";

const ProjectPageCard = () => {
  const { projects } = useProject();

  const [visibleCount, setVisibleCount] = useState(4);

  return (
    <div>
      <div className="container-custom grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects?.slice(0, visibleCount).map((p, i) => (
          <motion.a
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-primary transition-all duration-500"
          >
            <div className="aspect-4/3 overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={768}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="p-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                {p.tag}
              </div>

              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold">{p.title}</h3>

                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:rotate-45 transition-all" />
              </div>

              <p className="text-muted-foreground text-sm mt-2">{p.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Load More Button */}
      {projects?.length > visibleCount && (
        <div className="flex items-center justify-center mt-14">
          <button
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-md bg-accent text-black font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_10px_40px_rgba(255,255,255,0.08)]"
          >
            View More Projects
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectPageCard;
