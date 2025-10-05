import Header from "@/components/Header"
import { auth } from "@/lib/better-auth/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await (await auth).api.getSession({
    headers: await headers()
  })

  if (!session?.user) redirect('/sign-in')
  const { name, email, id } = session.user

  const user = {
    id,
    name,
    email
  }
  
  return (

    <main className="min-h-screen font-inter-app text-gray-400">
      <Header user={user} />
      <div className="container py-10">
        {children}
      </div>
    </main>
  )
}

export default Layout
