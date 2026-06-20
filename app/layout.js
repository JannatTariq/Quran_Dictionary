import './globals.css'
import Header from './components/header/Header'
import Footer from './components/Footer/Footer'
import { Inter, Playfair_Display, Noto_Naskh_Arabic } from 'next/font/google'






import localFont from 'next/font/local';

const hafs = localFont({
  src: [
    {
      path: '../public/fonts/hafs-regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--hafs', // Customize the CSS variable name
});

//👇 Configure our font object
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight:["400", "500", "600", "700", "800"],
  variable:"--playfair-display"
});

const inter = Inter({ subsets: ['latin'], display:"swap", variable:"--inter" })
const notoNaskh = Noto_Naskh_Arabic({ subsets: ['arabic'], display:"swap", variable:"--notoNaskh" })

export const metadata = {
  title: 'Quran Dictionary',
  description: 'Aaayaat, Mauzuaat aur Alfaaz',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfairDisplay.variable} ${hafs.variable} ${notoNaskh.variable}`}>
        <header className='sticky top-0 z-20 bg-white'>
          <Header/>
        </header>
        <main>{children}</main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  )
}
