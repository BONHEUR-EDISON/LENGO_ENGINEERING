import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-100 p-8 md:p-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Merci d’avoir contacté <span className="text-blue-600">LENGO ENGINEERING ⚙️</span>
      </h1>
      <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
        Nos services : commande et montage des ascenseurs, Construction métallique industrielle, Irrigation et arrosage automatique, Ajustage et machines outils architecture métallique, Domotique et TIC.
      </p>
      <Link
        href="/contact"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
      >
        Comment pouvons-nous vous aider ?
      </Link>
    </section>
  );
}