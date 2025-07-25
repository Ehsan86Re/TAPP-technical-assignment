export type UserType = {
    id: number;
    email: string;
    name: string;
    phone: string;
    username: string;
    website?: string;
    company?: {
        bs?: string;
        catchPrase?: string;
        name?: string;
    },
    address: {
        street: string;
        suite?: string;
        zipcode: string;
        city: string;
        geo?: {
            lat: string;
            lng: string;
        }
    }
}

export type NewUserType = {
    email: string;
    name: string;
    phone: string;
    username: string;
    website?: string;
    company?: string;
    street: string;
    suite?: string;
    zipcode: string;
    city: string;
}
