import { Poppins } from "next/font/google"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";
const font = Poppins( {
  subsets: ["latin"],
  weight:["600"]
})

export default function Home() {
  return (
    <main className="flex h-full flex-col
    items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
    from-gray-600 to-gray-800">
      <div className="space-y-6 text-center" ></div>
        <h1 className={cn("text-6xl font-semibold text-black drop-shadow-md", font.className,)}>
          Auth
        </h1>
        <p className="text-white text-lg">
          A simple authentication service
        </p>
        <div>
          <LoginButton>
          <Button variant="secondary" size="lg">
            Sign In
          </Button>
        </LoginButton>
        </div>
    </main>
  )
}
