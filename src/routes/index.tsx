import { createFileRoute } from "@tanstack/react-router";

import logoAsset from "../assets/vinerium.png.asset.json";
import symbolAsset from "../assets/simbolo.png.asset.json";
import heroImg from "../assets/vinerium-hero-wide.jpg";
import cellarAsset from "../assets/vinerium-cellar.jpg.asset.json";
import handsAsset from "../assets/vinerium-hands.png.asset.json";
import terraceAsset from "../assets/vinerium-terrace.png.asset.json";
import comboHomeImg from "../assets/vinerium-bottle-combo-home.png";
import comboBusinessImg from "../assets/vinerium-bottle-combo-business.png";

const whatsappNumber = "5511978476621";
const createWhatsappLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const ctaPrimaryLink = createWhatsappLink(
  "Olá, Vinerium. Quero conferir as condições de atacado para compras em volume.",
);
const ctaWholesaleLink = createWhatsappLink(
  "Olá, Vinerium. Quero solicitar condições de atacado.",
);
const ctaTalkLink = createWhatsappLink(
  "Olá, Vinerium. Quero falar com a equipe sobre vinhos importados.",
);

const whyVinerium = [
  {
    title: "Condições de atacado",
    text: "Atendimento para pedidos em volume, combos comerciais, compras recorrentes, kits corporativos e seleções especiais.",
  },
  {
    title: "Curadoria premium",
    text: "Rótulos importados, pequenas produções, vinhos com história, origem e perfil comercial adequado para diferentes tipos de operação.",
  },
  {
    title: "Compra com segurança",
    text: "Pedidos formalizados, pagamento seguro, emissão de nota fiscal e envio nacional com embalagem reforçada para garrafas de vidro.",
  },
  {
    title: "Para quem é",
    text: "Restaurantes, empórios, adegas, hotéis, bares, mercados especiais, compradores corporativos, empresários e clientes que desejam comprar em volume.",
  },
];

const audiences = [
  {
    title: "Restaurantes e bares",
    text: "Para operações que desejam montar ou renovar a carta de vinhos com rótulos importados, boa apresentação comercial e maior percepção de valor para o cliente final.",
  },
  {
    title: "Empórios e adegas",
    text: "Para lojas que precisam de um mix mais refinado, com vinhos que fogem das opções industriais de massa e ajudam a diferenciar a prateleira.",
  },
  {
    title: "Hotéis, pousadas e eventos",
    text: "Para operações que precisam de fornecimento organizado, rótulos bem selecionados e apresentação compatível com experiências de maior padrão.",
  },
  {
    title: "Compras corporativas",
    text: "Para empresas que buscam kits, presentes, ações de relacionamento e seleções especiais para clientes, parceiros e colaboradores.",
  },
  {
    title: "Compradores em volume",
    text: "Para empresários e clientes que desejam abastecer adega, comprar caixas fechadas, montar seleções especiais ou aproveitar condições comerciais melhores.",
  },
];

const problemAvoid = [
  "Rótulos comuns, sem diferenciação real",
  "Fornecedores sem clareza de origem",
  "Mix parecido com o do varejo tradicional",
  "Dificuldade para montar uma seleção coerente",
  "Compra sem suporte técnico ou comercial",
  "Baixa percepção de valor na ponta",
  "Risco de pagar caro por produtos sem exclusividade",
];

const problemGain = [
  "Curadoria de vinhos importados",
  "Rótulos com origem, história e procedência",
  "Atendimento comercial direto",
  "Condições de atacado para compras em volume",
  "Pedido formalizado com nota fiscal",
  "Mix com maior potencial de diferenciação",
  "Envio nacional com proteção reforçada",
];

const solutionPillars = [
  {
    number: "1",
    title: "Procedência",
    text: "Rótulos importados de forma oficial, com origem rastreável, regularidade fiscal e segurança para quem precisa comprar com confiança.",
  },
  {
    number: "2",
    title: "Curadoria",
    text: "Seleção orientada por país, região, estilo, faixa de preço, ocasião de uso e perfil comercial de cada comprador.",
  },
  {
    number: "3",
    title: "Condição de atacado",
    text: "Atendimento para pedidos em volume, combos comerciais, compras recorrentes, kits corporativos e seleções especiais.",
  },
];

