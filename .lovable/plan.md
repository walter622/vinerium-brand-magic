## Objetivo
Reconstruir a landing page de captura de leads para WhatsApp seguindo fielmente o padrão visual já aprovado do e-commerce oficial https://www.vinerium.com.br/ — mantendo o mesmo texto comercial e o foco em conversão para `+55 11 97847-6621`.

## Direção visual (espelhando o e-commerce)
- **Paleta**: fundo branco/off-white dominante, tipografia escura, acentos em vinho/bordô e dourado discreto (como no site oficial). Menos "editorial escuro", mais clean comercial.
- **Tipografia**: serifa elegante para títulos + sans-serif limpa para corpo, no mesmo espírito do e-commerce.
- **Header**: barra superior fina (frete/aviso), logo centralizado, navegação horizontal simples.
- **Blocos**: banners largos com foto + texto curto, grids de "categorias" (aqui adaptados para perfis de compra), seções com fundo claro alternando com faixas em vinho.
- **Botões**: retangulares, sólidos em vinho com texto branco, hover sutil — mesmo estilo do "Comprar" do e-commerce.
- **Fotografia**: garrafas, taças e ambientes gastronômicos com bastante respiro, como no site.

## Estrutura da página (mantém o texto fornecido, layout no padrão e-commerce)
1. **Top bar** — "Importação oficial • Entrega para todo Brasil" + telefone.
2. **Header** — logo Vinerium centralizado, menu horizontal (Início, Perfis, Curadoria, FAQ, WhatsApp).
3. **Hero banner largo** — foto de adega/garrafas, headline "Adquira Rótulos Importados Exclusivos a Preço de Distribuidor", subheadline e botão "Falar no WhatsApp".
4. **Faixa de benefícios** (ícones em linha, como no e-commerce): Importação Oficial · Curadoria · Preço de Distribuidor · Entrega Brasil.
5. **Dois perfis de compra** — cards lado a lado (Casa / Estabelecimento) no mesmo estilo de "categoria" do site, cada um com CTA WhatsApp segmentado.
6. **Banner "A verdade do varejo"** — faixa em vinho com texto branco, foto ao lado.
7. **Curadoria / bastidores** — bloco editorial com foto grande + texto.
8. **Prova social** — depoimentos em cards claros.
9. **Como funciona** — passos numerados horizontais.
10. **Comparação Vinerium vs Varejo** — tabela enxuta.
11. **CTA final** — faixa vinho com botão WhatsApp grande.
12. **FAQ** — accordion clean.
13. **Footer institucional** — logo, contato, e-mail comercial, aviso 18+, copyright.
14. **Botão flutuante WhatsApp** no mobile (mantém).

## Implementação técnica
- Atualizar `src/styles.css`: trocar tokens para paleta clara (background branco, primary vinho, accent dourado) em `oklch`.
- Atualizar `src/routes/__root.tsx`: ajustar par tipográfico se necessário para combinar com o site oficial.
- Reescrever `src/routes/index.tsx` com a nova estrutura/layout, reaproveitando as imagens já importadas em `src/assets/`.
- Manter todos os CTAs apontando para `https://wa.me/5511978476621` com mensagens pré-preenchidas por perfil.
- Manter SEO no `head()` e schema de FAQ.
- 100% frontend, sem backend.

## Fora de escopo
- Carrinho, catálogo real ou checkout (segue sendo landing de captação para WhatsApp).
- Alterações no texto comercial enviado.
