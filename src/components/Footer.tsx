import Link from "next/link";

export default function Footer(){
    return(
        <footer className="lg:mx-32 md:mx-10 mx-5 flex flex-col items-center lg:mb-8 md:mb-6 mb-4">
            <div className="nav-links flex gap-3 lg:mb-6 md:mb-4 mb-3">
                <Link href="/">home</Link>
                <Link href="/">contact</Link>
                <Link href="/galleryPage">gallery</Link>
                <Link href="/projectsPage">projects</Link>
                <Link href="">instagram</Link>
                <Link href="">linkedin</Link>

            </div>
            <div className="">
                <p className="caption">&copy; Jessica Tidd {new Date().getFullYear()}</p>
            </div>
            
        </footer>
    );
}
