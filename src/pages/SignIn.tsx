import { useActionState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function SignIn() {
    const [state, formAction, isLoading] = useActionState(signIn,null)

    function signIn(prevState: any, formData: FormData) {
        const email = formData.get("email")
        const password = formData.get("password")

        console.log(email, password)
        return {email, password}
    }

    return(
        <form action={formAction} className="w-full flex flex-col gap-4">
            <Input 
                name="email"
                required
                legend="E-mail" 
                type="email"
                placeholder="seu@email.com"
                defaultValue={String(state?.email)}
            />

             <Input 
                name="password"
                required
                legend="Senha" 
                type="password"
                placeholder="123456"
                defaultValue={String(state?.password)}
            />

            <Button type="submit" isLoading={isLoading}>Entrar</Button>

            <a 
                href="/signup" 
                className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">
                Criar Conta
            </a>
        </form>
    )
     
}