import { createFileRoute } from "@tanstack/react-router";

import logoAsset from "../assets/vinerium.png.asset.json";
import symbolAsset from "../assets/simbolo.png.asset.json";
import heroAsset from "../assets/vinerium-hero.jpg.asset.json";
import cellarAsset from "../assets/vinerium-cellar.jpg.asset.json";
import duoAsset from "../assets/vinerium-bottle-duo.png.asset.json";
import handsAsset from "../assets/vinerium-hands.png.asset.json";
import terraceAsset from "../assets/vinerium-terrace.png.asset.json";

const whatsappNumber = "5511978476621";
const createWhatsappLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const homeLeadLink = createWhatsappLink(
  "Olá, Vinerium. Quero reivindicar o preço de distribuidor para montar meu combo.",
);
const businessLeadLink = createWhatsappLink(
  "Olá, Vinerium. Quero falar sobre condições corporativas para o meu estabelecimento.",
);
const weeklyLeadLink = createWhatsappLink(
  "Olá, Vinerium. Quero conferir as descobertas da semana e entender as opções disponíveis.",
);

const benefits = [
  { title: "Importação Oficial", text: "Procedência rastreada, nota fiscal e registro nos órgãos reguladores." },
  { title: "Curadoria Autoral", text: "Propriedades familiares e safras exclusivas, fora do circuito de massa." },
  { title: "Preço de Distribuidor", text: "Você compra direto da importação, sem o markup do varejo." },
  { title: "Entrega Brasil", text: "Envio em caixas técnicas com colmeia amortecedora anti-impacto." },
];

const purchaseModes = [
  {
    eyebrow: "Para consumo em casa",
    title: "Combos inteligentes para elevar a mesa",
    image: duoAsset.url,
    points: [
      "Seleções pensadas para jantares e reservas particulares.",
      "Condições de lote em combos de 2, 4 e 6 garrafas.",
      "Atendimento consultivo no WhatsApp com entrega direta.",
    ],
    href: homeLeadLink,
    cta: "Quero meu combo",
  },
  {
    eyebrow: "Para estabelecimentos",
    title: "Portfólio autoral para restaurantes, adegas, empórios e hotéis",
    image: terraceAsset.url,
    points: [
      "Atendimento comercial dedicado para pedidos recorrentes e em volume.",
      "Rótulos de tiragem limitada fora do circuito das grandes redes.",
      "Procedência oficial, nota fiscal e logística nacional protegida.",
    ],
    href: businessLeadLink,
    cta: "Quero atendimento B2B",
  },
];

const retailTruths = [
  {
    myth: "Uma boa experiência precisa custar uma fortuna.",
    truth: "No varejo, o valor infla com prateleira física, cadeia longa de intermediários e taxas abusivas de aplicativos.",
  },
  {
    myth: "Opções industriais resolvem a mesa ou o cardápio.",
    truth: "Lotes em massa entregam pouca personalidade e empobrecem a experiência gastronômica do cliente e do convidado.",
  },
  {
    myth: "Todos os fornecedores entregam a mesma coisa.",
    truth: "Pequenas produções europeias e safras limitadas nunca chegam às gôndolas comuns por falta de apelo de volume.",
  },
];

const testimonials = [
  {
    quote:
      "Consegui montar um combo de importados por um valor excelente para a minha casa. Veio super bem embalado e a qualidade na mesa, respaldada pela curadoria deles, foi espetacular.",
    author: "Ricardo S.",
    role: "Advogado · Consumidor final",
  },
  {
    quote:
      "Colocamos os rótulos de tiragem limitada da Vinerium na carta do nosso restaurante e a percepção de valor dos clientes foi imediata. Paramos de queimar margem com produtos que todo supermercado vende.",
    author: "Augusto M.",
    role: "Sócio-proprietário de restaurante",
  },
  {
    quote:
      "O atendimento pelo WhatsApp resolve tudo. Para o meu empório, consigo negociar direto com a equipe, eles validam o estoque e geram o pedido de forma segura pelo sistema.",
    author: "Letícia M.",
    role: "Empresária · Dona de adega",
  },
];

