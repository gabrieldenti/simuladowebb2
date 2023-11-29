import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-blue-500">
      <header className="flex justify-between items-center border-b-zinc-100 py-4 px-10">
        <h1 className="text-2xl font-semibold tracking-tight">
        Bussiness Management
        </h1>
        <div className="flex items-center">
          <Link href="/login" className={cn(buttonVariants(), 'mr-2')}>Entrar</Link>
          <Link href="/registro" className={cn(buttonVariants({ variant: 'outline' }))}>Cadastrar</Link>
        </div>
      </header>

      <main className=" px-10 flex justify-center items-center h-[calc(100vh-74px)]">
        <div className="w-[50%]">
          <h1 className="text-4xl font-semibold">
            Bussiness Management
          </h1>
          <p className="text-lg  mt-2">
            Plataforma destinada a gerenciar seu negócio da melhor forma possivel.
          </p>
        </div>
      </main>
    </div>
  )
}
