import Head from 'next/head'
import Banner from '../components/banner'
import Benefit from '../components/benefit'
import Newsletter from '../components/newsletter'

import Transaction from '../components/transaction'
import { useEffect, useState } from 'react'
import { fetchHomeContent } from "../fetcher/home"

const defaultContent = {
  "bannerTitle": "Vikki làm giàu cuộc sống của bạn mỗi ngày",
  "bannerDescription": "Chúng tôi là Vikki - ngân hàng số sẽ làm giàu trải nghiệm và tương lai tài chính của bạn.",
  "registerTitle": "Đăng ký trải nghiệm ngay",
  "registerDescription": "Cuộc sống của bạn, tiền của bạn, Vikki của bạn.Đăng ký ngay để trở thành người đầu tiên trải nghiệm ứng dụng Vikki bạn nhé!\n\n",
  "benefitTitle": "Hãy để Vikki làm giàu cuộc sống của bạn mỗi ngày",
  "benefitDescription": "Chúng tôi là Vikki - ngân hàng số sẽ làm giàu trải nghiệm và tương lai tài chính của bạn",
  "benefit1": {
    "title": "Phục vụ bạn ...",
    "description": "Với giao dịch bảo mật và dịch vụ tư vấn hỗ trợ đều hoạt động không gián đoạn cả ngày lẫn đêm."
  },
  "benefit2": {
    "title": "Sống tận hưởng khi ...",
    "description": "Với các sản phẩm lãi suất cao, bạn có thể sinh lời cả trong giấc ngủ."
  },
  "benefit3": {
    "title": "Chi tiêu nhiều ...",
    "description": "Nhận hoàn tiền ngay khi thanh toán bằng thẻ của Vikki."
  },
  "need1": {
    "title": "Bảo mật",
    "description": "Sự an toàn và bảo mật của bạn luôn là ưu tiên hàng đầu"
  },
  "need2": {
    "title": "Nhanh chóng",
    "description": "Mở tài khoản trực tuyến cực nhanh, mọi lúc mọi nơi"
  },
  "need3": {
    "title": "Tận tâm",
    "description": "Tổng đài tận tâm hỗ trợ 24/7"
  }
}


export default function Home() {
  const [content, setContent] = useState(defaultContent)

  useEffect(() => {
    fetchHomeContent("1").then(res => {
      if (res?.data?.attributes) {
        setContent(res?.data?.attributes)
      }
    }).catch(() => {
      console.log("can not call cms")
    })
  }, [])

  return (
    <div>
      <Head>
        <title>Trang chủ - Vikki</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className='w-full h-[700px] bg-gradient'>
        <Banner title={content.bannerTitle} description={content.bannerDescription} />
      </div>



      <article style={{ marginTop: 400 }}>
        {/* <Company /> */}
        <Benefit benefit1={content.benefit1} benefit2={content.benefit2} benefit3={content.benefit3} />
        <Transaction need1={content.need1} need2={content.need2} need3={content.need3} />
        {/* <Pricing /> */}
        {/* <Review /> */}
        <Newsletter registerTitle={content.registerTitle} registerDescription={content.registerDescription} />
      </article>

      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  )
}
