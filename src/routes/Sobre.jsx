import Header from '../components/Header'
import Footer from '../components/Footer'

const Sobre = () => {
  return (
    <>
      <Header />

      <main className="bg-[#590209] text-white">

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Sobre Nós
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Somos apaixonados por games e criamos a Joga Fofo para conectar jogadores com as melhores experiências do mundo dos jogos.
          </p>
        </section>

        {/* MISSÃO VISÃO VALORES */}
        <section className="bg-[#025373] py-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">

            <div className="bg-[#03588C] p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3 text-[#F20530]">Missão</h3>
              <p className="text-gray-200">
                Levar diversão e entretenimento de qualidade para todos os tipos de jogadores.
              </p>
            </div>

            <div className="bg-[#03588C] p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3 text-[#F20530]">Visão</h3>
              <p className="text-gray-200">
                Ser referência no mercado de games online no Brasil.
              </p>
            </div>

            <div className="bg-[#03588C] p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3 text-[#F20530]">Valores</h3>
              <p className="text-gray-200">
                Inovação, comunidade, paixão por jogos e respeito aos jogadores.
              </p>
            </div>

          </div>
        </section>

        {/* HISTÓRIA */}
        <section className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Nossa História
          </h2>

          <p className="text-gray-300 leading-relaxed">
            A Joga Fofo nasceu da paixão por jogos e da vontade de criar um espaço onde jogadores pudessem encontrar tudo o que precisam em um só lugar.
            Desde o início, nosso objetivo foi oferecer uma experiência simples, rápida e envolvente, com acesso aos melhores títulos do mercado.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-[#A60321] py-20 text-center px-6">
          <h2 className="text-3xl font-bold mb-6">
            Faça parte dessa jornada
          </h2>

          <p className="text-gray-200 mb-8">
            Venha explorar nosso catálogo e descobrir novos mundos.
          </p>

          <a
            href="/card"
            className="bg-white text-[#590209] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Ver Jogos
          </a>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default Sobre