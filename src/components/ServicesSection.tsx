import ServiceCard from "./ServiceCard";

const services = [
  { title: "Commande et montage des ascenseurs", description: "Solutions fiables pour tous types de bâtiments" },
  { title: "Construction métallique industrielle", description: "Structures métalliques durables et sécurisées" },
  { title: "Irrigation et arrosage automatique", description: "Systèmes modernes et efficaces" },
  { title: "Ajustage et machines outils", description: "Précision et performance pour l'industrie" },
  { title: "Domotique et TIC", description: "Solutions intelligentes pour bâtiments et entreprises" },
];

export default function ServicesSection() {
  return (
    <section className="p-8 md:p-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => <ServiceCard key={s.title} title={s.title} description={s.description} />)}
      </div>
    </section>
  );
}