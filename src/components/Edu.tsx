import Image from "next/image";

export default function Edu() {
  return (
    <section id="education">
      <div className="section page-container lg:gap-6 md:gap-4 gap-2 grid grid-cols-12">
        <div className="col-span-4">
          <Image
            src="https://res.cloudinary.com/dgqefab9k/image/upload/v1744078957/eduImage_bcrowu.jpg"
            alt="Red Staircase"
            width="500"
            height="500"
            className="object-fit"
          ></Image>
          {/* <img src={eduImage} alt="" /> */}
        </div>
        <div className="col-span-8 flex flex-col flex-wrap justify-end">
          <h2>education</h2>
          <div className="lg:grid grid-cols-2 lg:gap-6 lg:items-end flex flex-col flex-wrap justify-end gap-3">
            <div>
              <p>Bachelor of Business Administration</p>
              <p className="caption">Wilfrid Laurier University | 2027</p>
            </div>
            <div>
              <p>Bachelor of Science, Computer Science</p>
              <p className="caption">Wilfrid Laurier University | 2027</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
