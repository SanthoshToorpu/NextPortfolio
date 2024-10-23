import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-white  border-neutral-200 dark:border-neutral-800 px-4 py-32 flex justify-center ">
      <Compare
        firstVideo="/Snaptri2.mp4"
        secondVideo="/Before2.mp4"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[100vh] md:w-[75vw]"
        slideMode="hover"
        autoplay
      />
    </div>
  );
}
