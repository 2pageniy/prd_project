export interface LoginSchema {
    username: string;
    password: string;
    isLoading: boolean;
    error?: string;
}

export enum LoginErrors {
    INCORRECT_DATA = 'Wrong password or login'
}