const steps = [
  { index: "01", title: "Atendimento direto", text: "Você inicia a conversa no WhatsApp e informa se a necessidade é para casa ou CNPJ." },
  { index: "02", title: "Apresentação das descobertas", text: "A equipe apresenta combos temáticos ou tabela de volume, contextualizando origem, safra e proposta." },
  { index: "03", title: "Confraria VIP", text: "Ao fechar o primeiro lote, você entra na comunidade com alertas de tiragens limitadas e conteúdo semanal." },
  { index: "04", title: "Link de pagamento seguro", text: "O pedido é gerado no sistema oficial da Vinerium e enviado em link criptografado." },
  { index: "05", title: "Envio de alta proteção", text: "Garrafas seguem em caixas técnicas com colmeias amortecedoras até a entrega." },
];

const comparisonRows = [
  { label: "Pequenas produções europeias", common: "Não possui", retail: "Raro", vinerium: "Exclusividade e curadoria" },
  { label: "Preço direto de importação", common: "Margens infladas", retail: "Markup alto de gôndola", vinerium: "Condições de distribuidor" },
  { label: "Embalagem anti-impacto", common: "Caixas comuns", retail: "Sacolas ou embalagem simples", vinerium: "Colmeia técnica padrão" },
  { label: "Atendimento consultivo", common: "Sem suporte", retail: "Não existe", vinerium: "Conversa direta no WhatsApp" },
];

