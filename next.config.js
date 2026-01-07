/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Redirect old number page URLs to new /sayi/X format
      { source: '/1li-carpim-tablosu/', destination: '/sayi/1', permanent: true },
      { source: '/2li-carpim-tablosu/', destination: '/sayi/2', permanent: true },
      { source: '/3li-carpim-tablosu/', destination: '/sayi/3', permanent: true },
      { source: '/4li-carpim-tablosu/', destination: '/sayi/4', permanent: true },
      { source: '/5li-carpim-tablosu/', destination: '/sayi/5', permanent: true },
      { source: '/6li-carpim-tablosu/', destination: '/sayi/6', permanent: true },
      { source: '/7li-carpim-tablosu/', destination: '/sayi/7', permanent: true },
      { source: '/8li-carpim-tablosu/', destination: '/sayi/8', permanent: true },
      { source: '/9li-carpim-tablosu/', destination: '/sayi/9', permanent: true },
      { source: '/10li-carpim-tablosu/', destination: '/sayi/10', permanent: true },
    ];
  },
}

module.exports = nextConfig
