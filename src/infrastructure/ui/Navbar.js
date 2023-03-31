// import React from 'react'
// // import styles from '../styles/Home.module.css'
// import styles from './styles.module.css'
// import Link from 'next/link'
// import Image from 'next/image'
 
// const Navbar = () => {
//     return (
//         <nav className="">

// <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
//             <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
//                 <a className="text-xl font-semibold" href="/">LOGO</a>
//             </div>
//             <div className="flex flex-col ml-4">
//                 <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
//                     About
//                 </a>
//                 <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
//                     Contact
//                 </a>
//             </div>  
//         </div>
// {/*         
//         <div className={styles.image}>
//             <Image src="/logo.png" width="135" height="40" alt='Adguin logo' />     
//         </div>       
            
//             <ul>
//                 <Link href='/'><li>Home</li></Link>
//                 <Link href='/about'><li>About</li></Link>
//                 <Link href='/blog'><li>Blog</li></Link>
//                 <Link href='/contact'><li>Contact</li></Link>
//             </ul> */}
//         </nav>
//     )
// }
 
// export default Navbar

import { useState } from 'react'
import Image from 'next/image'


function NavLink({to, children}) {
    return <a href={to} className={`mx-20 text-black`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter bg-white h-20"> {/*logo container*/}
                <a className="text-xl font-semibold" href="/">LOGO</a>
            </div>
            <div className="flex flex-col ml-4">
                <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </a>
                <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Contact
                </a>
            </div>  
        </div>
    )
}

export default function Navbar() {
    
    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter bg-white px-12 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <a className="text-2xl font-semibold" href="/"><Image src={'/logo.png'} width={100} height={100} /></a>
            </div>
            <div className="px-100w-1/2 text-[18px] p-20 space-x-10 gap-6 font-semibold flex justify-end items-center">

                <div className="z-50 flex relative w-20 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="text-black font-miriam hidden md:flex">
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/solutions">
                        Solutions
                    </NavLink>
                    <NavLink to="/research">
                        Resources
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                </div>

                <div className=' w-[109px] px-40'>
                    <button class="bg-violet-700 font-miriam w-[150px] hover:bg-violet-500 text-white font-light py-2 px-4 rounded">
                        SIGN UP
                    </button>
                </div>
            </div>
        </nav>
    )
}