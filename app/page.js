import BannerSlider from "./components/BannerSlider/BannerSlider"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div>
        <BannerSlider/>
        <div className="container mt-[100px] mx-auto p-4">
          <section>
            <div className="flex flex-wrap lg:flex-nowrap items-start lg:items-center gap-2">
              <div className="w-[100px] flex-shrink-0 lg:w-2/5 mx-auto mb-[-50px] lg:mb-0 z-10 lg:z-0">
                <Image width={456} height={446} src="/images/Asad-Ali.jpg" className="w-full h-auto rounded-full lg:rounded-xl" />
              </div>
              <div className="w-full lg:w-3/5 z-0 lg:z-10">
                <div className="p-4 pt-[50px] lg:p-8 rounded-lg shadow-lg bg-primary-100 lg:ml-[-50px] bg-no-repeat bg-contain" style={{backgroundImage:"url('/images/bg-quotation.webp')"}}>
                  <h3 className="text-xl lg:text-4xl text-primary-600 mb-2 capitalize font-playfairDisplay">A message from the founder</h3>
                  <p className="mb-5 text-sm lg:text-base">
                    Quran was revealed by Allah (Jalle Shaanahu) upon Muhammad SAAWAW, the Last Messenger of Allah for the betterment <span className="italic">(Falah)</span> of mankind about 1444 years ago. Since then, the exponents of Quran and Authorities over its knowledge have been striving hard to unfold its intricacies. The Muslims strongly believe that this Holy Book is sufficient to tackle all issues of every age. So, they recite it not only in their routine prayers but on every event of death and birth as Allah says in the Quran that its recitation is useful for treatment of spiritual and bodily ailments and is source of righteousness<br/>(Al-Quran:10:57, 17:82 & 41:44).</p>
                  <Link href="/about" className="px-4 py-2 rounded-full text-white text-sm lg:text-base bg-primary-600 hover:bg-primary-500">Read full message</Link>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}
