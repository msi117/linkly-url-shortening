import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { AuthContext } from '../context/AuthContext'

const MainLayout = () => {


    return (
        <main className='bg-black min-h-screen'>
            <AuthContext.Provider value="Sameer">
                <Header />
                <Outlet />
            </AuthContext.Provider>
        </main>
    )
}

export default MainLayout