import { useEffect } from 'react'
import AnimScroll from "./animScroll"

function Banner({ title = "", description = "" }) {

    useEffect(() => {
        AnimScroll(".anim-1", 150, ".anim-1")
        AnimScroll(".anim-2", 200, ".anim-1")
        AnimScroll(".anim-3", 250, ".anim-1")
    }, [])

    return (
        <div className="w-full xl:w-container px-8 lg:px-20 xl:px-0 mx-auto text-white text-center">
            <div className="w-full lg:w-4/6 mx-auto pt-[120px] md:pt-[60px]">
                <h1 className="anim-1 text-4xl md:text-5xl font-bold leading-tight md:leading-tight">
                    {title}
                </h1>
                <p className="anim-2 mt-5 text-base md:text-lg leading-normal md:leading-relaxed">
                    {description}
                </p>
            </div>
            <img className="anim-3 mt-[200px] absolute left-0 right-0 md:relative md:mt-20 shadow-2xl" src="/banner.jpeg" alt="software dashboard" style={{aspectRatio: "2 / 1"}}/>
        </div>
    )
}

export default Banner
