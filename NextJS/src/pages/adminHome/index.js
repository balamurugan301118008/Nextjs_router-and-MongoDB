import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router';
import { Button, Modal, DatePicker, notification } from "antd";
import Link from 'next/link';

export default function AdminHome() {
    const userToken = useSelector((state) => state.reducer.initialState)
    const token = userToken ? userToken.token : null
    const [name, setAdminName] = useState('')
    const navigate = useRouter();
    useEffect(() => {
        axios.get('http://localhost:4000/adminHome', { headers: { Authorization: `Bearer ${token}` } })
            .then(res => {
                if (res.data.Status === "Success") {
                    setAdminName(res.data.data[0].name)
                }
                else {
                    localStorage.removeItem('token')
                    // localStorage.removeItem("userData")
                    navigate.push('/adminOrManagerLogin')
                    notification.error({ description: res.data.Error })
                }
            })
    }, [])

    // Below the function for logout the user
    const handleDeleteAccount = () => {
        localStorage.removeItem('userData')
        navigate.push('/adminOrManagerLogin')
        notification.error({ description: "you're successfully log-outted" })
    }
    return (
        <React.Fragment>
            <div>
                <center><h1 style={{ color: 'ThreeDDarkShadow' }}>Admin Home page</h1></center>
                <div className='d-flex justify-content-around'>
                    <h3>Welcome to our site <span style={{ color: 'blue' }}>{name}</span></h3>
                    <button className='btn btn-outline-danger' onClick={handleDeleteAccount}>Logout</button>
                </div>
                <div className='d-flex justify-content-center gap-5 p-3'>
                    <Link href='/adminHome/managerList'><buthrefn className='btn btn-primary'>Manager List</buthrefn></Link>
                    <Link href='/adminHome/usersList'><button className='btn btn-primary'>Users List</button></Link>
                </div>
            </div>
        </React.Fragment>
    )
}
