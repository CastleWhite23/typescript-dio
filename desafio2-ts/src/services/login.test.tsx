import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    const mockPrompt = jest.fn();
    window.prompt = mockPrompt;


    it('Deve exibir um alert com boas vindas', () => {
        
        //faz com que o promp do window.prompt receba um valor
        mockPrompt.mockReturnValueOnce("Pedro")

        login()
        
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo(a) Pedro!')
    })
})