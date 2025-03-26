import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <main className="max-w-4xl w-full flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800">INIA Biosciences</h1>
        <p className="text-xl mb-12 text-gray-700 max-w-2xl">
          Advancing innovative solutions in the field of biosciences
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mb-16">
          <Link 
            href="/Contact" 
            className="flex flex-col items-center p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Contact Us</h2>
            <p className="text-gray-600 text-sm">Reach out to our team with questions or inquiries</p>
          </Link>
          
          <Link 
            href="/inhibitorEngager" 
            className="flex flex-col items-center p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Inhibitor Engager</h2>
            <p className="text-gray-600 text-sm">Learn about our innovative inhibitor technology</p>
          </Link>
          
          <Link 
            href="/team" 
            className="flex flex-col items-center p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Our Team</h2>
            <p className="text-gray-600 text-sm">Meet the talented people behind INIA Biosciences</p>
          </Link>
        </div>
      </main>
      
      <footer className="w-full max-w-4xl text-center text-gray-500 text-sm mt-auto">
        <p>© {new Date().getFullYear()} INIA Biosciences. All rights reserved.</p>
      </footer>
    </div>
  );
}
