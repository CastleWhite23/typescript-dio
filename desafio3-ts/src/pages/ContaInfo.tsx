import { Text } from "@chakra-ui/react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { getAllLocalStorage } from "../services/storage"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../components/AppContext"

const ContaInfo = () => {
    const navigate = useNavigate()
    const { isLoggedIn }  = useContext(AppContext)
    !isLoggedIn && navigate("/")

    const [ nome, setNome] = useState<string>("")
    const [ email, setEmail] = useState<string>("")
  
    
    const storage = getAllLocalStorage()


    useEffect(() => {
        if (storage) {
            const { name, email } = JSON.parse(storage)

                setNome(name)
                setEmail(email)

        }
    }, [])


    return (
        <>
            <Text fontSize='3xl' fontWeight='bold'>
                Informações da conta
            </Text>
            <Link to='/conta/1'>
                <Text fontSize='xl'>
                    Conta
                </Text>
            </Link>
            <Text fontSize='2xl' fontWeight='bold'>
                Dados de usuário:
            </Text>
            <Text fontSize='xl'>
                {`Nome: ${nome}`}
            </Text>
            <Text fontSize='xl'>
                {`Email: ${email}`}
            </Text>
        </>
    )
}

export default ContaInfo