const differentials = [
  { title: "Rótulos fora do óbvio", text: "Seleção que valoriza pequenas produções, regiões tradicionais e vinhos com maior repertório comercial." },
  { title: "Preço de atacado para volume", text: "Condições comerciais para quem compra caixas, combos, kits, lotes ou seleções especiais." },
  { title: "Atendimento direto e consultivo", text: "A equipe orienta a escolha de acordo com o perfil do negócio, público, ticket, ocasião ou objetivo comercial." },
  { title: "Compra segura e formalizada", text: "Pedido estruturado, pagamento seguro, emissão de nota fiscal e processo organizado do atendimento à expedição." },
  { title: "Envio nacional com proteção", text: "Garrafas enviadas em embalagens reforçadas, com proteção adequada para reduzir riscos no transporte." },
  { title: "Portfólio com maior percepção de valor", text: "Vinhos importados que ajudam a sair da guerra de preço e construir uma seleção mais qualificada." },
];

const categories = [
  { title: "Vinhos tintos importados", text: "Rótulos para cartas, prateleiras, adegas, kits e seleções com maior valor percebido." },
  { title: "Vinhos brancos e rosés", text: "Opções para quem busca frescor, versatilidade e combinações mais leves." },
  { title: "Espumantes", text: "Seleções para celebrações, eventos, presentes corporativos e experiências premium." },
  { title: "Combos comerciais", text: "Kits por origem, estilo, faixa de preço ou ocasião, pensados para facilitar a compra em volume." },
  { title: "Rótulos premium", text: "Vinhos de maior valor agregado para compor uma seleção mais sofisticada." },
  { title: "Kits corporativos", text: "Soluções para relacionamento empresarial, presentes, datas comemorativas e ações comerciais." },
  { title: "Caixas e lotes especiais", text: "Condições para compradores que desejam adquirir maior volume com seleção orientada." },
];

const steps = [
  { index: "01", title: "Solicitação de atendimento", text: "Você entra em contato com a equipe da Vinerium pelo WhatsApp." },
  { index: "02", title: "Entendimento da necessidade", text: "Identificamos objetivo da compra, volume desejado, faixa de investimento e perfil dos rótulos mais adequados." },
  { index: "03", title: "Apresentação da curadoria", text: "Enviamos sugestões de rótulos, combos, caixas ou seleções especiais de acordo com a sua necessidade." },
  { index: "04", title: "Condição comercial", text: "A equipe apresenta as condições disponíveis para o volume solicitado, conforme estoque e composição do pedido." },
  { index: "05", title: "Formalização do pedido", text: "O pedido é gerado pelo sistema oficial da Vinerium, com pagamento seguro e emissão de nota fiscal." },
  { index: "06", title: "Separação e embalagem", text: "As garrafas são separadas, embaladas com proteção adequada e preparadas para envio." },
  { index: "07", title: "Expedição e acompanhamento", text: "Você recebe as informações de envio e acompanhamento do pedido." },
];

const comparisonRows = [
  { label: "Curadoria de rótulos", generic: "Limitada", retail: "Baixa diferenciação", vinerium: "Seleção criteriosa" },
  { label: "Condições de atacado", generic: "Variável", retail: "Pouco flexível", vinerium: "Conforme volume e seleção" },
  { label: "Procedência e nota fiscal", generic: "Depende do fornecedor", retail: "Sim, mas com mix comum", vinerium: "Sim, com compra formalizada" },
  { label: "Rótulos fora do varejo comum", generic: "Nem sempre", retail: "Raramente", vinerium: "Sim" },
  { label: "Atendimento consultivo", generic: "Limitado", retail: "Praticamente inexistente", vinerium: "Direto pelo WhatsApp" },
  { label: "Compra em volume", generic: "Nem sempre estruturada", retail: "Pouco personalizada", vinerium: "Sim" },
  { label: "Embalagem para envio", generic: "Nem sempre adequada", retail: "Modelo padrão", vinerium: "Proteção reforçada" },
  { label: "Diferenciação na ponta", generic: "Baixa", retail: "Baixa", vinerium: "Alta" },
];

