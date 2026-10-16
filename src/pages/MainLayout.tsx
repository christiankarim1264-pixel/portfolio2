import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import PostCard from '../components/PostCard'

export default function MainLayout(){
    return (
    <>
    <header>Header</header>
    <Outlet/>
    <PostCard/>
    <Footer/>
    </>
    )
}