const faqs = [
  {
    question: "O que diferencia a curadoria da Vinerium de uma loja comum?",
    answer:
      "Enquanto lojas comuns compram grandes volumes industriais focando apenas em giro, a Vinerium seleciona propriedades familiares, safras exclusivas e rótulos ricos em história. A proposta une curadoria e distribuição para entregar esses tesouros sem o markup abusivo do mercado.",
  },
  {
    question: "Como funciona a Comunidade VIP do WhatsApp?",
    answer:
      "Ao se tornar cliente, você entra para uma lista seleta onde a Vinerium compartilha conteúdos de repertório gastronômico, dicas de harmonização e acesso antecipado a rótulos de tiragem limitada.",
  },
  {
    question: "Como funciona a segurança da compra pelo WhatsApp?",
    answer:
      "O atendimento é feito pela equipe humana para garantir consultoria de alto nível, enquanto o fechamento e o pagamento são processados por link oficial seguro gerado no sistema criptografado da plataforma da Vinerium.",
  },
  {
    question: "Os produtos possuem garantia de procedência e nota fiscal?",
    answer:
      "Sim. Todos os rótulos são importados oficialmente, possuem registro nos órgãos reguladores e seguem com nota fiscal eletrônica, tanto para consumidor final quanto para entrada de estoque no CNPJ.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vinerium | Rótulos importados a preço de distribuidor" },
      {
        name: "description",
        content:
          "Compre rótulos importados exclusivos direto da importação oficial da Vinerium. Atendimento consultivo no WhatsApp para casa, restaurantes, adegas e hotéis.",
      },
      { property: "og:title", content: "Vinerium | Rótulos importados a preço de distribuidor" },
      {
        property: "og:description",
        content:
          "Curadoria autoral, preço de distribuidor e entrega para todo o Brasil. Fale com a equipe da Vinerium pelo WhatsApp.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroAsset.url },
      { name: "twitter:title", content: "Vinerium | Rótulos importados a preço de distribuidor" },
      { name: "twitter:description", content: "Curadoria fina, preço de distribuidor e atendimento direto pelo WhatsApp." },
      { name: "twitter:image", content: heroAsset.url },
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
            <a href="#perfis" className="hover:text-primary">Perfis de compra</a>
            <a href="#curadoria" className="hover:text-primary">Curadoria</a>
            <a href="#como-funciona" className="hover:text-primary">Como funciona</a>
            <a href="#faq" className="hover:text-primary">FAQ</a>
          </nav>
          <a
            href={weeklyLeadLink}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-10 items-center justify-center rounded-none border border-primary bg-primary px-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-[color:var(--color-brand-wine-strong)] sm:inline-flex"
          >
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* Hero banner */}
      <section id="top" className="relative isolate overflow-hidden">
        <div className="relative min-h-[460px] w-full h-[78svh] lg:h-[88svh]">
          <img
            src={heroAsset.url}
            alt="Adega Vinerium"
            className="absolute inset-0 h-full w-full object-cover object-[70%_center] sm:object-center"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/40 sm:bg-gradient-to-r sm:from-black/80 sm:via-black/55 sm:to-black/15" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 py-12 sm:px-8">
            <div className="max-w-2xl text-white">
              <h1 className="font-display text-[2.25rem] leading-[1.05] sm:text-6xl lg:text-7xl">
                Adquira rótulos importados exclusivos a preço de distribuidor.
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-6 text-white/85 sm:mt-6 sm:text-lg sm:leading-7">
                Seja para abastecer a sua reserva particular em casa ou para elevar a margem do seu estabelecimento.
                Compre direto da importação oficial da Vinerium e pule os intermediários do varejo tradicional.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <a
                  href={weeklyLeadLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-none bg-primary px-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-[color:var(--color-brand-wine-strong)] sm:w-auto sm:px-8 sm:text-xs sm:tracking-[0.22em]"
                >
                  Falar no WhatsApp
                </a>
                <a
                  href="#perfis"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-none border border-white/70 px-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-foreground sm:w-auto sm:px-8 sm:text-xs sm:tracking-[0.22em]"
                >
                  Ver perfis de compra
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-10 sm:px-8 md:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="flex flex-col gap-2 border-l-2 border-primary/70 pl-4">
              <p className="font-display text-lg leading-tight text-foreground">{b.title}</p>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Perfis (category cards) */}
      <section id="perfis" className="bg-background py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            
            <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-5xl">
              Escolha o caminho que combina com você
            </h2>
            <p className="mt-4 text-sm text-muted-foreground sm:text-lg">
              O atendimento é diferenciado por perfil: combos para a sua casa ou condições corporativas para o seu
              estabelecimento.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 lg:grid-cols-2">
            {purchaseModes.map((mode) => (
              <article key={mode.title} className="group flex flex-col overflow-hidden border border-border bg-card">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary p-4 sm:p-6">
                  <img
                    src={mode.image}
                    alt={mode.title}
                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
                  
                  <h3 className="font-display text-xl leading-tight text-foreground sm:text-3xl">{mode.title}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
                    {mode.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={mode.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex min-h-12 w-full items-center justify-center rounded-none bg-primary px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-[color:var(--color-brand-wine-strong)] sm:px-6 sm:text-xs sm:tracking-[0.22em]"
                  >
                    {mode.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Verdade do varejo - faixa vinho */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:gap-12 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:py-24">
          <div className="relative w-full max-w-md">
            <img src={handsAsset.url} alt="Brinde com vinho" className="h-auto w-full object-contain" />
          </div>
          <div>
            <h2 className="mt-3 font-display text-3xl leading-tight sm:text-5xl">
              Você está pagando caro por menos história.
            </h2>
            <div className="mt-8 space-y-6">
              {retailTruths.map((t) => (
                <div key={t.myth} className="border-t border-white/20 pt-5">
                  <p className="font-display text-xl leading-snug">{t.myth}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">{t.truth}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curadoria / bastidores */}
      <section id="curadoria" className="bg-background py-14 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <div className="relative w-full">
            <img src={cellarAsset.url} alt="Bastidores da curadoria Vinerium" className="h-auto w-full object-contain" />
          </div>
          <div>
            
            <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-5xl">
              Garimpamos propriedades familiares na Europa para chegar até a sua taça.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              A Vinerium nasceu para conectar o paladar brasileiro às pequenas produções europeias que normalmente não
              alcançam as gôndolas comuns. Negociamos diretamente com vinícolas familiares, validamos cada safra e
              trazemos para o Brasil sob importação oficial.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Mais do que um e-commerce: somos curadores e distribuidores. É essa combinação que permite oferecer
              tiragens exclusivas a preço justo, com a alma da viticultura preservada.
            </p>
            <a
              href={weeklyLeadLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-none border border-primary px-8 text-xs font-semibold uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Conhecer a curadoria da semana
            </a>
          </div>
        </div>
      </section>

      {/* Prova social */}
      <section className="bg-secondary py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            
            <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-5xl">
              Curadoria reconhecida por quem entende de mesa e de cardápio
            </h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.author} className="flex h-full flex-col gap-6 border border-border bg-card p-8">
                <span aria-hidden className="font-display text-5xl leading-none text-primary">“</span>
                <blockquote className="flex-1 text-base leading-relaxed text-foreground/90">{t.quote}</blockquote>
                <figcaption className="border-t border-border pt-4">
                  <p className="font-display text-lg text-foreground">{t.author}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="bg-background py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              
              <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-5xl">
                Cinco passos do primeiro contato à sua adega
              </h2>
            </div>
            <a
              href={weeklyLeadLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-none bg-primary px-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-[color:var(--color-brand-wine-strong)] sm:w-auto sm:px-8 sm:text-xs sm:tracking-[0.22em]"
            >
              Começar pelo WhatsApp
            </a>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((s) => (
              <li key={s.index} className="flex flex-col gap-3 border-t-2 border-primary bg-card p-6">
                <span className="font-display text-3xl text-primary">{s.index}</span>
                <p className="font-display text-xl leading-snug text-foreground">{s.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Comparação */}
      <section className="bg-card py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            
            <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-5xl">
              A diferença está em cada etapa
            </h2>
          </div>
          <div className="mt-12 overflow-x-auto border border-border bg-background">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-xs uppercase tracking-[0.18em] text-foreground">
                  <th className="px-6 py-4 font-semibold">Critério</th>
                  <th className="px-6 py-4 font-semibold">Atacado comum</th>
                  <th className="px-6 py-4 font-semibold">Varejo tradicional</th>
                  <th className="bg-primary px-6 py-4 font-semibold text-primary-foreground">Vinerium</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-t border-border">
                    <td className="px-6 py-5 font-display text-base text-foreground">{row.label}</td>
                    <td className="px-6 py-5 text-muted-foreground">{row.common}</td>
                    <td className="px-6 py-5 text-muted-foreground">{row.retail}</td>
                    <td className="bg-primary/5 px-6 py-5 font-semibold text-primary">{row.vinerium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative isolate overflow-hidden bg-brand-night text-white">
        <img
          src={terraceAsset.url}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 py-24 text-center sm:px-8">
          <img src={symbolAsset.url} alt="" aria-hidden className="h-12 w-auto opacity-90" />
          <h2 className="mt-6 font-display text-3xl leading-tight sm:text-6xl">
            Adquira hoje a preço de distribuidor.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Fale com nossa equipe pelo WhatsApp e conheça os combos disponíveis ou as condições para o seu
            estabelecimento.
          </p>
          <a
            href={weeklyLeadLink}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex min-h-14 w-full items-center justify-center rounded-none bg-primary px-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-[color:var(--color-brand-wine-strong)] sm:w-auto sm:px-12 sm:text-sm sm:tracking-[0.24em]"
          >
            Falar no WhatsApp agora
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-background py-14 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-center">
            
            <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-5xl">
              Tudo o que você precisa saber antes de falar com a gente
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
              Distribuição e curadoria de rótulos finos importados diretamente para a sua casa ou estabelecimento.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white">Contato</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={weeklyLeadLink} target="_blank" rel="noreferrer" className="hover:text-white">
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
              <li><a href="#perfis" className="hover:text-white">Perfis de compra</a></li>
              <li><a href="#curadoria" className="hover:text-white">Curadoria</a></li>
              <li><a href="#como-funciona" className="hover:text-white">Como funciona</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:px-8">
            <p>Vinerium © 2026 — Distribuição e Curadoria de Rótulos Finos</p>
            <p>Venda proibida para menores de 18 anos. Consuma com responsabilidade.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp (mobile) */}
      <a
        href={weeklyLeadLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex min-h-14 items-center justify-center rounded-full bg-primary px-6 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground shadow-2xl shadow-black/30 transition-transform hover:-translate-y-0.5 sm:hidden"
      >
        WhatsApp
      </a>
    </main>
  );
}
