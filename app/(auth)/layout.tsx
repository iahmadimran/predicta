import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
  const stars = [1, 2, 3, 4, 5]

  return (
    <main className="font-inter-app auth-layout">
      <section className="auth-left-section scrollbar-hide-default">
        <Link href="/">
          <Image src="/assets/icons/mainlogo.png" alt="Predicta Logo" width={170} height={10} className="h-12 my-4 cursor-pointer" />
        </Link>

        <div className="pb-6 lg:pb-8 flex-1">
          {children}
        </div>
      </section>

      <section className="auth-right-section">
        <div className="z-10 relative lg:mt-4 lg:mb-12">
          <blockquote className="auth-blockquote">
            Predicta turned my dummy watchlist into a potential winning list. The alerts are super useful, spot-on, and I feel more confident making moves in the market
          </blockquote>
          <div className="flex justify-between items-center">
            <div>
              <cite className="auth-testimonial-author">
                - Ahmed M.
              </cite>
              <p className="max-md:text-xs text-gray-500">Retail Investor</p>
            </div>
            <div className="flex items-center gap-0.5">
              {stars.map((star) => (
                <Image src={'/assets/icons/star.svg'} alt="star" key={star} width={20} height={20} className="w-5 h-5" />
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <Image src={'/assets/images/dashboard-2.png'} alt="dashboard preview" width={1440} height={1150} className="auth-dashboard-preview absolute top-0" />
        </div>
      </section>
    </main>
  )
}

export default Layout
