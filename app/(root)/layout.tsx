import Header from "@/components/Header"
import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
  const user = {
    id: '1',
    name: "Ahmad",
    email: "ahmadimran67208@gmail.com",
  }
  return (

    <main className="min-h-screen text-gray-400">
      <Header user={user} />
      <div className="container py-10">
        {children}
      </div>
    </main>
  )
}

export default Layout
