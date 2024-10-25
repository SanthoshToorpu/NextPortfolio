"use client";
import React, { useEffect, useState } from "react";
import { SkillsCards } from "./skills-cards";

export function SkillsDemo() {
  return (
    <div className="mt-5 mb-12 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <SkillsCards
        items={developmentSkills}
        direction="right"
        speed="normal"
      />
      <SkillsCards 
      items={machineLearningSkills}
      direction="left"
      speed="normal"
      />
    </div>
  );
}

const developmentSkills = [
  { title: "C/C++", icon: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
  { title: "Python", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
  { title: "Java", icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
  { title: "JavaScript/TypeScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
  { title: "HTML/CSS", icon: "https://cdn-icons-png.flaticon.com/512/919/919827.png" },
  
  // Tools
  { title: "Git/GitHub", icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png" },
  { title: "Docker", icon: "https://cdn-icons-png.flaticon.com/512/919/919853.png" },
  { title: "Jupyter Notebooks", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968571.png" },
  { title: "VS Code", icon: "https://cdn-icons-png.flaticon.com/512/906/906324.png" },
  { title: "IntelliJ / PyCharm / IDEA", icon: "https://cdn-icons-png.flaticon.com/512/1171/1171666.png" },
  
  // Frameworks
  { title: "Next.js", icon: "https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png" },
  { title: "React", icon: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
  { title: "Node.js", icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
  { title: "Flask", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png" },
  { title: "Tailwind CSS", icon: "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png" },
  { title: "Material-UI", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968585.png" },
  { title: "RapidAPI", icon: "https://rapidapi.com/static-assets/images/icons/rapidapi-logo.svg" },
  
  // Databases
  { title: "SQL", icon: "https://cdn-icons-png.flaticon.com/512/1199/1199120.png" },
  { title: "MySQL", icon: "https://cdn-icons-png.flaticon.com/512/919/919836.png" },
  { title: "MongoDB", icon: "https://cdn-icons-png.flaticon.com/512/919/919836.png" },
  { title: "PostgresSQL", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png" },
  { title: "Prisma (ORM)", icon: "https://avatars.githubusercontent.com/u/17219288?s=200&v=4" },
];

const machineLearningSkills = [
  { title: "Python", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
  
  // Libraries and Frameworks
  { title: "Huggingface", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
  { title: "Langchainjs", icon: "https://langchain.com/assets/favicon.svg" },
  { title: "Redux", icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
  { title: "pandas", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968356.png" },
  { title: "PyTorch", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968323.png" },
  { title: "TensorFlow", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968570.png" },
  { title: "NumPy", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968554.png" },
  { title: "Matplotlib", icon: "https://matplotlib.org/_static/images/logos/matplotlib.svg" },
  
  // Databases (if applicable for ML models
];
