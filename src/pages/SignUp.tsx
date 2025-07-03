import { useState } from "react";
import { z, ZodError} from "zod";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";
import { api } from "../services/api";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

const signUpSchema = z.object({
    name: z.string().trim().min(1, {message: 'Informe o nome'}),
    email: z.string().email({message: 'Informe um e-mail válido'}),
    password: z.string().min(6, {message: 'Senha deve ter pelo menos 6 dígitos'}),
    confirmPassword: z.string({message: 'Confirme da senha'})
}).refine(data => data.password === data.confirmPassword, {
    message: 'Senhas não conferem',
    path: ['confirmPassword'],
})

export function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    async function onSubmit(e: React.FormEvent){
        e.preventDefault()
        
        try {
            setIsLoading(true)

            const data = signUpSchema.parse({
                name, 
                email, 
                password, 
                confirmPassword,
            })

            await api.post('/users', data)

            if(confirm("Cadastrado com sucesso! Deseja fazer login?")){
                navigate('/')
            }
            
        } catch (error) {
            if(error instanceof ZodError){
                return alert(error.issues[0].message)
            }

            if(error instanceof AxiosError){
                return alert(error.response?.data.message)
            }

            alert('Não foi possível cadastrar o usuário')
        }finally{
            setIsLoading(false)
        }
    }

    return(
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
            <Input 
                required
                legend="Nome" 
                placeholder="Seu nome"
                onChange={e => setName(e.target.value)}
            />

            <Input 
                required
                legend="E-mail" 
                type="email"
                placeholder="seu@email.com"
                onChange={e => setEmail(e.target.value)}
            />

            <Input 
                required
                legend="Senha" 
                type="password"
                placeholder="123456"
                onChange={e => setPassword(e.target.value)}
            />

            <Input 
                required
                legend="Confirme a Senha" 
                type="password"
                placeholder="123456"
                onChange={e => setConfirmPassword(e.target.value)}
            />

            <Button type="submit" isLoading={isLoading}>Cadastrar</Button>

            <a 
                href="/" 
                className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">
                Já tenho uma conta
            </a>
        </form>
    )
     
}