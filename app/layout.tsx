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
          <nav></nav>
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  )
}