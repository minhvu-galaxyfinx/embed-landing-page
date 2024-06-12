import { ClockIcon, GiftIcon, TrendingUpIcon } from '@heroicons/react/outline'
import { useEffect, useMemo } from 'react'
import AnimScroll from "./animScroll"

function Benefit({ benefit1, benefit2, benefit3 }) {
    const data = useMemo(() => {
        return [
            {
                id: 1,
                icon: <ClockIcon className="w-16 bg-gradient rounded-lg p-4" />,
                title: benefit1.title || "",
                description: benefit1.description || ""
            },
            {
                id: 2,
                icon: <TrendingUpIcon className="w-16 bg-gradient rounded-lg p-4" />,
                title: benefit2.title || "",
                description: benefit2.description || ""
            },
            {
                id: 3,
                icon: <GiftIcon className="w-16 bg-gradient rounded-lg p-4" />,
                title: benefit3.title || "",
                description: benefit3.description || ""
            }
        ]
    }, [benefit1, benefit2, benefit3])

    useEffect(() => {
        AnimScroll(".title", 100, ".title")
        AnimScroll("#card-0", 100, ".content")
        AnimScroll("#card-1", 150, ".content")
        AnimScroll("#card-2", 200, ".content")
    }, [])

    return (
        <div className="xl:w-container mx-auto my-24 md:my-40 text-white">
            <div className="title x-full md:w-7/12 mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold leading-relaxed">Hãy để Vikki làm giàu cuộc sống của bạn mỗi ngày
                </h2>
                <p className="mt-2 w-3/4 mx-auto text-slate-400 text-base">Chúng tôi là Vikki - ngân hàng số sẽ làm giàu
                    trải nghiệm và tương lai tài chính của bạn</p>
            </div>
            <div className="card-list mt-16 text-center md:text-left flex flex-wrap justify-center gap-10">
                {
                    data.map((content, i) => {
                        return (
                            <div id={"card-" + i} className="group hover:bg-midBlue rounded-2xl hover:rounded-2xl transition duration-200 ease-out p-8 w-[360px]" key={i}>
                                <span className='flex justify-center md:justify-start'>{content.icon}</span>
                                <h3 className="mt-8 text-2xl font-medium">{content.title}</h3>
                                <p className="content  my-4 text-sm leading-loose text-slate-400 group-hover:text-white">{content.description}</p>
                                <a className='font-medium underline' href="#">Tìm hiểu thêm</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Benefit
