
import '../assets/fontawesome-free-6.7.2-web/css/all.min.css';

export const Skills = () =>{
    return <div className="w-full h-[80vh] text-gray-900 flex justify-evenly items-center" id='skills'>
        <div className="w-2/4 text-left " data-aos="fade-up">
            <h3 className=' text-3xl font-semibold mb-6 text-center'>Quest-ce que je fais exactement ? </h3> <br />
            
            <p className='font-medium text-left'>
                <ul className=' list-disc text-left'>
                    <li className='text-purple-600 mb-3'>Développement de Site Web : <span className='text-gray-900 font-light text-sm'>
                        Je crée des sites web sur mesure, adaptés aux besoins
                        de chaque client.Utilisant HTML, CSS, JavaScript, Angular
                        et Tailwind CSS, je conçois des interfaces modernes, responsives
                        et optimisées pour offrir une navigation fluide sur tous les appareils.</span>
                    </li>

                    <li className='text-purple-600 mb-3'>Automatisation des tâches : <span className='text-gray-900 font-light text-sm'>
                        J'automatise des tâches répétitives via des scripts avec Excel VBA. Cela
                        inclut la gestion de fichiers, l'envoi d'e-mails ou l'organisation
                        données, dans un souci de gain de temps et d'efficacité.</span>
                    </li>

                    <li className='text-purple-600 mb-3'>Installation de Système d'exploitation : <span className='text-gray-900 font-light text-sm'>
                        J'installe et configure des systèmes Windows et Linux selon les besoins
                        du client. Je m'occupe également de l'installation des pilotes essentiels
                        et des logiciels de base pour un usage immédiat.</span>
                    </li>

                </ul>
            </p>
        </div>


        <div className="h-[60vh]  border-1 l"></div>

        

        <div className="flex justify-center flex-wrap items-center  w-1/4">
        <h3 className=' text-3xl text-center w-full mb-4 text-gray-900 font-semibold ' data-aos="fade-left">Hard Skills <i className='fa-solid fa-award ml-2 text-purple-600'></i></h3>

            <div className="flex items-center justify-center w-[90px] h-[90px]" data-aos="fade-up">
                <i className='fa-brands fa-html5 text-4xl text-[#E44D26]'></i>
            </div>
            <div className="flex items-center justify-center w-[90px] h-[90px]" data-aos="fade-up">
                <i className='fa-brands fa-css3-alt text-4xl text-[#663399]'></i>
            </div>
            <div className="flex items-center justify-center w-[90px] h-[90px]" data-aos="fade-up">
                <i className='fa-brands fa-figma text-4xl  '></i>
            </div>
            <div className="flex items-center justify-center w-[90px] h-[90px] " data-aos="fade-up">
                <i className='fa-brands fa-square-js text-4xl text-yellow-400'></i>
            </div>
            <div className="flex items-center justify-center w-[90px] h-[90px] " data-aos="fade-up">
                <i className='fa-brands fa-php text-4xl text-[#777BB4]'></i>
            </div>
            <div className="flex items-center justify-center w-[90px] h-[90px] " data-aos="fade-up">
                <i className='fa-brands fa-react text-4xl text-[#61DAFB]'></i>
            </div>
            <div className="flex items-center justify-center w-[90px] h-[90px]" data-aos="fade-up">
                <i className='fa-brands fa-angular text-4xl bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent '></i>
            </div>
             <div className="flex items-center justify-center w-[90px] h-[90px]" data-aos="fade-up">
                <i className='fa-brands fa-node-js text-4xl text-green-700'></i>
            </div>
             <div className="flex items-center justify-center w-[90px] h-[90px]" data-aos="fade-up">
                <i className='fa-solid fa-database text-4xl text-fuchsia-600'></i>
            </div>
        </div>


    </div>
}
