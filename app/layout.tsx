import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SINAI SECURITE | Services de Sécurité Professionnels au Sénégal',
  description: 'SINAI SECURITE SUARL - Leader des services de sécurité privée à Dakar, Sénégal. Gardiennage, protection VIP, sécurité événementielle, contrôle d\'accès et surveillance 24h/24.',
  keywords: ['sécurité', 'gardiennage', 'Dakar', 'Sénégal', 'protection VIP', 'surveillance', 'sécurité privée'],
  authors: [{ name: 'SINAI SECURITE SUARL' }],
  openGraph: {
    title: 'SINAI SECURITE | Sécurité Professionnelle au Sénégal',
    description: 'Services de sécurité privée de premier plan à Dakar. Gardiennage, protection VIP, événementiel et surveillance.',
    type: 'website',
    locale: 'fr_SN',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B1F3A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
           dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('sinai-theme');if(t==='light'){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        {children}
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
