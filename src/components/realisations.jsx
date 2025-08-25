import '../assets/fontawesome-free-6.7.2-web/css/all.min.css';
import image1 from '../assets/images/logo benjamin.png';
import image2 from '../assets/images/logo doxa-beauty.png';
import image3 from '../assets/images/logo germain-design.png';
import image4 from '../assets/images/logo shifin-job.png';
import image5 from '../assets/images/logo_ACACH-Mali-removebg-preview.png';

export const Realisations = () =>{
    return <div className="bg-gray-50 h-[110vh] w-full py-3.5 mb-9" id='realisations'>
        <h1 className='text-gray-900 font-light' data-aos="fade"> Mes Réalisations  <i className='fa-brands fa-buffer text-4xl text-purple-600' ></i></h1>

       <div className="flex items-center justify-center w-full h-full">

                <section className='flex flex-wrap  justify-evenly items-center h-[80vh] w-full  gap-x-[9px] py-5 '>

            <div className="flex items-center justify-center flex-col gap-4 bg-white shadow-2xl py-4 px-4 rounded-[5px] w-[300px] " data-aos="fade-right">
                <img src={image1} className='h-[100px] w-[100px] ' />
                <p className='text-center'>Portfolio pour Designer Visual du monde</p>
            </div>

            <div className="flex items-center justify-center flex-col gap-4 bg-white shadow-2xl py-4 px-4 rounded-[5px] w-[300px]  " data-aos="fade-right">
                <img src={image2} className='h-[100px] w-[100px] rounded-full ' />
                <p className='text-center'>Site Web et lainding page pour le
                                           salon Doxa-beauty</p>
            </div>

            <div className="flex items-center justify-center flex-col gap-4 bg-white shadow-2xl py-4 px-4 rounded-[5px] w-[300px]" data-aos="fade-right">
                <img src={image3} className='h-[100px] w-[150px] ' />
                <p className='text-center'>Portfolio Pro pour Germain Design</p>
            </div>

            <div className="flex items-center justify-center flex-col gap-4 bg-white shadow-2xl py-4 px-4 rounded-[5px] w-[300px]" data-aos="fade-right">
                <img src={image4} className='h-[100px] w-[100px] ' />
                <p className='text-center'>Plateforme de facilitation de l'insertion des jeunes
                                           dans le milieu professionnel</p>
            </div>
            
            <div className="flex items-center justify-center flex-col gap-4 bg-white shadow-2xl py-4 px-4 rounded-[5px] w-[300px]" data-aos="fade-right">
                <img src={image5} className='h-[100px] w-[100px] ' />
                <p className='text-center'>Site web pour une entreprise de Collecte de déchets.</p>
            </div>

            <div className="flex items-center justify-center flex-col gap-4 bg-white shadow-2xl py-4 px-4 rounded-[5px] w-[300px]" data-aos="fade-right"> 

                <div class="flex items-center justify-center gap-0.5 mb-5 text-2xl font-bold text-center text-[#4f46e5]">
                <i class="fas fa-door-open"></i>
                <span>VisioTrack <br /> Pro</span> 
                </div> 
                <p className='text-center'>Application web de gestion des visites et des clients</p>
             </div>
            
        </section>
       </div>

    </div>
}