const applications = [
  { title: "Carta de vinhos para restaurantes", text: "Seleção de rótulos importados para fortalecer a experiência gastronômica e ampliar percepção de valor." },
  { title: "Prateleira premium para empórios e adegas", text: "Mix com vinhos menos óbvios, voltado para clientes que buscam descoberta, origem e qualidade." },
  { title: "Kits corporativos", text: "Combinações especiais para empresas que querem presentear clientes, parceiros ou colaboradores." },
  { title: "Eventos e experiências", text: "Fornecimento para ocasiões corporativas, ações de relacionamento e ativações gastronômicas." },
  { title: "Abastecimento recorrente", text: "Compra planejada para quem precisa de previsibilidade, atendimento direto e reposição organizada." },
  { title: "Adega particular e compras maiores", text: "Seleções para quem deseja comprar caixas, montar uma reserva ou aproveitar condições melhores em maior volume." },
];

const trustGuarantees = [
  "Importação oficial",
  "Nota fiscal eletrônica",
  "Pedido formalizado",
  "Pagamento seguro",
  "Atendimento humano",
  "Envio com rastreio",
  "Embalagem reforçada",
  "Suporte pelo WhatsApp",
  "Seleção orientada por curadoria",
];

const confrariaBenefits = [
  "Alertas de novos rótulos",
  "Seleções especiais da semana",
  "Condições para compras em volume",
  "Combos temáticos",
  "Conteúdos de harmonização e repertório",
  "Acesso antecipado a oportunidades limitadas",
];

