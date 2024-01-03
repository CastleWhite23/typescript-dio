import { 
    ChakraProvider,
    Button
  } from '@chakra-ui/react'
  


interface ICard {
    textButton: string,
    event: ()=>void
}


export const BtnLogin = ( { textButton, event } : ICard)  => {
    return(
        <ChakraProvider>
            <Button onClick={event}  colorScheme='teal' size='sm' width='100%' marginTop='5px'>
              {textButton}
            </Button>
        </ChakraProvider>
    )
}