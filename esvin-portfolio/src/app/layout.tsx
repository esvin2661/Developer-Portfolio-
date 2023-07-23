import { Navbar } from "./components/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children} 
        <div> 
          <Navbar />
          <h1>Layout</h1>
        </div>
      </body>
    </html>
  )
}

