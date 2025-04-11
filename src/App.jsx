import { motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white text-[#1C3F60] px-6 py-12">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <img src="/logo.png" alt="Fibia Tech logo" className="w-40 mx-auto mb-6" />
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4">
          Tecnologia com lógica. Soluções com alma.
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-gray-600 mb-8">
          Automatize, cresça e liberte tempo para o que realmente importa.
        </motion.p>
        <form action="https://formsubmit.co/lucascarvalho@fibiatech.com" method="POST" className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <input type="email" required name="email" placeholder="Seu melhor e-mail" value={email} onChange={(e) => setEmail(e.target.value)}
            className="max-w-sm w-full px-4 py-2 rounded-md border border-gray-300" />
          <button type="submit" className="px-6 py-2 rounded-md text-white bg-[#00C2CB] hover:bg-[#00aeb5]">
            Quero automatizar
          </button>
        </form>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          {
            title: "Tecnologia acessível",
            desc: "Automatização pensada para pequenas empresas e negócios com poucos recursos."
          },
          {
            title: "Suporte humano",
            desc: "Nada de robôs automáticos. Aqui você fala com gente de verdade que entende seu desafio."
          },
          {
            title: "Automação com alma",
            desc: "Tecnologia que serve pessoas. Criamos soluções com foco em impacto, não apenas em performance."
          }
        ].map((item, i) => (
          <div key={i} className="bg-gray-100 rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-24 bg-[#1C3F60] text-white rounded-xl max-w-3xl mx-auto p-10">
        <h2 className="text-3xl font-bold mb-4">Vamos automatizar sua empresa?</h2>
        <p className="mb-6">Fale com a gente e descubra como a Fibia pode transformar o seu tempo em crescimento.</p>
        <a href="https://wa.me/556399486115" target="_blank" className="inline-block bg-[#00C2CB] hover:bg-[#00aeb5] px-6 py-3 rounded-full text-white font-semibold">
          Falar pelo WhatsApp
        </a>
      </div>

      <div className="text-center mt-20 text-gray-500 text-sm">
        © 2025 Fibia Tech. Todos os direitos reservados.
      </div>
    </div>
  );
}
