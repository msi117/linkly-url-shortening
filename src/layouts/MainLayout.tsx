import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const MainLayout = () => {
    return (
        <main className='bg-black min-h-screen'>
            <Header />
            <Outlet />
        </main>
    )
}

export default MainLayout