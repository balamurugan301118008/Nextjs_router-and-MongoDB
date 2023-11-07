import React from 'react'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css';
export default function MainFile() {
    return (
        <div>
            <div>
                <center><h1>Welcome page</h1></center>
                <div className='d-flex justify-content-around p-3'>
                    <div className='d-grid gap-2'>
                        <h2 className='text-primary-emphasis'>User actions</h2>
                        <Link href='/userLogin'><button className=' btn btn-info'>User Login</button></Link>
                        <Link href='/userRegister'><button className=' btn btn-info'>User Register</button></Link>
                    </div>
                    <div className='d-grid gap-2'>
                        <h2 className='text-info-emphasis'>Admin Or manager actions</h2>
                        <Link href='/adminOrManagerLogin'><button className='btn btn btn-light'>Admin or manager Login</button></Link>
                        <Link href='/adminOrManagerRegister'><button className='btn btn btn-light'>Admin or manager Register</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
