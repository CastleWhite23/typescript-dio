interface IDIoBank {
    login: boolean;
    name: string | null;
    email: string | null;
}

const dioBank = {
    login: false,
    name: 'Nathaly Souza',
    email: 'nath@dio.bank'
}

export const getAllLocalStorage = (): string | null  => {
    return localStorage.getItem('diobank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const changeLocalStorage = (dioBank: IDIoBank): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}
