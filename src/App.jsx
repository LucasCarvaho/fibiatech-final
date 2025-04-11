import { motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white text-[#1C3F60] px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Tecnologia com lógica. Soluções com alma.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-gray-600 mb-8"
        >
          Automatize, cresça e liberte tempo para o que realmente importa.
        </motion.p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="max-w-sm w-full px-4 py-2 rounded-md border border-gray-300"
          />
          <button className="px-6 py-2 rounded-md text-white bg-[#00C2CB] hover:bg-[#00aeb5]">
            Quero automatizar
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
        {[
          {
            title: "Tecnologia acessível",
            desc: "Automatização pensada para pequenas empresas e negócios que querem crescer com poucos recursos."
          },
          {
            title: "Suporte humano",
            desc: "Acompanhamos você de perto. Nada de robôs automáticos. Aqui você fala com gente de verdade."
          },
          {
            title: "Automação com alma",
            desc: "Soluções com foco em pessoas e crescimento real, não apenas tecnologia por tecnologia."
          }
        ].map((item, i) => (
          <div key={i} className="bg-gray-100 rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-20">
        <p className="text-gray-500 text-sm">© 2025 Fibia Tech. Todos os direitos reservados.</p>
      </div>
    </div>
  );
}