import Nav from './_components/nav'

export default function Root({ children }) {
  return (
    <html>
      <head>
        <title>Hello World</title>
      </head>
      <body style={{ background: '#000', color: '#FFF' }}>
        {children}
        <Nav />
      </body>
    </html>
  )
}
