import { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { UserRegisterForm } from "./components/user-register-form"
import { buttonVariants } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Bussiness Management - Crie uma conta",
  description: "Login de usuário",
}

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative hidden h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-blue-500" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Bussiness Management
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
              </p>
              <footer className="text-sm"></footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Cadastre-se
              </h1>
              <p className="text-sm text-muted-foreground">
                Digite seu e-mail e senha para fazer o seu cadastro.
              </p>
            </div>
            <UserRegisterForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              Ao clicar em continuar, você concorda com nossos{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                termos de uso
              </Link>{" "}
              e{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                política de privacidade
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
