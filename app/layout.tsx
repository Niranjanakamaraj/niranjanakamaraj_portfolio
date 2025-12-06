// app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'Niranju Portfolio',
  description: 'My personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>/* Navbar here */</nav>
        </header>
        <main>{children}</main>
        <footer>/* Footer here */</footer>
      </body>
    </html>
  )
}