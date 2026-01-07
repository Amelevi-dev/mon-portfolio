
import '../assets/fontawesome-free-6.7.2-web/css/all.min.css';
import image1 from '../assets/images/logo benjamin.png';
import image2 from '../assets/images/logo doxa-beauty.png';
import image3 from '../assets/images/logo germain-design.png';
import image4 from '../assets/images/logo shifin-job.png';
import image5 from '../assets/images/nyamalogo.png';
import image6 from '../assets/images/musokeneyalogo.png';

export const Realisations = () => {
  return (
    <section
      id="realisations"
      className="bg-gray-50 w-full py-12 px-4 md:px-10"
      data-aos="fade"
    >
      <h1 className="text-gray-900 font-light text-2xl sm:text-3xl text-center mb-10">
        Mes Réalisations{' '}
        <i className="fa-brands fa-buffer text-3xl sm:text-4xl text-purple-600"></i>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {/* Carte 1 */}
        <div
          className="flex flex-col items-center justify-center gap-4 bg-white shadow-2xl py-6 px-6 rounded-lg w-full max-w-[300px]"
          data-aos="fade-up"
        >
          <img src={image1} className="h-24 w-24 object-contain" alt="Projet Benjamin" />
          <p className="text-center text-sm sm:text-base">
            Portfolio pour Designer Visual du monde
          </p>
        </div>

        {/* Carte 2 */}
        <div
          className="flex flex-col items-center justify-center gap-4 bg-white shadow-2xl py-6 px-6 rounded-lg w-full max-w-[300px]"
          data-aos="fade-up"
        >
          <img
            src={image2}
            className="h-24 w-24 rounded-full object-cover"
            alt="Projet Doxa Beauty"
          />
          <p className="text-center text-sm sm:text-base">
            Site Web et landing page pour le salon Doxa-Beauty
          </p>
        </div>

        {/* Carte 3 */}
        <div
          className="flex flex-col items-center justify-center gap-4 bg-white shadow-2xl py-6 px-6 rounded-lg w-full max-w-[300px]"
          data-aos="fade-up"
        >
          <a href="https://portfolio-germain-acaa5.web.app/" target='_blank'><img src={image3} className="h-24 w-36 object-contain" alt="Germain Design" /></a>
          <p className="text-center text-sm sm:text-base">
            Portfolio Pro pour Germain Design
          </p>
        </div>

        {/* Carte 4 */}
        <div
          className="flex flex-col items-center justify-center gap-4 bg-white shadow-2xl py-6 px-6 rounded-lg w-full max-w-[300px]"
          data-aos="fade-up"
        >
          <img src={image4} className="h-24 w-24 object-contain" alt="Shifin Job" />
          <p className="text-center text-sm sm:text-base">
            Plateforme de facilitation de l'insertion des jeunes dans le milieu professionnel
          </p>
        </div>

        {/* Carte 5 */}
        <div
          className="flex flex-col items-center justify-center gap-4 bg-white shadow-2xl py-6 px-6 rounded-lg w-full max-w-[300px]"
          data-aos="fade-up"
        >
          <a href="https://nyama-musee.web.app/" target='_blank'><img src={image5} className="h-28 w-28 object-contain rounded-full" alt="Collecte de déchets" /></a>
          <p className="text-center text-sm sm:text-base">
            Galerie d’art interactif mettant en valeur le patrimoine culturel des pays de l'Alliance des Etats du Sahel
          </p>
        </div>

        {/* Carte 6 */}
        <div
          className="flex flex-col items-center justify-center gap-4 bg-white shadow-2xl py-6 px-6 rounded-lg w-full max-w-[300px]"
          data-aos="fade-up"
        >
          <a href="https://musokeneya.web.app/" target='_blank'><img src={image6} className="h-36 w-36 object-contain" alt="Collecte de déchets" /></a>
          <p className="text-center text-sm sm:text-base">
            Plateforme d'accompagnement des femmes afin qu’elles puissent avoir accès aux soins médicaux en toute simpliciter.
          </p>
        </div>
      </div>
    </section>
  );
};
