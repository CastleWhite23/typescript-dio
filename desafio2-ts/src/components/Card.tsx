import {
  Center,
  ChakraProvider,
  Input,
  Box,
} from '@chakra-ui/react'

import { BtnLogin } from './BtnLogin'
import { login } from '../services/login';


export const Card = () => {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Center>
          <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' w="400px">
            <Center>
              <h1>Faça o login</h1>
            </Center>
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Center>
              <BtnLogin event={login} textButton="Logar" />
            </Center>
          </Box>
        </Center>
      </Box>
    </ChakraProvider >
  )
}