import { UserType } from "@/types";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

const fetchUsersList = async (): Promise<UserType[]> => {
    try {
        let res = await fetch(`${BASE_URL}/users`);

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(`HTTP error! Status: ${res.status}, Message: ${errorData.message || 'Unknown error'}`);
        }

        let list = await res.json();
        return list;

    } catch(error) {
        throw new Error('Something went wrong!');
    }
};

const fetchUser = async (id: number): Promise<UserType> => {
    try {
        let res = await fetch(`${BASE_URL}/users/${id}`);

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(`HTTP error! Status: ${res.status}, Message: ${errorData.message || 'Unknown error'}`);
        }

        let user: UserType = await res.json();
        return user;

    } catch(error) {
        throw new Error('Something went wrong!');
    }
}

export { fetchUsersList, fetchUser };