import { ReactNode } from 'react'
import Navbar from '../fragments/Navbar'

type Props = {
    children: ReactNode
}

export default function MainLayout({ children }: Props) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
