import UserListByManger from ".";

import { useRouter } from "next/router";
export default function userId() {
    const router = useRouter()
    const { userId } = router.query
    if (!userId) {
        return <div>ID not found.</div>;
    }
    return (
        <div>
            <UserListByManger />
        </div>
    )
}
