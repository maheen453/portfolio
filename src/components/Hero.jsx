import { HERO } from "../constants"
import profile from "../assets/profile.jpg"


const Hero = () => {
    return (
        <section id="home" className="flex md:min-h-screen flex-wrap items-center md:mt-1">
            <div className="w-full md:w-1/2 md:border-l-8 border-b-4 md:border-b-0 border-white md:pl-5 text-center md:text-left">
                <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
                    {HERO.name}
                </h2>
                <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
                    {HERO.greet}
                </p>
                <p className="pl-2 py-7 text-3xl tracking-tighter md:text-4xl">
                    {HERO.description}
                </p>
            </div>
            <div className=" max-w-full md:w-1/2 lg:p-8 ">
                <div className="flex relative justify-center items-center flex-col">
                    <img
                    src={profile}
                    className="imgBorder rounded-full z-30 "
                    alt="maheen"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero