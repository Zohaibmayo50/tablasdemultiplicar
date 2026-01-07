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
      { source: '/11li-carpim-tablosu/', destination: '/sayi/11', permanent: true },
      { source: '/12-li-carpim-tablosu/', destination: '/sayi/12', permanent: true },
      { source: '/13li-carpim-tablosu/', destination: '/sayi/13', permanent: true },
      { source: '/14-li-carpim-tablosu/', destination: '/sayi/14', permanent: true },
      { source: '/15-li-carpim-tablosu/', destination: '/sayi/15', permanent: true },
      { source: '/16-li-carpim-tablosu/', destination: '/sayi/16', permanent: true },
      { source: '/17li-carpim-tablosu/', destination: '/sayi/17', permanent: true },
      { source: '/18li-carpim-tablosu/', destination: '/sayi/18', permanent: true },
      { source: '/19-li-carpim-tablosu/', destination: '/sayi/19', permanent: true },
      { source: '/20-li-carpim-tablosu/', destination: '/sayi/20', permanent: true },
    ];
  },
}

module.exports = nextConfig
