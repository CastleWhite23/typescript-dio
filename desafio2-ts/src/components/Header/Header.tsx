import './Header.css'
import {
  ChakraProvider
} from '@chakra-ui/react'

export const Header = () => {
  return (
    <ChakraProvider>
      <div className='header'>
       <div className="logo">
        Dio Bank
       </div>
      </div>
    </ChakraProvider>
  )
}

