import moi from '../assets/images/moi.png'
import '../assets/fontawesome-free-6.7.2-web/css/all.min.css'
export const Accueil= ()=>{
    return <div className="flex justify-center items-center h-screen w-full" data-aos="fade-up">

        <div className="w-1/2 h-full bg-gray-50 flex  justify-center items-center" id='home'>

        <div className="">

        <p className='text-3xl tracking-wider uppercase font-semibold'>Salut tout le monde!</p>
        <h1 className='text-4xl font-bold tracking-wide'>Je suis <span className='text-5xl text-purple-600 font-custom'>Amelevi Gloria</span></h1>
        <p className='bg-purple-200 mt-3 mb-2 w-fit'>Développeuse Front-end || UI/UX</p>
        <p className='text-justify'>Je suis une développeuse web passionnée, en formation en génie <br />
                                    logiciel. J'aime créer des solutions numériques utiles et accessibles, <br />
                                    notamment à travers des projets web et mobiles. Curieuse <br />
                                    et déterminée, je suis toujours prête à relever de nouveaux défis.</p>
        <button className='bg-purple-600 p-3 rounded-2xl text-sm text-white mt-4 '><a href="#contact" className='text-white'>Suivez-moi sur mes réseaux</a></button>

        </div>
    </div>

     <div class="w-1/2 h-full  ">
            <img src={moi} alt="" className='w-full object-cover h-full' />
            <div class="absolute top-0 right-0 w-1/2 h-full flex items-center justify-end" data-aos="fade-up">
                <div className='bg-white h-64 w-14 flex flex-col justify-center items-center rounded-3xl py-3.5 gap-3 fixed shadow-xl '>
                    <a href="#home"><i className='fa-solid fa-house text-purple-600 text-xl'></i></a>
                    <a href="#about"><i className='fa-regular fa-circle-user text-xl'></i></a>
                    <a href="#skills"><i className='fa-solid fa-award text-xl'></i></a>
                    <a href="#realisations"><i className='fa-brands fa-buffer text-xl'></i></a>
                    <a href="#contact"><i className='fa-solid fa-paper-plane text-xl'></i></a>
                </div>
            </div>
        </div>

    </div>
}
