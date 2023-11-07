import { useEffect } from 'react';
import ViewTasks from '.'
import { useRouter } from 'next/router';
import { Button, Modal, DatePicker, notification } from "antd";
import axios from 'axios';
export default function userId() {
    const router = useRouter()
    const { userId } = router.query
    if (!userId) {
        return <div>ID not found.</div>;
    }
    return (
        <div>
            <ViewTasks />
        </div>
    )
}
