import '../assets/fontawesome-free-6.7.2-web/css/all.min.css'
import moi from '../assets/images/moi1.jpg';
import logo from '../assets/images/logo3.png'
import monCV from '/CV_Amelevi_Gloria_Amededzisso.pdf'

export const About=()=>{
    return <div className="h-[90vh] flex items-center justify-center gap-12 w-full" id='about'>



         <div className="w-1/2 items-center justify-center "  data-aos="fade">
            <section className='flex '>
                <div className="bg-gray-500  h-[350px] w-[350px] rounded-full " >
                    <img src={moi} className='w-full  object-cover rounded-full'  alt="" />
                </div>
                <div className="bg-white border-2 border-b-gray-500 h-[200px] w-[200px]  rounded-full ">
                    <img src={logo} alt="" />
                </div>
            </section>
        </div>
        
        <div className="mt-4 flex flex-col justify-center items-start w-1/2 h-full"  data-aos="fade">
            <h1 className='font-bold mb-2'>Qui suis-je ?</h1> <br />
            <p className='text-left w-[450px]'><span class="text-2xl tracking-wider ">Je suis </span><span class=" font-bold text-3xl text-purple-600" >Amelevi Gloria,</span> <span class="text-2xl font-extralight">Développeuse Front Junior | UI/UX Designer</span> </p> <br />
                <p  class="text-justify text-sm w-[450px]" > 
                Je suis une développeuse en devenir, passionnée par le numérique, l'innovation sociale et les solutions durables adaptées aux réalités
                du Mali. Actuellement étudiante en génie logiciel, je m'investis dans des projets qui allient technologie et impact, comme le développement
                web et la gestion de données. Curieuse, autonome et engagée, j'apprends continuellement pour
                créer des solutions utiles, accessibles et responsables.
            </p>
             <button className='bg-purple-600 p-2 rounded-[8px] text-sm text-white mt-4 '><a href={monCV} download={monCV} className='text-white '>Téléchargez mon CV !</a></button>
        </div>

       

    </div>
}