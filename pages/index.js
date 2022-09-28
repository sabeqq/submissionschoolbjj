import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Format from '../layout/format'
import HomeSection from '../components/homesection'
import AboutSection from '../components/about'
import ScheduleSection from '../components/schedule'
import PriceSection from '../components/price'



export default function Home() {
  return (
    
   <Format>
    <HomeSection></HomeSection>
    <AboutSection></AboutSection>
    <ScheduleSection></ScheduleSection>
    <PriceSection></PriceSection>
    
   </Format>
  )
}
