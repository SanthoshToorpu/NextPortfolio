"use client";
import Image from "next/image";
import { Carousel } from "./ui/cardslider";
import { AnimatedTooltip } from "./ui/tooltip";

export function FollowingPointerCarousel() {
  const blogContentArray = [
    {
      slug: "hackerrank-automation",
      author: "Santhosh Toorpu",
      date: "12th July, 2023",
      title: "Hackerrank Automation",
      description:
        "Developed a program that automates hackerrank problem-solving using Puppeteer. Scraped and constructed a repository with 150+ solutions. Achieved 6-star problem-solving in Java within 12 minutes.",
      image: "https://hrcdn.net/og/default.jpg",
      authorAvatar:
        "https://cdn.pixabay.com/photo/2015/09/02/13/24/girl-919048_960_720.jpg",
      technologies: ["Javascript", "Puppeteer"],
    },
    {
      slug: "prompt-based-ai-video-generator",
      author: "Santhosh Toorpu",
      date: "5th August, 2023",
      title: "Prompt Based AI Video Generator",
      description:
        "A platform that leverages AI, cloud services, and video generation technologies to automatically create personalized explanatory videos from CSV data. Reduced creation time by 60% using Remotion.",
      image:
        "https://images.ctfassets.net/lzny33ho1g45/7HJDxovEQCwxQioENk0vmo/2962632d0dbbc415e04117e82cd091f7/image11.jpeg?w=1400",
      authorAvatar:
        "https://cdn.pixabay.com/photo/2016/03/26/22/13/man-1283235_960_720.jpg",
      technologies: ["Remotion", "Axios", "Tailwind CSS", "OPEN AI API"],
    },
    {
      slug: "ai-powered-blogging-platform",
      author: "Santhosh Toorpu",
      date: "17th September, 2023",
      title: "AI Powered Blogging Platform",
      description:
        "Reduced load times by 35% leveraging Next.js' server-side rendering. Implemented intelligent text summarization using BART model and deployed on Cloudflare workers.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Y7VU5P1eFf0pKNx7TIfPf6DbnVyqJvrcVw&s",
      authorAvatar:
        "https://cdn.pixabay.com/photo/2017/01/31/21/22/avatar-2024929_960_720.png",
      technologies: ["Next.js", "PostgreSQL", "AWS S3", "BART"],
    },
    {
      slug: "budget-friendly-pet-tracker",
      author: "Santhosh Toorpu",
      date: "22nd October, 2023",
      title: "Budget-Friendly Pet Tracker",
      description:
        "Developed a low-cost pet tracking system using ESP8266 microcontrollers for pet collars and Cloudflare Workers as serverless backend with real-time location tracking.",
      image:
        "https://justdoelectronics.com/wp-content/uploads/2023/01/Screenshot-2023-01-02-at-8.20.54-AM-e1687519565477-780x470.png",
      authorAvatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      technologies: ["ESP8266", "Cloudflare Workers", "WebSockets", "Next.js"],
    },
    {
      slug: "telugu-bert-and-next-word-prediction",
      author: "Santhosh Toorpu",
      date: "3rd November, 2023",
      title: "Telugu BERT and Next Word Prediction",
      description:
        "Achieved a 40% improvement in writing quality by fine-tuning the BERT model for Telugu. Improved next word prediction accuracy to 90%.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFQOuYMxCp619cUxNotB9t2ZZtUEIuLhnKg&s",
      authorAvatar:
        "https://cdn.pixabay.com/photo/2016/03/26/22/13/man-1283235_960_720.jpg",
      technologies: ["BERT", "React.js", "Axios", "Tailwind CSS"],
    },
    {
      slug: "environmental-noise-classification",
      author: "Santhosh Toorpu",
      date: "20th November, 2023",
      title: "Environmental Noise Classification",
      description:
        "Used Librosa to extract Mel spectrograms for 50 different noise samples and trained a CNN for classification, achieving 96.88% accuracy in 100 epochs.",
      image:
        "https://cdn.svantek.com/wp-content/themes/hello-theme-child/assets/images/product/features-bg.png",
      authorAvatar:
        "https://cdn.pixabay.com/photo/2016/11/29/03/53/silhouette-1867127_960_720.jpg",
      technologies: ["Librosa", "CNN", "Python"],
    },
    {
      slug: "maze-algorithm-visualizer",
      author: "Santhosh Toorpu",
      date: "Not provided",
      title: "Maze Algorithm Visualizer",
      description:
        "Developed a captivating Python-based algorithm visualizer, offering insight into maze-solving intricacies with dynamic visualization. Implemented the A* search algorithm, Breadth-First Search (BFS), and Depth-First Search (DFS) to navigate custom mazes.",
      image: "https://scottdlai.github.io/a-star-pathfinding/demo.png",
      authorAvatar: "https://cdn.pixabay.com/photo/2016/03/26/22/13/man-1283235_960_720.jpg",
      technologies: ["Python", "BFS", "DFS", "A* Algorithm"],
    },
    {
      slug: "food-vision-application",
      author: "Santhosh Toorpu",
      date: "Not provided",
      title: "Food Vision Application",
      description:
        "Developed a computer vision application for accurate identification and classification of food items using convolutional neural networks (CNNs). Implemented data augmentation techniques and transfer learning strategies to improve model generalization and robustness.",
      image: "https://www.portableas.com/wp-content/uploads/AdobeStock_817621300.jpg",
      authorAvatar: "https://cdn.pixabay.com/photo/2016/11/29/03/53/silhouette-1867127_960_720.jpg",
      technologies: ["PyTorch", "OpenCV", "TensorFlow", "Food-101 Dataset"],
    },
  ];

  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];

  return (
    <Carousel
      items={blogContentArray.map((blogContent, index) => (
        <div key={index} className="w-80 mx-auto">
          <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 bg-white hover:shadow-xl border border-zinc-100">
            <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
              <img
                src={blogContent.image}
                alt="thumbnail"
                className={`transform object-cover transition duration-200 h-[200px]`}
              />
            </div>
            <div className="p-4 h-[250px]">
              <h2 className="font-bold my-4 text-lg text-zinc-700">
                {blogContent.title}
              </h2>
              <h2 className="font-normal my-4 text-sm text-zinc-500">
                {blogContent.description}
              </h2>
            </div>
            <div className="flex flex-row items-left justify-left ml-4 mb-6 w-full ">
            <AnimatedTooltip items={people} />
            </div>
            <div className="flex flex-row justify-between items-center px-5 mb-5 ">
                <span className="text-sm text-gray-500">
                  {blogContent.date}
                </span>
                <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                  Read More
                </div>
              </div>
          </div>
        </div>
      ))}
    />
  );
}

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
