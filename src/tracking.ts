// IDs de rastreamento das LPs (valem para todas as páginas do site).
export const GTM_ID = "GTM-WZNS7ZDL";
// Meta Pixel: já configurado dentro do GTM acima (não instale direto no site).
export const META_PIXEL_ID = "1365612254412538";

type Fbq = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    fbq?: Fbq;
  }
}

/**
 * Avisa o GTM que a pessoa clicou para ir ao checkout (evento "initiate_checkout").
 * O InitiateCheckout do Meta Pixel já é disparado pelo próprio GTM no clique.
 */
export function trackInitiateCheckout(url: string) {
  try {
    window.dataLayer?.push({ event: "initiate_checkout", checkout_url: url });
  } catch {
    // rastreamento nunca pode impedir a compra
  }
}
