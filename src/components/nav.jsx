import '../assets/fontawesome-free-6.7.2-web/css/all.min.css'
import logo from '../assets/images/logo2.png'
export const Nav= ()=>{
    return <nav className="p-2.5 flex items-start justify-start flex-col mb-8 ">
        <div className="bg-white border-2 border-b-gray-500 h-[80px] w-[80px]  rounded-full  ">
            <img src={logo} alt="" />
        </div>
        <ul className='flex items-center gap-4 mt-5 '>
            <a href="#home" className=" text-gray-900 font-medium   hover:underline-offset-4 hover:text-purple-600 "><li>Accueil</li></a>
            <a href="#about" className=" text-gray-900 font-medium   hover:underline-offset-4 hover:text-purple-600"><li>About</li></a>
            <a href="#skills" className=" text-gray-900 font-medium   hover:underline-offset-4 hover:text-purple-600"><li>Skills</li></a>
            <a href="#realisations" className=" text-gray-900 font-medium   hover:underline-offset-4 hover:text-purple-600"><li>Réalisations</li></a>
            <a href="#contact" className=" text-gray-900 font-medium   hover:underline-offset-4 hover:text-purple-600"><li>Contact</li></a>
        </ul>
    </nav>
}