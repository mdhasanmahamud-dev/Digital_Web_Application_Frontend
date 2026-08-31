import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
const FeaturedCard = ({ projects }) => {
  console.log(projects);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects?.map((p, i) => (
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
  );
};

export default FeaturedCard;
