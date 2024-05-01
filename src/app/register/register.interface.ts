export interface IRegisterUser {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    email: string;
    age: number;
    address: {
        city: string;
        street: string;
    };
}