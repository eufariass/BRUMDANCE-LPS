"use client";

import { useState } from "react";
import Image from "next/image";

/** Miniaturas do YouTube em ordem de preferência; se nenhuma existir, usa `poster`. */
const THUMBS = ["maxresdefault", "hqdefault"];

/**
 * Carrega o player do YouTube só quando a pessoa clica (página bem mais leve).
 * Enquanto o YouTube não tiver gerado a miniatura (vídeo recém-enviado), mostra a capa `poster`.
 */
export function YouTubeLite({
  id,
  title,
  poster = "/images/hero-bg.webp",
}: {
  id: string;
  title: string;
  poster?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(0);
  const usingPoster = thumb >= THUMBS.length;
  const src = usingPoster ? poster : `https://i.ytimg.com/vi/${id}/${THUMBS[thumb]}.jpg`;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl shadow-black/40 ring-1 ring-white/10">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full cursor-pointer"
          aria-label={`Assistir: ${title}`}
        >
          <Image
            key={src}
            src={src}
            alt=""
            fill
            sizes="(min-width: 1024px) 896px, 100vw"
            onError={() => setThumb((t) => t + 1)}
            onLoad={(e) => {
              // O YouTube às vezes devolve uma imagem cinza de 120px no lugar da miniatura real.
              if (!usingPoster && e.currentTarget.naturalWidth <= 120) setThumb((t) => t + 1);
            }}
            className={`object-cover transition duration-300 group-hover:scale-[1.02] group-hover:brightness-90 ${
              usingPoster ? "object-[70%_30%] brightness-75" : ""
            }`}
          />
          {usingPoster && (
            <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" aria-hidden />
          )}
          <span className="absolute left-1/2 top-1/2 flex h-16 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#ff0033] shadow-lg transition group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 fill-white" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          {usingPoster && (
            <span className="absolute inset-x-0 bottom-5 text-center text-sm font-bold uppercase tracking-[0.25em] text-white/90 sm:bottom-8 sm:text-base">
              Assista ao vídeo
            </span>
          )}
        </button>
      )}
    </div>
  );
}
