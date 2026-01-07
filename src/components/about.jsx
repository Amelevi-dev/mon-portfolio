import '../assets/fontawesome-free-6.7.2-web/css/all.min.css';
import moi from '../assets/images/moi1.jpg';
import logo from '../assets/images/logo3.png';
import monCV from '/CV_Amelevi_Gloria_Amededzisso.pdf';

export const About = () => {
  return (
    <div className="flex flex-col-reverse pt-20 lg:pt-24 lg:flex-row  items-center justify-center gap-8 w-full min-h-[90vh] px-4 lg:px-16" id="about">

      {/* Section Images */}
      <div className="flex lg:flex-row items-center justify-center gap-4 lg:gap-8 w-full lg:w-1/2" data-aos="fade">
        <div className="bg-gray-500 rounded-full overflow-hidden w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
          <img src={moi} alt="Moi" className="w-full h-full object-cover" />
        </div>
        <div className="bg-white border-2 border-b-gray-500 rounded-full w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-3/4 h-3/4 object-contain" />
        </div>
      </div>

      {/* Section Texte */}
      <div className="flex flex-col justify-center items-start w-full lg:w-1/2 mt-6 lg:mt-0" data-aos="fade">
        <h1 className="font-bold mb-2 text-xl sm:text-2xl lg:text-3xl">Qui suis-je ?</h1>
        <p className="text-left text-lg sm:text-xl lg:text-2xl tracking-wide mb-4">
          Je suis <span className="font-bold text-purple-600">Amelevi Gloria,</span> 
          <span className="font-extralight"> Développeuse Front Junior | UI/UX Designer</span>
        </p>
        <p className="text-justify text-sm sm:text-base lg:text-lg mb-4">
          Je suis une développeuse en devenir, passionnée par le numérique, l'innovation sociale et les solutions durables adaptées aux réalités
          du Mali. Actuellement étudiante en génie logiciel, je m'investis dans des projets qui allient technologie et impact, comme le développement
          web et la gestion de données. Curieuse, autonome et engagée, j'apprends continuellement pour
          créer des solutions utiles, accessibles et responsables.
        </p>
        <button className="bg-purple-600 p-2 rounded-lg text-sm sm:text-base text-white mt-2 hover:bg-purple-700 transition">
          <a href={monCV} download={monCV}>Téléchargez mon CV !</a>
        </button>
      </div>

    </div>
  );
};
