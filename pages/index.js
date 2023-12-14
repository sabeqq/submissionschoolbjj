import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Format from '../layout/format'
// import HomeSection from '../components/homesection'
import HomeSection2 from '../components/homesection2'

import AboutSection from '../components/about'
import ScheduleSection from '../components/schedule'
import PriceSection from '../components/price'
import ContactSection from '../components/contact'
import InstagramFeed from '../components/instagramfeed'
import GoogleReviewsFeed from '../components/googlereviewsfeed'




export default function Home() {
  return (


    <Format>
      <HomeSection2></HomeSection2>
      <AboutSection></AboutSection>
      <ScheduleSection></ScheduleSection>
      <PriceSection></PriceSection>
     <InstagramFeed></InstagramFeed>
     {/* <GoogleReviewsFeed></GoogleReviewsFeed> */}
      <ContactSection></ContactSection>
    </Format>
  )
}
