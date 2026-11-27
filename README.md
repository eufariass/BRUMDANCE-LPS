# BrumDance — Trilogia Essencial da Dança (Black Friday)

Página de vendas da **Trilogia Essencial da Dança — Ballet, Jazz e Contemporânea com BrumDance** (nova edição), recriada a partir da página em WordPress (`brumdance.com.br/3em1`) em Next.js + Tailwind CSS, pronta para hospedar na Vercel.

## Páginas

| Rota | Página | Copy em |
| --- | --- | --- |
| `/` | Trilogia Essencial da Dança — Black Friday (R$247) | `src/content.ts` |
| `/ballet-infantil` | Ballet Kids — lançamento Black Friday | `src/content-kids.ts` |

No `src/content-kids.ts`, os itens marcados com `CONFIRMAR` (preço, idade, bônus, tempo de acesso e link do checkout) precisam ser ajustados ao produto real antes de publicar. Enquanto `KIDS_CHECKOUT_URL` estiver vazio, os botões de compra rolam até a oferta.

## Editar textos, preços e links (Trilogia)

Toda a copy está em **[`src/content.ts`](src/content.ts)**:

| O quê | Onde |
| --- | --- |
| Link do checkout Hotmart | `CHECKOUT_URL` |
| Preço, desconto, fim da contagem regressiva, faixas | `PROMO` |
| Topo da página | `topBar`, `hero`, `features` |
| Demais seções | `video`, `forWhom`, `schools`, `ministry`, `bonuses`, `testimonials`, `offer`, `guarantee`, `faq`, `finalCta` |

O link do checkout repassa automaticamente os parâmetros da URL (`utm_*`, `sck`, `src`…) para a Hotmart.

A contagem regressiva some sozinha depois da data em `PROMO.endsAt`.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Publicar na Vercel

1. Em [vercel.com/new](https://vercel.com/new), importe este repositório.
2. Deixe as configurações padrão (Next.js é detectado sozinho) e clique em **Deploy**.
3. Opcional: defina `NEXT_PUBLIC_SITE_URL` com o domínio final (usado nas imagens de compartilhamento).

Cada `git push` na `main` publica uma nova versão automaticamente.

## Estrutura

- `src/app/page.tsx` — layout de todas as seções
- `src/app/globals.css` — cores da marca e efeitos (faixas, brilho, revelar ao rolar)
- `src/components/` — checkout com UTM, vídeo do YouTube leve, contagem regressiva, faixa animada
- `public/images/` — imagens baixadas do site original
- `src/app/icon.png`, `apple-icon.png`, `favicon.ico` — ícones do site
