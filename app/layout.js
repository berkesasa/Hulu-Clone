import './globals.css'

export const metadata = {
  title: 'Hulu Clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
