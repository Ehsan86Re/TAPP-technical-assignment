import { NewUserType, UserType } from "@/types";

const createUser = async (data: NewUserType): Promise<UserType> => {
    try {
        const res = await fakeCallApi(data);
        return res;
    } catch(e) {
        throw new Error('Something went wrong!');
    }
};

const fakeCallApi = async (data: NewUserType): Promise<UserType> => {
    return new Promise(res => setTimeout(() => res({
            id: 12312312,
            email: data.email,
            name: data.name,
            phone: data.phone,
            username: data.username,
            website: data.website,
            company: {
                name: data.company,
            },
            address: {
                street: data.street,
                suite: data.suite,
                zipcode: data.zipcode,
                city: data.city,
            }
    }), 1000));
}

export default createUser;