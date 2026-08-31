import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ReactLoaderSpiner from "../../components/ReactLoaderSpiner";
import FeaturedCard from "./FeaturedCard";
const FeaturedCards = ({projects, featuredLoading}) => {
  if(featuredLoading) return <ReactLoaderSpiner/>
  return (
    <div>
      <div className="container-custom">
        <FeaturedCard projects={projects}/>
      </div>
    </div>
  );
};

export default FeaturedCards;
