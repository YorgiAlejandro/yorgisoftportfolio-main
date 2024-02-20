import { Metadata } from 'next'
import { Transition } from '@/components/Transition/Transition'
import  Cover  from '@/components/Cover/Cover'

export const metadata: Metadata = {
  title: "Portafolio Yorgi'Soft",
  description: "Portafolio Yorgi'Soft",
}


export default function Home() {
  return (
    <main className='bg-[#393A47] h-[100vh]'>
      <Transition />
      <Cover />
    </main>
    
  )
}
