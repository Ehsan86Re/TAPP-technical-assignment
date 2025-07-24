const fetchUsersList = async () => {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");

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

export default fetchUsersList;