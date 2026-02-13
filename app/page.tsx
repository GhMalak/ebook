import Link from "next/link";
import { site } from "@/config/site";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded"
      >
        Pular para o Conteúdo
      </a>

      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-bold text-slate-800">{site.titulo}</h1>
            <p className="text-sm text-slate-500 font-mono mt-0.5">{site.cnpj}</p>
          </div>
          <Link
            href={site.loginUrl}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition"
          >
            LOGIN
          </Link>
        </div>
      </header>

      <main id="conteudo" className="max-w-4xl mx-auto px-4 py-10 space-y-14">
        {/* NOSSA MISSÃO */}
        <section aria-labelledby="missao-titulo">
          <h2 id="missao-titulo" className="text-2xl font-bold text-slate-800 mb-4">
            NOSSA MISSÃO
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="font-semibold text-slate-700">Nossa Missão</p>
            <p className="text-slate-600 leading-relaxed">{site.missao}</p>
            <p className="font-semibold text-slate-700 mt-6">Por que essa missão se adequa ao seu negócio:</p>
            <div className="text-slate-600 leading-relaxed whitespace-pre-line mt-2">
              {site.missaoAdequacao}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section aria-labelledby="contato-titulo">
          <h2 id="contato-titulo" className="text-2xl font-bold text-slate-800 mb-4">
            CONTATO
          </h2>
          <ul className="space-y-2 text-slate-600">
            <li>Telefone: {site.telefone}</li>
            <li>
              E-mail:{" "}
              <a href={`mailto:${site.email}`} className="text-primary-600 hover:underline">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline"
              >
                INSTAGRAM
              </a>
            </li>
          </ul>
        </section>

        {/* QUEM SOMOS */}
        <section aria-labelledby="quem-somos-titulo">
          <h2 id="quem-somos-titulo" className="text-2xl font-bold text-slate-800 mb-4">
            QUEM SOMOS?
          </h2>
          <p className="text-slate-500 text-sm mb-2">&quot;Sobre Nós&quot;</p>
          <h3 className="text-lg font-semibold text-slate-700 mb-3">{site.quemSomosTitulo}</h3>
          <div className="text-slate-600 leading-relaxed whitespace-pre-line mb-8">
            {site.quemSomosTexto}
          </div>
          <p className="font-semibold text-slate-700 mb-3">Nossos Pilares:</p>
          <ul className="space-y-3">
            {site.pilares.map((pilar) => (
              <li key={pilar.nome}>
                <span className="font-semibold text-slate-700">{pilar.nome}:</span>{" "}
                <span className="text-slate-600">{pilar.descricao}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* FALE COMIGO */}
        <section aria-labelledby="fale-titulo">
          <h2 id="fale-titulo" className="text-2xl font-bold text-slate-800 mb-4">
            Fale comigo:
          </h2>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
          >
            CONVERSAR AGORA
          </a>
        </section>

        {/* INFORMAÇÕES LEGAIS */}
        <section aria-labelledby="legais-titulo" className="bg-slate-50 rounded-xl p-6">
          <h2 id="legais-titulo" className="text-xl font-bold text-slate-800 mb-4">
            Informações Legais
          </h2>
          <ul className="text-sm text-slate-600 space-y-1">
            <li><strong>Razão Social:</strong> {site.razaoSocial}</li>
            <li><strong>CNPJ:</strong> {site.cnpj}</li>
            <li><strong>Data de Abertura:</strong> {site.dataAbertura}</li>
            <li><strong>Porte:</strong> {site.porte}</li>
            <li><strong>Natureza Jurídica:</strong> {site.naturezaJuridica}</li>
            <li><strong>Opção pelo Simples Nacional:</strong> {site.simplesNacional}</li>
            <li><strong>Capital Social:</strong> {site.capitalSocial}</li>
            <li><strong>Tipo:</strong> {site.tipo}</li>
            <li><strong>Situação Cadastral:</strong> {site.situacaoCadastral}</li>
          </ul>
        </section>

        {/* POLÍTICA DE PRIVACIDADE */}
        <section aria-labelledby="privacidade-titulo" className="bg-slate-50 rounded-xl p-6">
          <h2 id="privacidade-titulo" className="text-xl font-bold text-slate-800 mb-4">
            {site.politicaPrivacidade.titulo}
          </h2>
          <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
            {site.politicaPrivacidade.conteudo}
          </div>
          <p className="mt-4 text-slate-500 text-xs">
            Para dúvidas: {site.email}
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 mt-14">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-sm text-slate-500">
          <Link href="#privacidade-titulo" className="hover:text-slate-700 underline">
            Políticas de privacidade
          </Link>
        </div>
      </footer>
    </>
  );
}
