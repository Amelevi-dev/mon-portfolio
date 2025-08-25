import { useState } from "react";
import "../assets/fontawesome-free-6.7.2-web/css/all.min.css";
import moi from "../assets/images/moi1.jpg";

export const Contact = () => {
  const [formData, setFormData] = useState({
    nom_prenom: "",
    email: "",
    message: "",
  });

  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // empêche le rechargement de la page

    try {
      const response = await fetch("http://localhost/Portfolio/traitement.php", {
        method: "POST",
        body: new URLSearchParams(formData), // envoie comme un formulaire HTML
      });

      const result = await response.json(); // récupère le JSON renvoyé par PHP
      setResponseMsg(result.message);
    } catch (error) {
      setResponseMsg("Erreur lors de l'envoi du message.");
      console.error(error);
    }
  };

  return (
    <section
      className="flex justify-between items-center w-full h-[120vh]"
      id="contact"
    >
      <div className="w-1/2 flex justify-center items-center">
        <form onSubmit={handleSubmit} className="w-[430px]" data-aos="fade-up">
          <button className="bg-purple-600 text-white py-6 px-8 rounded-lg text-3xl mb-5">
            <p className="tracking-wider">AGA</p>
          </button>
          <h1 className="font-bold text-2xl">Contactez-moi maintenant</h1>
          <br />
          <p className="text-md">
            Contactez-moi et faisons de vos idées une réalité 😎
          </p>

          <div className="border-b-2 border-[darkgray] my-10 flex items-center justify-center gap-8">
            <a href="https://www.facebook.com/amelevigloria.amededzisso">
              <i className="fa-brands fa-square-facebook text-2xl hover:text-purple-400 animate-bounce hidden transition-all"></i>
            </a>
            <a href="https://www.instagram.com/amelevigloria?igsh=MTM3NGs5MjVvbThleA==">
              <i className="fa-brands fa-square-instagram text-2xl hover:text-purple-400 animate-bounce hidden transition-all"></i>
            </a>
            <a href="https://www.linkedin.com/in/amelevi-gloria-amededzisso-674939372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <i className="fa-brands fa-linkedin text-2xl hover:text-purple-400 animate-bounce hidden transition-all"></i>
            </a>
            <a href="tel:+22390368806">
              <i className="fa-brands fa-square-whatsapp text-2xl hover:text-purple-400 animate-bounce hidden transition-all"></i>
            </a>
          </div>

          <div className="flex flex-col">
            <label className="text-md mb-1 font-bold">Nom & Prénom:</label>
            <input
              type="text"
              name="nom_prenom"
              value={formData.nom_prenom}
              onChange={handleChange}
              className="border-2 p-3 rounded-md text-sm outline-0"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-md mb-1 font-bold">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-2 p-3 rounded-md text-sm outline-0"
              placeholder="gloria@gmail.com"
            />
          </div>

          <div className="flex flex-col mt-4">
            <label className="text-md mb-1 font-bold">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="border-2 rounded-md text-sm outline-0"
            ></textarea>
          </div>

          <button
            className="w-full bg-purple-600 text-white mt-7 rounded-md p-3 text-sm"
            type="submit"
          >
            Envoyer
          </button>

          {responseMsg && (
            <p className="mt-4 text-center text-green-600">{responseMsg}</p>
          )}
        </form>
      </div>

      <div className="w-1/2 h-full flex items-center justify-center">
        <img src={moi} className="w-full object-cover" alt="mon image" />
      </div>
    </section>
  );
};
