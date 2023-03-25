import Nav from './_components/nav'

export default function Root({ children }) {
  return (
    <html>
      <head>
        <title>Test</title>
      </head>
      <body style={{ background: '#000', color: '#FFF' }}>
        {children}
        <Nav />
      </body>
    </html>
  )
}

/** Will re-mount the page component on search param update */
export const dynamic = 'force-dynamic'
