export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}
        <div> 
          <h1>Test 2</h1>
        </div>
      </body>
    </html>
  )
}