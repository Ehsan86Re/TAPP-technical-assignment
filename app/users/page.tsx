import fetchUsersList from "@/actions/fetchUsersList"
import User from "@/components/user/User";
import { UserType } from "@/types";

export default async function Users() {
    const list: UserType[] = await fetchUsersList();

    return (
        <ul>
            {list.map((user: UserType) => {
                return <li key={`${user.id}-${user.name}`}>
                    <User user={user}/>
                </li>
            })}
        </ul>
    )
}
