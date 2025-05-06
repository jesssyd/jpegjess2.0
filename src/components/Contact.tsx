import Image from "next/image";

export default function Contact() {
  return (
    <section >
      <div className="section page-container columns">
        <div className="col-start-2 col-span-4 lg:col-start-3 lg:col-span-9 2xl:col-start-2 2xl:col-span-10 flex">
          <div className="nav-links basis-7/10">
            <h2>get in touch</h2>
            <nav className="flex flex-col flex-wrap gap-3">
              <a href="https://www.instagram.com/jpegjess_/" target="_blank" rel="noopener">instagram</a>
              <a href="https://linkedin.com/in/jessicatidd" target="_blank" rel="noopener">linkedin</a>
              <a href="mailto:jessicasydtidd@gmail.com">email</a>
            </nav>
          </div>
          <div className="basis-3/10 self-center">
            <Image
              src="https://res.cloudinary.com/dgqefab9k/image/upload/v1744078956/contactImage_gqcdzw.jpg"
              alt="White Floral Clogs"
              width="500"
              height="500"
              className="object-fit"
            ></Image>
            {/* <img src={contactImage} alt="White Floral Clogs" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
