import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Trailing slashes are normalised inside `proxy.ts` instead of by Next, so a
   * legacy URL like /komplektujushhie/startery/ reaches its new home in one
   * 308 rather than two.
   */
  skipTrailingSlashRedirect: true,

  // This project sits under ~/Desktop, where an unrelated lockfile can confuse
  // Turbopack's root inference.
  turbopack: {
    root: import.meta.dirname,
  },

  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },
};

export default nextConfig;
