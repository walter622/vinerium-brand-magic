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

const purchaseModes = [
  {
    eyebrow: "Para quem consome em casa",
    title: "Combos inteligentes para elevar a mesa sem pagar markup de varejo.",
    points: [
      "Seleções pensadas para jantares, recepções e reservas particulares.",
      "Condições de lote em combos de 2, 4 e 6 garrafas.",
      "Atendimento consultivo no WhatsApp com entrega direta na porta.",
    ],
    href: homeLeadLink,
    cta: "Quero meu combo",
  },
  {
    eyebrow: "Para restaurantes, adegas, empórios e hotéis",
    title: "Portfólio autoral para aumentar percepção de valor e margem.",
    points: [
      "Atendimento comercial dedicado para pedidos recorrentes e em maior volume.",
      "Rótulos de tiragem limitada fora do circuito comum das grandes redes.",
      "Seleção com procedência oficial, nota fiscal e logística nacional protegida.",
    ],
    href: businessLeadLink,
    cta: "Quero atendimento B2B",
  },
];

const retailTruths = [
  {
    myth: "Uma boa experiência de safra precisa custar uma fortuna.",
    truth:
      "No varejo comum, o valor costuma inflar com prateleira física, cadeia longa de intermediários e taxas abusivas de aplicativos.",
  },
  {
    myth: "Opções industriais de mercado resolvem a mesa ou o cardápio.",
    truth:
      "Lotes feitos em massa entregam pouca personalidade e empobrecem a experiência gastronômica do cliente ou do convidado.",
  },
  {
    myth: "Todos os e-commerces e fornecedores entregam a mesma coisa.",
    truth:
      "Existem pequenas produções europeias e safras limitadas que nunca chegam às gôndolas comuns por falta de apelo de volume.",
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
  {
    index: "01",
    title: "Atendimento direto",
    text: "Você inicia a conversa no WhatsApp e informa se a necessidade é para casa ou CNPJ.",
  },
  {
    index: "02",
    title: "Apresentação das descobertas",
    text: "Nossa equipe apresenta combos temáticos ou a tabela de volume, contextualizando origem, safra e proposta de cada rótulo.",
  },
  {
    index: "03",
    title: "Entrada na Confraria VIP",
    text: "Ao fechar o primeiro lote, você entra na comunidade de WhatsApp com alertas de tiragens limitadas e conteúdo semanal.",
  },
  {
    index: "04",
    title: "Link de pagamento seguro",
    text: "O pedido é gerado no sistema oficial da Vinerium e enviado em link criptografado para fechamento com segurança.",
  },
  {
    index: "05",
    title: "Envio de alta proteção",
    text: "As garrafas seguem em caixas técnicas com colmeias amortecedoras para preservar a integridade até a entrega.",
  },
];

const comparisonRows = [
  {
    label: "Pequenas produções europeias",
    commonWholesale: "Não possui",
    retail: "Raro",
    vinerium: "Exclusividade e curadoria",
  },
  {
    label: "Preço direto de importação",
    commonWholesale: "Margens infladas por marcas",
    retail: "Markup alto de gôndola",
    vinerium: "Condições de distribuidor",
  },
  {
    label: "Embalagem especial anti-impacto",
    commonWholesale: "Caixas comuns",
    retail: "Sacolas ou embalagem simples",
    vinerium: "Colmeia técnica padrão",
  },
  {
    label: "Atendimento consultivo direto",
    commonWholesale: "Sem suporte",
    retail: "Não existe",
    vinerium: "Conversa direta no WhatsApp",
  },
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
          "Landing page da Vinerium para consumidores e estabelecimentos que buscam rótulos importados exclusivos, curadoria autoral e atendimento direto pelo WhatsApp.",
      },
      { property: "og:title", content: "Vinerium | Rótulos importados a preço de distribuidor" },
      {
        property: "og:description",
        content:
          "Compre direto da importação oficial da Vinerium, monte seu combo e fale com a equipe pelo WhatsApp para casa ou negócio.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroAsset.url },
      { name: "twitter:title", content: "Vinerium | Rótulos importados a preço de distribuidor" },
      {
        name: "twitter:description",
        content:
          "Curadoria fina, preço justo de distribuidor e atendimento direto para casa, restaurantes, adegas, empórios e hotéis.",
      },
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
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
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
      <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top,_color-mix(in_oklab,var(--color-brand-rose)_20%,transparent),transparent_32%),linear-gradient(180deg,color-mix(in_oklab,var(--color-brand-wine)_10%,var(--color-background))_0%,var(--color-background)_20%,var(--color-background)_100%)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 pb-16 pt-5 sm:px-8 lg:px-10 lg:pb-20 lg:pt-7">
          <header className="flex items-center justify-between gap-4 border-b border-border/70 pb-5">
            <img src={logoAsset.url} alt="Logo Vinerium" className="h-14 w-auto sm:h-18" loading="eager" />
            <a
              href={weeklyLeadLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-primary/25 bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Falar no WhatsApp
            </a>
          </header>

          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:gap-14">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-plum">
                Curadoria fina · importação oficial · atendimento humano
              </p>
              <h1 className="mt-4 max-w-4xl font-display text-5xl leading-none text-foreground sm:text-6xl lg:text-7xl">
                Adquira rótulos importados exclusivos a preço de distribuidor.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Seja para abastecer a sua reserva particular em casa ou para elevar a margem de lucro do seu
                estabelecimento. Compre direto da importação oficial da Vinerium, pule os intermediários do varejo
                tradicional e monte seu combo com atendimento personalizado.
              </p>

              <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                <div className="rounded-2xl border border-border/80 bg-card/80 p-4 backdrop-blur-sm">
                  <p className="font-semibold text-foreground">Para você</p>
                  <p className="mt-1">Combos de 2, 4 e 6 garrafas com condições de lote para quem consome bem em casa.</p>
                </div>
                <div className="rounded-2xl border border-border/80 bg-card/80 p-4 backdrop-blur-sm">
                  <p className="font-semibold text-foreground">Para seu negócio</p>
                  <p className="mt-1">Condições corporativas para restaurantes, adegas, empórios e hotéis.</p>
                </div>
                <div className="rounded-2xl border border-border/80 bg-card/80 p-4 backdrop-blur-sm sm:col-span-2">
                  <p className="font-semibold text-foreground">Logística nacional com proteção total</p>
                  <p className="mt-1">
                    Envio seguro em caixas reforçadas. Nada de opções industriais de massa. Nada de taxas abusivas de
                    aplicativos de entrega.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={homeLeadLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-13 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Reivindicar preço de distribuidor
                </a>
                <a
                  href={businessLeadLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-13 items-center justify-center rounded-full border border-border bg-transparent px-7 text-sm font-semibold uppercase tracking-[0.14em] text-foreground transition-colors duration-300 hover:bg-accent"
                >
                  Quero condições B2B
                </a>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <article className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_40px_120px_-60px_color-mix(in_oklab,var(--color-brand-wine)_45%,transparent)]">
                <img
                  src={heroAsset.url}
                  alt="Garrafa de vinho Vinerium com taças e pratos em ambiente gastronômico sofisticado"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_22%,color-mix(in_oklab,var(--color-brand-night)_78%,transparent)_100%)]" />
                <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
                  <div className="max-w-sm rounded-[1.75rem] border border-white/10 bg-brand-night/55 p-5 backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-rose-soft">
                      Direto da importação oficial
                    </p>
                    <p className="mt-3 font-display text-3xl leading-none text-white">
                      Curadoria que sussurra exclusividade em vez de gritar preço baixo.
                    </p>
                  </div>
                </div>
              </article>

              <div className="grid gap-4">
                <article className="overflow-hidden rounded-[1.75rem] border border-border/70 bg-secondary p-5">
                  <img src={symbolAsset.url} alt="Símbolo da Vinerium" className="h-14 w-auto" loading="lazy" />
                  <p className="mt-5 text-sm uppercase tracking-[0.18em] text-brand-plum">Filosofia Vinerium</p>
                  <p className="mt-2 text-base leading-7 text-secondary-foreground">
                    Não distribuímos marcas comerciais de massa. O foco está em produtores artesanais da Itália, França
                    e Portugal com identidade cultural, tiragens limitadas e excelente potencial de guarda.
                  </p>
                </article>
                <article className="overflow-hidden rounded-[1.75rem] border border-border/70 bg-card">
                  <img
                    src={duoAsset.url}
                    alt="Garrafa em destaque com duas taças em ambiente moderno e clean"
                    className="h-60 w-full object-cover"
                    loading="lazy"
                  />
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-secondary/55">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-5 text-sm sm:px-8 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
          <div>
            <p className="font-semibold text-foreground">Pequenas produções europeias</p>
            <p className="mt-1 text-muted-foreground">Curadoria autoral com procedência oficial.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Preço justo de distribuidor</p>
            <p className="mt-1 text-muted-foreground">Sem atravessadores e sem markup abusivo.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Atendimento consultivo</p>
            <p className="mt-1 text-muted-foreground">Equipe humana pelo WhatsApp para casa ou negócio.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Entrega protegida no Brasil</p>
            <p className="mt-1 text-muted-foreground">Caixas técnicas com proteção anti-impacto.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-plum">
            Duas formas de comprar direto da fonte
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
            A solução ideal para a sua mesa ou para o seu cardápio.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            A Vinerium elimina os custos abusivos das grandes redes e dos intermediários, permitindo que você acesse
            pequenas produções europeias pelo valor real de importação.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {purchaseModes.map((mode) => (
            <article key={mode.title} className="rounded-[2rem] border border-border/70 bg-card p-7 shadow-[0_30px_90px_-70px_color-mix(in_oklab,var(--color-brand-wine)_55%,transparent)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-plum">{mode.eyebrow}</p>
              <h3 className="mt-4 font-display text-3xl leading-tight text-foreground">{mode.title}</h3>
              <ul className="mt-6 space-y-3 text-base leading-7 text-muted-foreground">
                {mode.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href={mode.href}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-primary/30 bg-primary px-6 text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                {mode.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-night text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,1fr)_480px] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-rose-soft">
              A verdade oculta do mercado de varejo
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              O que as grandes redes e gôndolas de mercado não te contam.
            </h2>
            <div className="mt-10 grid gap-5">
              {retailTruths.map((item) => (
                <article key={item.myth} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <p className="text-lg font-semibold text-brand-sunset">{item.myth}</p>
                  <p className="mt-3 text-base leading-7 text-white/78">{item.truth}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <img
              src={cellarAsset.url}
              alt="Garrafa de vinho em bancada com adega ao fundo"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[430px_minmax(0,1fr)]">
          <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-card">
            <img
              src={handsAsset.url}
              alt="Pessoa segurando garrafa de vinho em ambiente intimista"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-plum">
              Bastidores da curadoria
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              A inteligência humana por trás de cada escolha.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Por trás do valor de distribuidor da Vinerium, existe um trabalho minucioso de relacionamento direto com
              importadores oficiais e pequenos produtores do Velho Mundo.
            </p>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              Nossa equipe une sensibilidade comercial ao conhecimento técnico em enologia para transformar garrafas em
              repertório e experiência cultural. Nós viajamos, testamos e negociamos lotes direto na fonte. O resultado
              é uma seleção assinada, de procedência oficial, que economiza porque pula os atravessadores.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-border/70 bg-secondary p-5">
                <p className="font-semibold text-foreground">Critério técnico</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Análise rigorosa de DOC e DOCG, potencial de guarda, identidade cultural e consistência de safra.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-border/70 bg-secondary p-5">
                <p className="font-semibold text-foreground">Relação direta com a origem</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Curadoria construída com importadores oficiais e produtores artesanais da Itália, França e Portugal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/55">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-plum">Prova social dupla</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Histórias reais de quem descobriu o nosso estoque.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.author} className="rounded-[2rem] border border-border/70 bg-card p-7">
                <p className="font-display text-5xl leading-none text-brand-rose">“</p>
                <p className="mt-4 text-base leading-8 text-muted-foreground">{testimonial.quote}</p>
                <div className="mt-8 border-t border-border/80 pt-5">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_460px]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-plum">
              Do clique ao pertencimento
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Como funciona o seu acesso direto ao nosso estoque.
            </h2>
            <div className="mt-10 grid gap-5">
              {steps.map((step) => (
                <article key={step.index} className="grid gap-4 rounded-[1.75rem] border border-border/70 bg-card p-6 sm:grid-cols-[72px_minmax(0,1fr)] sm:items-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-sm font-semibold tracking-[0.2em] text-primary-foreground">
                    {step.index}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-muted-foreground">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_40px_100px_-70px_color-mix(in_oklab,var(--color-brand-olive)_60%,transparent)]">
            <img
              src={terraceAsset.url}
              alt="Garrafa de vinho e taça em terraço com luz acolhedora"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-night text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-rose-soft">
              Matriz de comparação
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Por que escolher a Vinerium?</h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead className="bg-white/5 text-white">
                  <tr>
                    <th className="px-5 py-4 font-semibold">Diferenciais</th>
                    <th className="px-5 py-4 font-semibold">Atacados comuns</th>
                    <th className="px-5 py-4 font-semibold">Grandes redes</th>
                    <th className="px-5 py-4 font-semibold text-brand-sunset">Vinerium</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr key={row.label} className={index % 2 === 0 ? "bg-white/0" : "bg-white/3"}>
                      <td className="px-5 py-4 font-medium text-white">{row.label}</td>
                      <td className="px-5 py-4 text-white/72">{row.commonWholesale}</td>
                      <td className="px-5 py-4 text-white/72">{row.retail}</td>
                      <td className="px-5 py-4 font-semibold text-brand-rose-soft">{row.vinerium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-[2.5rem] border border-border/70 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--color-brand-wine)_10%,var(--color-card))_0%,color-mix(in_oklab,var(--color-brand-rose)_12%,var(--color-card))_55%,var(--color-card)_100%)] p-8 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-plum">CTA de fechamento</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
                Escolha como quer abastecer seu estoque hoje.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
                Unimos a curadoria fina de uma boutique exclusiva com o preço justo e o volume de um distribuidor
                direto. Fale com a nossa equipe agora, diga-nos a sua necessidade e garanta acesso às nossas descobertas.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={weeklyLeadLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-13 items-center justify-center rounded-full bg-primary px-6 text-center text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Conferir descobertas da semana
              </a>
              <a
                href={businessLeadLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-13 items-center justify-center rounded-full border border-border bg-background/70 px-6 text-center text-sm font-semibold uppercase tracking-[0.14em] text-foreground transition-colors duration-300 hover:bg-accent"
              >
                Falar sobre volume comercial
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/55">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-plum">Perguntas frequentes</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">FAQ</h2>
          </div>

          <div className="mt-10 grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-[1.75rem] border border-border/70 bg-card p-6">
                <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-foreground marker:content-none">
                  {faq.question}
                </summary>
                <p className="mt-4 text-base leading-8 text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border/70 bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 text-sm text-muted-foreground sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div>
            <img src={logoAsset.url} alt="Logo Vinerium" className="h-12 w-auto" loading="lazy" />
            <p className="mt-4">Vinerium © 2026 — Distribuição e Curadoria de Rótulos Finos</p>
            <p className="mt-2">Venda proibida para menores de 18 anos. Consuma com responsabilidade.</p>
          </div>
          <div className="space-y-2 lg:text-right">
            <p>comercial@vinerium.com.br</p>
            <p>WhatsApp: +55 11 97847-6621</p>
            <a
              href={weeklyLeadLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-brand-night/92 p-3 backdrop-blur-lg sm:hidden">
        <a
          href={weeklyLeadLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground"
        >
          Chamar no WhatsApp
        </a>
      </div>
    </main>
  );
}
