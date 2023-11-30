import Image from 'next/image'
import styles from './page.module.css'
import Script from 'next/script'

export default function Home() {
  return (
    <div>
      hello next
      <button>Click Me</button>
      <Script>
        {console.log('hello')}
      </Script>
    </div>
  )
}