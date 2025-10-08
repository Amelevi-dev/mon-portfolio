import '../assets/fontawesome-free-6.7.2-web/css/all.min.css';
import moi from '../assets/images/moi1.jpg';

export const Contact = () =>{
    return <section class="flex justify-between items-center w-full h-[12Ovh] " id='contact'>
        <div class="w-1/2 flex justify-center items-center">
          <form action="traitement.php" method='post' class="w-[430px] "  data-aos="fade-up">
            <button class="bg-purple-600 text-white py-6 px-8 rounded-lg tex-3xl mb-5">
                <p className=' tracking-wider '>AGA</p>
            </button>
            <h1 class="font-bold text-2xl ">Contactez-moi maintenant</h1> <br />

            <p class="text-md">Contactez-moi et faisons de vos idées une réalité 😎</p>

            <div class="border-b-2 border-[darkgray]  my-10 flex items-center justify-center gap-8 ">

                    <a href="https://www.facebook.com/amelevigloria.amededzisso"><i class="fa-brands fa-square-facebook text-2xl hover:text-purple-400 animate-bounce hidden transition-all transition-discrete"></i></a>
                    <a href="https://www.instagram.com/amelevigloria?igsh=MTM3NGs5MjVvbThleA=="><i class="fa-brands fa-square-instagram  text-2xl  hover:text-purple-400 animate-bounce hidden transition-all transition-discrete"></i></a>
                    <a href="https://www.linkedin.com/in/amelevi-gloria-amededzisso-674939372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="fa-brands fa-linkedin text-2xl  hover:text-purple-400 animate-bounce hidden transition-all transition-discrete"></i></a>
                    <a href="tel:+22390368806"><i class="fa-brands fa-square-whatsapp text-2xl  hover:text-purple-400 animate-bounce hidden transition-all transition-discrete"></i></a>
            </div>


               <div class=" flex flex-col">
                <label class="text-md mb-1 font-bold" >Nom & Prénom:</label>
                <input type="text" name='nom_prenom' id='nom_prenom' class="border-2 p-3 rounded-md text-sm  outline-0" />
            </div>
            <div class=" flex flex-col">
                <label class="text-md mb-1 font-bold" >Email:</label>
                <input type="text" name='email' id='email' class="border-2 p-3 rounded-md text-sm outline-0" placeholder="gloria@gmail.com" />
            </div>

            <div class=" flex flex-col mt-4">
                <label class="text-md mb-1 font-bold" >Message:</label>
                <textarea name="message" id="message" rows="5" class="border-2 rounded-md text-sm outline-0"></textarea>
            </div>

            <button class=" w-full bg-purple-600 text-white mt-7 rounded-md p-3 text-sm " type='button'>Envoyer</button>
           
          </form>
        </div>

       <div class="w-1/2 h-full flex items-center justify-center" >
          <img src={moi} class=" w-full object-cover" alt="mon image" />
       </div>
    </section>
    
}