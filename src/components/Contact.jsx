import '../assets/fontawesome-free-6.7.2-web/css/all.min.css';
import moi from '../assets/images/moi1.jpg';

export const Contact = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center w-full min-h-[100vh] px-4 lg:px-16 gap-8" id="contact">

      {/* Formulaire */}
      <div className=" pt-20 lg:pt-24 w-full lg:w-1/2 flex justify-center items-center">
  <form action="traitement.php" method="post" className="w-full px-2 sm:px-4 py-4" data-aos="fade-up">
    
    <button className="bg-purple-600 text-white py-3 px-4 rounded-lg mb-5 text-2xl sm:text-3xl w-full">
      <p className="tracking-wider">AGA</p>
    </button>

    <h1 className="font-bold text-xl sm:text-2xl mb-2">Contactez-moi maintenant</h1>
    <p className="text-md mb-6">Contactez-moi et faisons de vos idées une réalité 😎</p>

    <div className="border-b-2 border-gray-400 my-6 flex items-center justify-center gap-4">
      <a href="https://www.facebook.com/amelevigloria.amededzisso"><i className="fa-brands fa-square-facebook text-2xl hover:text-purple-400 transition"></i></a>
      <a href="https://www.instagram.com/amelevigloria?igsh=MTM3NGs5MjVvbThleA=="><i className="fa-brands fa-square-instagram text-2xl hover:text-purple-400 transition"></i></a>
      <a href="https://www.linkedin.com/in/amelevi-gloria-amededzisso-674939372"><i className="fa-brands fa-linkedin text-2xl hover:text-purple-400 transition"></i></a>
      <a href="tel:+22390368806"><i className="fa-brands fa-square-whatsapp text-2xl hover:text-purple-400 transition"></i></a>
    </div>

    <div className="flex flex-col mb-4">
      <label className="text-md mb-1 font-bold">Nom & Prénom:</label>
      <input type="text" name="nom_prenom" id="nom_prenom" className="border-2 p-2 sm:p-3 rounded-md text-sm outline-0 w-full" />
    </div>

    <div className="flex flex-col mb-4">
      <label className="text-md mb-1 font-bold">Email:</label>
      <input type="text" name="email" id="email" placeholder="gloria@gmail.com" className="border-2 p-2 sm:p-3 rounded-md text-sm outline-0 w-full" />
    </div>

    <div className="flex flex-col mb-4">
      <label className="text-md mb-1 font-bold">Message:</label>
      <textarea name="message" id="message" rows="5" className="border-2 rounded-md text-sm outline-0 w-full p-2 sm:p-3"></textarea>
    </div>

    <button className="w-full bg-purple-600 text-white mt-4 rounded-md p-3 text-sm hover:bg-purple-700 transition" type="button">Envoyer</button>

  </form>
</div>

      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img src={moi} alt="mon image" className="w-full max-w-sm lg:max-w-full object-cover rounded-md" />
      </div>

    </section>
  );
};