const faqs = [
  { question: "Preciso comprar com CNPJ para ter condição de atacado?", answer: "Não necessariamente. A Vinerium atende empresários, compradores em volume, restaurantes, empórios, adegas, hotéis, compras corporativas e clientes que desejam adquirir maior quantidade. As condições comerciais são avaliadas conforme volume, seleção de rótulos e disponibilidade de estoque." },
  { question: "A Vinerium trabalha com preço de atacado?", answer: "Sim. A Vinerium oferece condições comerciais para compras em volume, de acordo com a quantidade, composição do pedido, disponibilidade de estoque e perfil da seleção." },
  { question: "Os produtos possuem nota fiscal?", answer: "Sim. Os pedidos são formalizados pelo sistema oficial da Vinerium e acompanham nota fiscal eletrônica." },
  { question: "Posso solicitar uma seleção personalizada?", answer: "Sim. O atendimento pode orientar a seleção de rótulos de acordo com o perfil do seu negócio, evento, presente, adega, carta, prateleira ou objetivo de compra." },
  { question: "A entrega é nacional?", answer: "Sim. A Vinerium realiza envio nacional, conforme disponibilidade logística para a região atendida." },
  { question: "Como as garrafas são enviadas?", answer: "As garrafas são embaladas em caixas reforçadas, com proteção adequada para transporte de vidro." },
  { question: "A Vinerium atende pedidos corporativos e presentes empresariais?", answer: "Sim. A Vinerium pode estruturar kits e seleções especiais para ações corporativas, relacionamento com clientes, parceiros e colaboradores." },
  { question: "O atendimento é feito por WhatsApp?", answer: "Sim. O atendimento comercial pode ser feito pelo WhatsApp, com formalização posterior do pedido pelo sistema oficial da Vinerium." },
  { question: "A Vinerium trabalha apenas com grandes volumes?", answer: "Não. A proposta é oferecer condições comerciais conforme o volume e a seleção. O atendimento pode orientar desde caixas, combos e kits até pedidos maiores e recorrentes." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vinerium | Vinhos importados a preço de atacado" },
      {
        name: "description",
        content:
          "Curadoria e distribuição de vinhos importados com preço de atacado para restaurantes, empórios, adegas, hotéis, corporativos e compradores em volume.",
      },
      { property: "og:title", content: "Vinerium | Vinhos importados a preço de atacado" },
      {
        property: "og:description",
        content:
          "Curadoria de pequenas produções importadas, procedência oficial e condições comerciais para quem compra em volume.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
      { name: "twitter:title", content: "Vinerium | Vinhos importados a preço de atacado" },
      { name: "twitter:description", content: "Curadoria, procedência e preço de atacado para compras em volume." },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Vinerium" className="h-10 w-auto sm:h-12" loading="eager" />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium tracking-wide text-foreground/80 lg:flex">
            <a href="#por-que" className="hover:text-primary">Por que Vinerium</a>
            <a href="#para-quem" className="hover:text-primary">Para quem é</a>
            <a href="#categorias" className="hover:text-primary">Categorias</a>
            <a href="#como-funciona" className="hover:text-primary">Como funciona</a>
            <a href="#faq" className="hover:text-primary">FAQ</a>
          </nav>
          <a
            href={ctaPrimaryLink}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-10 items-center justify-center rounded-none border border-primary bg-primary px-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-[color:var(--color-brand-wine-strong)] sm:inline-flex"
          >
            Conferir no WhatsApp
          </a>
        </div>
      </header>

      {/* BLOCO 1 — HERO */}
      <section id="top" className="relative isolate overflow-hidden">
        <div className="relative min-h-[460px] w-full h-[78svh] lg:h-[88svh]">
          <img
            src={heroImg}
            alt="Adega Vinerium"
            className="absolute inset-0 h-full w-full object-cover object-[80%_center] sm:object-center"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/40 sm:bg-gradient-to-r sm:from-black/80 sm:via-black/55 sm:to-black/15" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 py-12 sm:px-8">
            <div className="max-w-2xl text-white">
              <h1 className="font-display text-[2.25rem] leading-[1.05] sm:text-6xl lg:text-7xl">
                Vinhos importados de <em className="not-italic font-bold text-white">pequenas produções</em> com <em className="not-italic italic">preço de atacado</em> para quem compra em <em className="not-italic font-bold text-white">volume</em>
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-6 text-white/85 sm:mt-6 sm:text-lg sm:leading-7">
                A Vinerium conecta restaurantes, empórios, adegas, hotéis, bares, compradores corporativos,
                empresários e compradores recorrentes a uma curadoria de vinhos importados com procedência,
                seleção criteriosa e condições comerciais para compras em volume.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <a
                  href={ctaPrimaryLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-none bg-primary px-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-[color:var(--color-brand-wine-strong)] sm:w-auto sm:px-8 sm:text-xs sm:tracking-[0.22em]"
                >
                  Conferir condições no WhatsApp
                </a>
                <a
                  href="#por-que"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-none border border-white/70 px-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-foreground sm:w-auto sm:px-8 sm:text-xs sm:tracking-[0.22em]"
                >
                  Como funciona
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 2 — VSL */}
      <section className="bg-[color:var(--color-brand-night)] py-14 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl leading-tight text-white sm:text-5xl">
              Assista ao vídeo e entenda como comprar vinhos importados com <em className="not-italic font-bold text-[color:var(--color-brand-sunset)]">curadoria, procedência e preço de atacado</em>
            </h2>
          </div>

          <div className="mt-10 sm:mt-14">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-black/40">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white/90">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm sm:h-20 sm:w-20">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 sm:h-9 sm:w-9">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm font-medium tracking-wide text-white/70 sm:text-base">Vídeo em breve</p>
              </div>
            </div>
            <p className="mt-6 text-center text-sm leading-relaxed text-white/70 sm:text-base">
              Neste vídeo, explicamos como a Vinerium seleciona rótulos importados, estrutura condições comerciais
              para compras em volume e ajuda restaurantes, empórios, adegas, hotéis, empresas e compradores recorrentes
              a acessarem vinhos originais com mais segurança, diferenciação e valor percebido.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href={ctaTalkLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-none bg-primary px-8 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-[color:var(--color-brand-wine-strong)]"
              >
                Quero falar com a Vinerium no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 3 — POR QUE COMPRAR */}
      <section id="por-que" className="bg-background py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl leading-tight text-foreground sm:text-5xl">
              Uma forma mais <em className="not-italic text-primary">segura e inteligente</em> de comprar vinhos importados <em className="italic">em volume</em>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Aqui, você não compra apenas garrafas. Você acessa rótulos originais, importados de forma oficial, com
              nota fiscal, segurança comercial e uma seleção pensada para quem busca diferenciação, margem e
              percepção de valor.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-4">
            {whyVinerium.map((w) => (
              <div key={w.title} className="flex flex-col gap-3 border-l-2 border-primary/70 bg-card p-6">
                <p className="font-display text-xl leading-tight text-foreground">{w.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{w.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <a
              href={ctaWholesaleLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-none bg-primary px-8 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-[color:var(--color-brand-wine-strong)]"
            >
              Solicitar condições de atacado
            </a>
          </div>
        </div>
      </section>

      {/* BLOCO 4 — PARA QUEM É */}
      <section id="para-quem" className="bg-secondary py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl leading-tight text-foreground sm:text-5xl">
              Uma solução para quem precisa comprar <em className="not-italic text-primary">vinhos melhores</em>, em volume, com <em className="italic">segurança</em> e <em className="not-italic text-primary">preço de atacado</em>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              A Vinerium atende quem busca um fornecedor confiável, com curadoria pronta e rótulos capazes de elevar
              a percepção de valor da carta, da prateleira, dos kits corporativos ou do estoque particular.
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {audiences.map((a) => (
              <article key={a.title} className="flex flex-col gap-3 border border-border bg-card p-7">
                <p className="font-display text-2xl leading-tight text-foreground">{a.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{a.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <a
              href={ctaWholesaleLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-none border border-primary px-8 text-xs font-semibold uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Solicitar condições de atacado
            </a>
          </div>
        </div>
      </section>

      {/* BLOCO 5 — PROBLEMA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:gap-12 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:py-24">
          <div className="relative w-full max-w-md">
            <img src={handsAsset.url} alt="Brinde com vinho" className="h-auto w-full object-contain" />
          </div>
          <div>
            <h2 className="font-display text-3xl leading-tight sm:text-5xl">
              O mercado está cheio de <em className="italic">vinhos genéricos</em>. A sua seleção <em className="not-italic font-bold text-white">não precisa ser mais do mesmo</em>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/85 sm:text-lg">
              Muitos compradores acabam presos aos mesmos rótulos encontrados em supermercados, grandes redes ou
              marketplaces de volume. O resultado é uma carta, uma prateleira ou uma seleção sem diferenciação real,
              baixa percepção de exclusividade e dificuldade para justificar valor.
            </p>
            <p className="mt-3 text-base leading-relaxed text-white/85 sm:text-lg">
              A Vinerium nasce para resolver esse problema com curadoria, procedência, atendimento direto e
              condições comerciais para quem compra em maior volume.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">O que você evita</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/90 sm:text-base">
                  {problemAvoid.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span aria-hidden className="mt-2 inline-block h-1 w-3 shrink-0 bg-white/60" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">O que você passa a ter</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/90 sm:text-base">
                  {problemGain.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 6 — SOLUÇÃO */}
      <section className="bg-background py-14 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <div className="relative w-full">
            <img src={cellarAsset.url} alt="Bastidores da curadoria Vinerium" className="h-auto w-full object-contain" />
          </div>
          <div>
            <h2 className="font-display text-3xl leading-tight text-foreground sm:text-5xl">
              Curadoria de vinhos importados para quem busca <em className="not-italic text-primary">procedência, diferenciação e preço de atacado</em>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              A Vinerium atua como uma parceira comercial para quem deseja comprar vinhos importados de forma mais
              estratégica. Nosso foco está em unir três pilares.
            </p>
            <div className="mt-8 space-y-6">
              {solutionPillars.map((p) => (
                <div key={p.title} className="border-t border-border pt-5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-2xl text-primary">{p.number}.</span>
                    <p className="font-display text-xl text-foreground">{p.title}</p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">{p.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-base italic leading-relaxed text-foreground/80 sm:text-lg">
              A Vinerium não trabalha para entregar apenas preço. Trabalha para entregar preço com curadoria,
              segurança e valor percebido.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCO 7 — DIFERENCIAIS */}
      <section className="bg-card py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl leading-tight text-foreground sm:text-5xl">
              Por que comprar vinhos importados com a <em className="not-italic italic text-primary">Vinerium</em>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {differentials.map((d) => (
              <div key={d.title} className="flex flex-col gap-3 border border-border bg-background p-7">
                <p className="font-display text-xl leading-tight text-foreground">{d.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 8 — CATEGORIAS */}
      <section id="categorias" className="bg-background py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl leading-tight text-foreground sm:text-5xl">
              Escolha rótulos de acordo com o <em className="not-italic text-primary">seu objetivo de compra</em>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Combinamos diferentes categorias para atender pedidos pontuais, recorrentes, corporativos ou
              seleções especiais.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <div key={c.title} className="flex flex-col gap-3 border-t-2 border-primary bg-card p-7">
                <p className="font-display text-xl leading-tight text-foreground">{c.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2">
            <img src={comboHomeImg} alt="Combo Vinerium" className="w-full object-contain" />
            <img src={comboBusinessImg} alt="Combo corporativo Vinerium" className="w-full object-contain" />
          </div>
        </div>
      </section>

      {/* BLOCO 9 — COMO FUNCIONA */}
      <section id="como-funciona" className="bg-secondary py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl leading-tight text-foreground sm:text-5xl">
              Do <em className="not-italic text-primary">atendimento no WhatsApp</em> ao <em className="not-italic text-primary">envio do pedido</em>
            </h2>
          </div>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {steps.map((s) => (
              <li key={s.index} className="flex flex-col gap-3 border-t-2 border-primary bg-card p-6">
                <span className="font-display text-3xl text-primary">{s.index}</span>
                <p className="font-display text-xl leading-snug text-foreground">{s.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex justify-center sm:mt-16">
            <a
              href={ctaTalkLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-none bg-primary px-8 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-[color:var(--color-brand-wine-strong)]"
            >
              Falar com a Vinerium no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* BLOCO 10 — COMPARATIVO */}
      <section className="bg-background py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl leading-tight text-foreground sm:text-5xl">
              <em className="not-italic italic text-primary">Vinerium</em> x fornecedores genéricos x grandes redes
            </h2>
          </div>
          <div className="mt-12 overflow-x-auto border border-border">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-xs uppercase tracking-[0.18em] text-foreground">
                  <th className="px-6 py-4 font-semibold">Critério</th>
                  <th className="px-6 py-4 font-semibold">Fornecedores genéricos</th>
                  <th className="px-6 py-4 font-semibold">Grandes redes / supermercados</th>
                  <th className="bg-primary px-6 py-4 font-semibold text-primary-foreground">Vinerium</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-t border-border">
                    <td className="px-6 py-5 font-display text-base text-foreground">{row.label}</td>
                    <td className="px-6 py-5 text-muted-foreground">{row.generic}</td>
                    <td className="px-6 py-5 text-muted-foreground">{row.retail}</td>
                    <td className="bg-primary/5 px-6 py-5 font-semibold text-primary">{row.vinerium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BLOCO 11 — APLICAÇÕES */}
      <section className="bg-card py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl leading-tight text-foreground sm:text-5xl">
              Como os rótulos da <em className="not-italic italic text-primary">Vinerium</em> podem ser utilizados
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {applications.map((a) => (
              <div key={a.title} className="flex flex-col gap-3 border-l-2 border-primary bg-background p-6">
                <p className="font-display text-lg leading-tight text-foreground">{a.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 12 — CONFIANÇA */}
      <section className="bg-background py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl leading-tight text-foreground sm:text-5xl">
              <em className="not-italic text-primary">Vinhos originais</em>, compra formalizada e <em className="not-italic text-primary">suporte direto</em>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Quem compra vinho em volume precisa de mais do que boas ofertas. Precisa de procedência, segurança e
              confiança. Por isso, a Vinerium trabalha com um processo pensado para reduzir riscos e facilitar a compra.
            </p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {trustGuarantees.map((g) => (
              <div key={g} className="flex items-center gap-3 border border-border bg-card px-5 py-4">
                <span aria-hidden className="inline-block h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span className="text-sm font-medium text-foreground sm:text-base">{g}</span>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-base italic text-muted-foreground sm:text-lg">
            A compra é feita de forma simples, mas com a segurança que uma operação profissional exige.
          </p>
        </div>
      </section>

      {/* BLOCO 13 — CONFRARIA */}
      <section className="bg-primary text-primary-foreground py-14 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">Confraria Vinerium</p>
            <h2 className="mt-3 font-display text-3xl leading-tight sm:text-5xl">
              <em className="not-italic font-bold text-white">Acesso antecipado</em> a condições, rótulos e seleções especiais
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/85 sm:text-lg">
              Além da compra pontual, a Vinerium está estruturando um modelo de relacionamento para compradores
              recorrentes e clientes estratégicos. A Confraria Vinerium será um canal exclusivo para acompanhar
              novas chegadas, seleções especiais, condições comerciais, conteúdos de repertório e oportunidades
              de compra em volume.
            </p>
            <p className="mt-4 text-base italic leading-relaxed text-white/80 sm:text-lg">
              Mais do que uma lista de ofertas, a Confraria nasce para aproximar compradores da curadoria Vinerium.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {confrariaBenefits.map((b) => (
              <li key={b} className="border border-white/20 bg-white/5 px-5 py-4 text-sm leading-snug text-white/95 sm:text-base">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BLOCO 14 — CTA FINAL */}
      <section className="relative isolate overflow-hidden bg-brand-night text-white">
        <img src={terraceAsset.url} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 py-24 text-center sm:px-8">
          <img src={symbolAsset.url} alt="" aria-hidden className="h-12 w-auto opacity-90" />
          <h2 className="mt-6 font-display text-3xl leading-tight sm:text-6xl">
            Pronto para acessar vinhos importados com <em className="not-italic font-bold text-white">preço de atacado</em> e <em className="not-italic font-bold text-white">curadoria premium</em>?
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
            Fale com a equipe da Vinerium e solicite uma seleção de rótulos, combos, caixas ou condições comerciais
            para compras em volume. Atendemos restaurantes, bares, empórios, adegas, hotéis, mercados especiais,
            compras corporativas, empresários e compradores que buscam vinhos importados com procedência, segurança
            e diferenciação.
          </p>
          <a
            href={ctaPrimaryLink}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex min-h-14 w-full items-center justify-center rounded-none bg-primary px-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-[color:var(--color-brand-wine-strong)] sm:w-auto sm:px-12 sm:text-sm sm:tracking-[0.24em]"
          >
            Conferir condições no WhatsApp
          </a>
        </div>
      </section>

      {/* BLOCO 15 — FAQ */}
      <section id="faq" className="bg-background py-14 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl leading-tight text-foreground sm:text-5xl">
              Perguntas frequentes
            </h2>
          </div>
          <div className="mt-12 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.question} className="group py-6">
                <summary className="flex cursor-pointer items-start justify-between gap-6 font-display text-xl text-foreground marker:hidden">
                  <span>{f.question}</span>
                  <span aria-hidden className="mt-1 text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-night text-white/80">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img src={logoAsset.url} alt="Vinerium" className="h-12 w-auto brightness-0 invert" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Curadoria e distribuição de vinhos importados com preço de atacado. Atendimento para restaurantes,
              empórios, adegas, hotéis, bares, mercados especiais, compras corporativas, empresários e compradores
              em volume.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white">Contato</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={ctaTalkLink} target="_blank" rel="noreferrer" className="hover:text-white">
                  WhatsApp +55 11 97847-6621
                </a>
              </li>
              <li>
                <a href="mailto:comercial@vinerium.com.br" className="hover:text-white">
                  comercial@vinerium.com.br
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white">Navegação</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#por-que" className="hover:text-white">Por que Vinerium</a></li>
              <li><a href="#para-quem" className="hover:text-white">Para quem é</a></li>
              <li><a href="#categorias" className="hover:text-white">Categorias</a></li>
              <li><a href="#como-funciona" className="hover:text-white">Como funciona</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-6 pb-32 text-xs text-white/60 sm:flex-row sm:items-center sm:px-8 sm:pb-6">
            <p>Vinerium © 2026 — Curadoria e Distribuição de Vinhos Importados</p>
            <p>Venda e comunicação destinadas exclusivamente a maiores de 18 anos. Consuma com responsabilidade.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp (mobile) */}
      <a
        href={ctaPrimaryLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] right-5 z-50 inline-flex min-h-14 items-center justify-center rounded-full bg-primary px-6 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground shadow-2xl shadow-black/30 transition-transform hover:-translate-y-0.5 sm:hidden"
      >
        WhatsApp
      </a>
    </main>
  );
}
