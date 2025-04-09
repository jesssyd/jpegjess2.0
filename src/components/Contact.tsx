import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact">
      <div className="section page-container columns">
        <div className="col-start-2 col-span-4 lg:col-start-2 lg:col-span-10 flex">
          <div className="basis-7/10">
            <h2>get in touch</h2>
            <nav className="flex flex-col flex-wrap gap-3">
              <a href="https://www.instagram.com/jpegjess_/">instagram</a>
              <a href="www.linkedin.com/in/jessicatidd">linkedin</a>
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
