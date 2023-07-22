export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children} 
        <div> 
          <h1>Layout</h1>
        </div>
      </body>
    </html>
  )
}

