import Hero from '@/components/hero'
import SectionOne from '@/components/sectionOne'
import SectionThree from '@/components/sectionThree'
import SectionTwo from '@/components/sectionTwo'
import Image from 'next/image'




export default function Home() {
  return (
    <main className="">
      <Hero/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
    </main>
  )
}
