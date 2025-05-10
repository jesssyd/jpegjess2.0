import { Project } from "@/app/projectsPage/projects/projects";
import Carousel from "@/components/Carousel";
import Image from "next/image";

export default function Card({
  image,
  title,
  description,
  date,
  link,
}: Project) {
  return (
    <div className="flex flex-col justify-start sm:grid grid-cols-12 sm:gap-6 gap-3 mb-10">
      
      <a href={link} aria-label={title} className="sm:col-span-6">
        <Image
          height={500}
          width={500}
          src={image}
          alt={title}
          className="w-full"
        />
      </a>

      <div className="sm:col-span-6">
       
            <a href={link}>
          <h2 className="md:mb-3 mb:1">{title}</h2>
        </a>
        <p className="caption">{date}</p>
        
        
        <p>{description}</p>
      </div>
    </div>
  );
}
