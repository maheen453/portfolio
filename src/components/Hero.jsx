import { HERO } from "../constants"
import carlImg from "../assets/carl.jpeg"

const Hero = () => {
    return (
        <section className="flex md:min-h-screen flex-wrap items-center md:mt-1">
            <div className="w-full md:w-1/2">
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
            <div className="max-w-full md:w-1/2 lg:p-8">
                <div className="flex relative justify-center items-center flex-col">
                    <img src={carlImg} width={550} height={550} alt="Maheen Qayyum" className="rounded-3xl" />
                </div>
            </div>
        </section>
    )
}

export default Hero