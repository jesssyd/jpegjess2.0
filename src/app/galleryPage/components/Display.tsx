import Image from "next/image";

export default function Display() {
  return (
    <section className="gallery-page">
      <div className="md:my-12 my-8 page-container columns">
        <div
          id="row1"
          className="col-span-full grid grid-cols-2 sm:flex sm:flex-nowrap gap-6 mb-6"
        >
          <div className="col-span-full flex justify-center sm:w-full">
            <Image
              src="/gallery/grid1/1.jpg"
              alt="sample"
              width={500}
              height={500}
              className="object-contain col-span-full sm:w-full"
            />
          </div>

          <Image
            src="/gallery/grid1/2.jpg"
            alt="sample"
            width={500}
            height={500}
            className="object-contain col-span-1 sm:w-full"
          />
          <Image
            src="/gallery/grid1/3.jpg"
            alt="sample"
            width={500}
            height={500}
            className="object-contain col-span-1 sm:w-full"
          />
          <div className="col-span-full flex justify-center sm:w-full">
            <Image
              src="/gallery/grid1/4.jpg"
              alt="sample"
              width={500}
              height={500}
              className="object-contain col-span-full sm:w-full"
            />
          </div>
        </div>
        <div
          id="row2"
          className="col-span-full flex gap-6 flex-wrap sm:flex-nowrap"
        >
          <Image
            src="/gallery/grid1/5.jpg"
            alt="sample"
            width={500}
            height={500}
            className="w-full object-contain"
          ></Image>
          <div className="flex gap-6 mb-6">
            <Image
              src="/gallery/grid1/6.jpg"
              alt="sample"
              width={500}
              height={500}
              className="w-full object-contain"
            ></Image>
            <Image
              src="/gallery/grid1/7.jpg"
              alt="sample"
              width={500}
              height={500}
              className="w-full object-contain"
            ></Image>
          </div>
        </div>
        <div
          id="row3"
          className="col-span-full flex gap-6 mb-6 flex-wrap sm:flex-nowrap"
        >
          <div className="col-span-full flex justify-center sm:w-full">
            <Image
              src="/gallery/grid1/8.jpg"
              alt="sample"
              width={500}
              height={500}
              className="w-1/2 sm:w-full object-contain"
            ></Image>
          </div>

          <div className="flex gap-6 mb-6">
            <Image
              src="/gallery/grid1/9.jpg"
              alt="sample"
              width={500}
              height={500}
              className="w-full object-contain"
            ></Image>
            <Image
              src="/gallery/grid1/10.jpg"
              alt="sample"
              width={500}
              height={500}
              className="w-full object-contain"
            ></Image>
          </div>
          <div className="col-span-full flex justify-center sm:w-full">
            <Image
              src="/gallery/grid1/11.jpg"
              alt="sample"
              width={500}
              height={500}
              className="w-1/2 sm:w-full object-contain"
            ></Image>
          </div>
        </div>
        <div
          id="row-4"
          className="flex col-span-full gap-6 mb-6 flex-wrap sm:flex-nowrap"
        >
          <Image
            src="/gallery/grid1/12.jpg"
            alt="sample"
            width={500}
            height={500}
            className="w-full object-contain"
          ></Image>
          <Image
            src="/gallery/grid1/13.jpg"
            alt="sample"
            width={500}
            height={500}
            className="w-full object-contain"
          ></Image>
        </div>

        <div
          id="row-5"
          className="col-span-full flex flex-wrap sm:flex-nowrap justify-center gap-6 mb-6 items-center"
        >
          <Image
            src="/gallery/grid2/1.jpg"
            alt="sample"
            width={500}
            height={500}
            className="max-w-3/7"
          ></Image>
          <Image
            src="/gallery/grid2/2.jpg"
            alt="sample"
            width={500}
            height={500}
            className="max-w-3/7"
          ></Image>
        </div>
        <div
          id="row-6"
          className="col-span-full grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6 items-center"
        >
          <Image
            src="/gallery/grid3/1.jpg"
            alt="sample"
            width={500}
            height={500}
            className=""
          ></Image>
          <Image
            src="/gallery/grid3/2.jpg"
            alt="sample"
            width={500}
            height={500}
            className=""
          ></Image>
          <Image
            src="/gallery/grid3/3.jpg"
            alt="sample"
            width={500}
            height={500}
            className=""
          ></Image>
          <Image
            src="/gallery/grid3/4.jpg"
            alt="sample"
            width={500}
            height={500}
            className=""
          ></Image>
        </div>
        <div
          id="grid4"
          className="col-span-full flex flex-wrap sm:columns-3 gap-6 mb-6 items-center justify-center"
        > 
          <div className="flex flex-wrap sm:flex-col gap-6">
            <Image
              src="/gallery/grid4/1.jpg"
              alt="sample"
              width={500}
              height={500}
              className="w-full"
            ></Image>
            <Image
              src="/gallery/grid4/4.jpg"
              alt="sample"
              width={500}
              height={500}
              className="w-full"
            ></Image>
          </div>
          <Image
            src="/gallery/grid4/2.jpg"
            alt="sample"
            width={500}
            height={500}
            className="max-w-3/7 w-full"
          ></Image>
          <Image
            src="/gallery/grid4/3.jpg"
            alt="sample"
            width={500}
            height={500}
            className="max-w-3/7 w-full"
          ></Image>
        </div>
      </div>
    </section>
  );
}
