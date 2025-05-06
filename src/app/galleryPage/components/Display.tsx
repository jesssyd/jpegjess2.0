import Image from "next/image";

export default function Display() {
  return (
    <section className="gallery-page">
      <div className="md:my-12 my-8 page-container columns">
        <div id="grid1" className="col-span-full grid grid-cols-4 gap-6 mb-6 items-center">
         <Image src="/gallery/grid1/1.jpg" alt="sample" width={500} height={500} className="w-full drop-shadow-2xl"></Image>
         <Image src="/gallery/grid1/2.jpg" alt="sample" width={500} height={500} className="w-full"></Image>
         <Image src="/gallery/grid1/3.jpg" alt="sample" width={500} height={500} className="w-full"></Image>
         <Image src="/gallery/grid1/4.jpg" alt="sample" width={500} height={500} className="w-full"></Image>
         <Image src="/gallery/grid1/5.jpg" alt="sample" width={500} height={500} className="col-span-2 w-full"></Image>
         <Image src="/gallery/grid1/6.jpg" alt="sample" width={500} height={500} className="w-full"></Image>
         <Image src="/gallery/grid1/7.jpg" alt="sample" width={500} height={500} className="w-full"></Image>
         <Image src="/gallery/grid1/8.jpg" alt="sample" width={500} height={500} className="w-full"></Image>
         <Image src="/gallery/grid1/9.jpg" alt="sample" width={500} height={500} className="w-full"></Image>
         <Image src="/gallery/grid1/10.jpg" alt="sample" width={500} height={500} className="w-full"></Image>
         <Image src="/gallery/grid1/11.jpg" alt="sample" width={500} height={500} className="w-full"></Image>
         <Image src="/gallery/grid1/12.jpg" alt="sample" width={500} height={500} className="col-span-2 "></Image>
         <Image src="/gallery/grid1/13.jpg" alt="sample" width={500} height={500} className="col-span-2"></Image>

        </div>
       <div id="grid2" className="col-span-full flex justify-center gap-6 mb-6 items-center">
        <Image src="/gallery/grid2/1.jpg" alt="sample" width={500} height={500} className=" max-w-1/3"></Image>
        <Image src="/gallery/grid2/2.jpg" alt="sample" width={500} height={500} className="max-w-1/3"></Image>
       </div>
       <div id="grid3" className="col-span-full grid grid-cols-4 gap-6 mb-6 items-center">
        <Image src="/gallery/grid3/1.jpg" alt="sample" width={500} height={500} className=""></Image>
        <Image src="/gallery/grid3/2.jpg" alt="sample" width={500} height={500} className=""></Image>
        <Image src="/gallery/grid3/3.jpg" alt="sample" width={500} height={500} className=""></Image>
        <Image src="/gallery/grid3/4.jpg" alt="sample" width={500} height={500} className=""></Image>
       </div>
       <div id="grid4" className="col-span-full columns-3 gap-6 mb-6 items-center">
        <div className="flex flex-col gap-6">
            <Image src="/gallery/grid4/1.jpg" alt="sample" width={500} height={500} className="w-full"></Image>
            <Image src="/gallery/grid4/4.jpg" alt="sample" width={500} height={500} className="w-full"></Image>
        </div>
        <Image src="/gallery/grid4/2.jpg" alt="sample" width={500} height={500} className="w-full"></Image>
        <Image src="/gallery/grid4/3.jpg" alt="sample" width={500} height={500} className="w-full"></Image>
       </div>
      </div>
    </section>
  );
}
