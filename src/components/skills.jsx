import '../assets/fontawesome-free-6.7.2-web/css/all.min.css';

export const Skills = () => {
  return (
    <section
      id="skills"
      className=" pt-20 lg:pt-24 w-full bg-white text-gray-900 flex flex-col md:flex-row justify-between items-start px-6 md:px-12 py-12 gap-10"
      data-aos="fade-up"
    >
      {/* ----------- Partie Texte ----------- */}
      <div className="w-full md:w-1/2 text-left">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-center md:text-left">
          Qu'est-ce que je fais exactement ?
        </h3>

        <ul className="list-disc pl-5 space-y-5 text-sm sm:text-base">
          <li className="text-purple-600 font-semibold">
            Développement de Site Web :
            <span className="text-gray-800 font-normal block mt-1">
              Je crée des sites web sur mesure, adaptés aux besoins de chaque
              client. Utilisant HTML, CSS, JavaScript, Angular et Tailwind CSS,
              je conçois des interfaces modernes, responsives et optimisées pour
              offrir une navigation fluide sur tous les appareils.
            </span>
          </li>

          <li className="text-purple-600 font-semibold">
            Automatisation des tâches :
            <span className="text-gray-800 font-normal block mt-1">
              J'automatise des tâches répétitives via des scripts avec Excel
              VBA. Cela inclut la gestion de fichiers, l'envoi d'e-mails ou
              l'organisation de données, pour gagner du temps et améliorer
              l'efficacité.
            </span>
          </li>

          <li className="text-purple-600 font-semibold">
            Installation de Système d'exploitation :
            <span className="text-gray-800 font-normal block mt-1">
              J'installe et configure des systèmes Windows et Linux selon les
              besoins du client. Je m'occupe également des pilotes essentiels et
              logiciels de base pour un usage immédiat.
            </span>
          </li>
        </ul>
      </div>

      {/* ----------- Partie Hard Skills ----------- */}
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <h3
          className="text-2xl sm:text-3xl text-center mb-6 font-semibold text-gray-900"
          data-aos="fade-left"
        >
          Hard Skills{' '}
          <i className="fa-solid fa-award ml-2 text-purple-600"></i>
        </h3>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-6 justify-items-center">
          <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20">
            <i className="fa-brands fa-html5 text-4xl text-[#E44D26]"></i>
          </div>

          <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20">
            <i className="fa-brands fa-css3-alt text-4xl text-[#663399]"></i>
          </div>

          <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20">
            <i className="fa-brands fa-figma text-4xl"></i>
          </div>

          <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20">
            <i className="fa-brands fa-square-js text-4xl text-yellow-400"></i>
          </div>

          <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20">
            <i className="fa-brands fa-php text-4xl text-[#777BB4]"></i>
          </div>

          <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20">
            <i className="fa-brands fa-react text-4xl text-[#61DAFB]"></i>
          </div>

          <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20">
            <i className="fa-brands fa-angular text-4xl bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent"></i>
          </div>

          <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20">
            <i className="fa-brands fa-node-js text-4xl text-green-700"></i>
          </div>

          <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20">
            <i className="fa-solid fa-database text-4xl text-fuchsia-600"></i>
          </div>
        </div>
      </div>
    </section>
  )
}
