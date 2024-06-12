import { MailIcon, UserIcon, PhoneIcon } from "@heroicons/react/outline"

function Newsletter({ registerTitle, registerDescription }) {
    const descriptionLines = registerDescription.split(".") || ["Đăng ký ngay để trở thành người đầu tiên trải nghiệm ứng dụng Vikki bạn nhé!"];

    return (
        <div className="bg-gradient w-full p-8 text-white text-center flex justify-center items-center pb-[200px]">
            <div className="">
                <h2 className="text-3xl md:text-4xl font-semibold leading-relaxed">{registerTitle}</h2>
                {descriptionLines.map((item, index) => (
                    <p className="mt-2 text-slate-200 text-base" key={index}>{item}</p>
                )
                )}
                <div className="lg:w-email mx-auto mt-8 h-full space-y-8">
                    <div className="bg-white rounded-xl p-4 flex items-center">
                        <label htmlFor="mail">
                            <UserIcon className="w-6 text-gray-500 mr-2" />
                        </label>
                        <input id="mail" className="text-gray-500 outline-none text-sm placeholder-slate-500 h-full w-64 font-medium" type="text" placeholder="Họ tên" />
                    </div>
                    <div className="bg-white rounded-xl p-4 flex items-center">
                        <label htmlFor="mail">
                            <MailIcon className="w-6 text-gray-500 mr-2" />
                        </label>
                        <input id="mail" className="text-gray-500 outline-none text-sm placeholder-slate-500 h-full w-64 font-medium" type="text" placeholder="Email" />
                    </div>
                    <div className="bg-white rounded-xl p-4 flex items-center">
                        <label htmlFor="mail">
                            <PhoneIcon className="w-6 text-gray-500 mr-2" />
                        </label>
                        <input id="mail" className="text-gray-500 outline-none text-sm placeholder-slate-500 h-full w-64 font-medium" type="text" placeholder="Số điện thoại" />
                    </div>
                    <button className="bg-purple-500 text-white font-medium rounded-xl px-6 transition duration-200 h-14 mr-1 text-sm hover:bg-btnDark">Đăng kí ngay</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
