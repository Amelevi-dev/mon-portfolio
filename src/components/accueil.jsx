
import moi from '../assets/images/moi.png'
import '../assets/fontawesome-free-6.7.2-web/css/all.min.css'

export const Accueil = () => {
  return (
    <section
      id="home"
      className="accueil-section flex flex-col md:flex-row justify-center items-center min-h-screen w-full pt-20 lg:pt-24 bg-gray-50 overflow-hidden"
      data-aos="fade-up"
    >
      {/* Description Section */}
      <div className="accueil-description w-full md:w-1/2 flex justify-center items-center px-6 py-10 md:py-0 z-50">
        <div className="text-center md:text-left">
          <p className="text-xl sm:text-2xl md:text-3xl tracking-wider uppercase font-semibold">
            Salut tout le monde!
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide mt-2">
            Je suis{' '}
            <span className="text-purple-600 font-custom">Amelevi Gloria</span>
          </h1>
          <p className="bg-purple-200 mt-3 mb-2 inline-block px-3 py-1 text-sm sm:text-base rounded">
            Développeuse Front-end || UI/UX
          </p>
          <p className="text-sm sm:text-base text-justify leading-relaxed text-gray-700">
            Je suis une développeuse web passionnée, en formation en génie
            logiciel. J'aime créer des solutions numériques utiles et
            accessibles, notamment à travers des projets web et mobiles.
            Curieuse et déterminée, je suis toujours prête à relever de
            nouveaux défis.
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="bg-purple-600 px-5 py-2 rounded-2xl text-white text-sm sm:text-base hover:bg-purple-700 transition"
            >
              Suivez-moi sur mes réseaux
            </a>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="accueil-image relative w-full md:w-1/2 flex justify-center items-center">
        <img
          src={moi}
          alt="Moi"
          className="w-full h-[300px] sm:h-[400px] md:h-screen object-cover md:object-contain"
        />

        {/* Barre latérale (cachée sur mobile) */}
        <div
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-6 bg-white h-64 w-14 flex-col justify-center items-center rounded-3xl py-3.5 gap-3 shadow-xl"
          data-aos="fade-up"
        >
          <a href="#home"><i className="fa-solid fa-house text-purple-600 text-xl"></i></a>
          <a href="#about"><i className="fa-regular fa-circle-user text-xl"></i></a>
          <a href="#skills"><i className="fa-solid fa-award text-xl"></i></a>
          <a href="#realisations"><i className="fa-brands fa-buffer text-xl"></i></a>
          <a href="#contact"><i className="fa-solid fa-paper-plane text-xl"></i></a>
        </div>
      </div>
    </section>
  )
}
