"use client";

import type { MouseEvent, ReactNode } from "react";
import { CHECKOUT_URL } from "@/content";

/** Junta os parâmetros da URL atual (utm_*, sck, src, xcod...) ao link do checkout. */
function withTracking(base: string) {
  const current = new URLSearchParams(window.location.search);
  const url = new URL(base);
  current.forEach((value, key) => {
    if (!url.searchParams.has(key)) url.searchParams.set(key, value);
  });
  return url.toString();
}

/**
 * Link para o checkout da Hotmart que repassa o rastreamento da campanha,
 * igual ao comportamento do site WordPress.
 */
export function CheckoutLink({
  className,
  children,
  href = CHECKOUT_URL,
}: {
  className?: string;
  children: ReactNode;
  /** Link do checkout. Se vazio, o botão rola até a seção #oferta. */
  href?: string;
}) {
  const target = href || "#oferta";
  const update = (e: MouseEvent<HTMLAnchorElement>) => {
    if (target.startsWith("http")) e.currentTarget.href = withTracking(target);
  };

  return (
    <a
      href={target}
      className={className}
      rel="noopener"
      onPointerDown={update}
      onClick={update}
      onContextMenu={update}
    >
      {children}
    </a>
  );
}
