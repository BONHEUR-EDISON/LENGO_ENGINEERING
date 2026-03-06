import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-bold text-lg">LENGO ENGINEERING ⚙️</span>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
          <Link href="/" className="hover:text-blue-400 transition">Accueil</Link>
          <Link href="/services" className="hover:text-blue-400 transition">Services</Link>
          <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>

        <div className="text-center md:text-right mt-4 md:mt-0 text-sm">
          © 2026 LENGO ENGINEERING. Tous droits réservés. <br />
          📞 +243 847 447 696 | +243 896 902 904
        </div>
      </div>
    </footer>
  );
}