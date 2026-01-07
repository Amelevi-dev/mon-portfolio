
import '../assets/fontawesome-free-6.7.2-web/css/all.min.css';
import image1 from '../assets/images/logo benjamin.png';
import image2 from '../assets/images/logo doxa-beauty.png';
import image3 from '../assets/images/logo germain-design.png';
import image4 from '../assets/images/logo shifin-job.png';
import image5 from '../assets/images/logo_ACACH-Mali-removebg-preview.png';

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
          <img src={image3} className="h-24 w-36 object-contain" alt="Germain Design" />
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
          <img src={image5} className="h-24 w-24 object-contain" alt="Collecte de déchets" />
          <p className="text-center text-sm sm:text-base">
            Site web pour une entreprise de Collecte de déchets.
          </p>
        </div>

        {/* Carte 6 */}
        <div
          className="flex flex-col items-center justify-center gap-4 bg-white shadow-2xl py-6 px-6 rounded-lg w-full max-w-[300px]"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center gap-1 mb-2 text-2xl font-bold text-center text-purple-600">
            <i className="fas fa-door-open"></i>
            <span>VisioTrack <br /> Pro</span>
          </div>
          <p className="text-center text-sm sm:text-base">
            Application web de gestion des visites et des clients
          </p>
        </div>
      </div>
    </section>
  );
};
