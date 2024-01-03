import { AlertDialog } from "@chakra-ui/react"

export const login = (): void => {
    const nome = prompt("Qual o seu nome? ")
    alert('Bem vindo(a) '+ nome + "!")
} 
