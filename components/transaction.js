import { CheckIcon } from '@heroicons/react/solid'
import { useEffect, useMemo } from 'react'
import AnimScroll from "./animScroll"

function Transaction({ need1, need2, need3 }) {
    const data = useMemo(() => {
        return [{
            id: 1,
            title: need1.title,
            description: need1.description
        },
        {
            id: 2,
            title: need2.title,
            description: need2.description
        },
        {
            id: 3,
            title: need3.title,
            description: need3.description
        }]
    }, [need1, need2, need3])


    useEffect(() => {
        AnimScroll(".title2", 100, ".title2")
        AnimScroll("#list-0", 50, ".play-1")
        AnimScroll("#list-1", 50, ".play-2")
        AnimScroll("#list-2", 50, ".play-3")
        AnimScroll("#phone", 300, "#phone")
    }, [])

    return (
        <div className="w-full xl:w-container px-0 md:px-32 lg:px-12 xl:px-0 mx-auto overflow-hidden text-white flex flex-wrap lg:flex-nowrap justify-center xl:justify-between items-center gap-24">
            <div className="w-full lg:w-11/12">
                <h2 className="title2 text-3xl md:text-4xl text-center lg:text-left font-semibold leading-tight md:leading-relaxed mb-16">
                    Bạn cần gì đó? <span className='text-purple-500'>Luôn có Vikki</span>
                </h2>
                {
                    data.map((content, i) => {
                        return (
                            <div id={"list-" + i} className='flex items-start gap-5 mt-8 mx-8 lg:mx-0' key={i}>
                                <CheckIcon className='w-8 bg-purple-500 text-white rounded-full p-2' />
                                <div className="">
                                    <p className="text-xl font-medium">{content.title}</p>
                                    <p className="mt-2 text-base leading-loose text-slate-400 group-hover:text-white">
                                        {content.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }

                <div className='last'></div>
            </div>
            <div className="flex items-center gap-8 mx-10 xl:mx-0 xl:pr-20">
                <img id="phone" src="/phone.png" />
            </div>
        </div>
    )
}

export default Transaction
