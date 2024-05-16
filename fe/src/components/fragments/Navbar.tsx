import React from 'react'

export default function Navbar() {
    return (
        <nav className='flex justify-between p-2'>
            <div>
                <h1>Navbar</h1>
            </div>
            <div>
                <ul className='flex gap-5'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/history">History</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
        </nav>
    )
}
