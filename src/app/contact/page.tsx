import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow p-8 md:p-16 bg-gray-100">
        <h1 className="text-4xl font-bold text-center mb-8">Contactez-nous</h1>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Pour toute demande de devis ou informations sur nos services, remplissez le formulaire ci-dessous.
        </p>

        <ContactForm />

        <div className="mt-12 text-center text-gray-700">
          📞 Téléphone : +243 847 447 696 | +243 896 902 904 <br />
          📍 Adresse : (Ajouter votre adresse ici)
        </div>
      </main>

      <Footer />
    </div>
  );
}