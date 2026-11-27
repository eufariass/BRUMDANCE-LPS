import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" }],
  },
  // Links antigos do WordPress (anúncios, bio, grupos) continuam funcionando.
  // Temporário (307) até reorganizarmos as rotas; os parâmetros (utm, sck...) são mantidos.
  async redirects() {
    return [{ source: "/3em1", destination: "/", permanent: false }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
