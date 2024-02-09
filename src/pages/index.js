// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Gallery from './components/gallery'
import Profile2 from './components/profile'
import Profile from 'src/pages/qcomps/profile_mistake'
import Comp from 'src/pages/qcomps/firstcomp'
import Bios from 'src/pages/qcomps/bios'
import Todos from 'src/pages/qcomps/todos'
import AvatarProfile from 'src/pages/components/profile_props'
import GalleryProps from 'src/pages/qcomps/gallery_props'
import Square from 'src/pages/components/square'
import PackingList from 'src/pages/qcomps/props_item'



export default function Home() {
  return (
    <div className={styles.main}>
        <PackingList />
        <Square />
        <GalleryProps />
        <AvatarProfile />
        <Todos />
        <Bios />
        <Comp />
        <Profile2 />
        <Profile />
    </div>
  )
}
