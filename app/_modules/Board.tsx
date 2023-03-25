'use client'

import { useEffect } from 'react'

export default function Board({ data }) {
  useEffect(() => {
    console.log('<BoardPage /> mounted')
    return () => {
      console.log('<BoardPage /> unmounted')
    }
  }, [])

  return (
    <div style={{ margin: '64px' }}>
      <h1>Page</h1>
      <p>Renders: {renderCounter.current}</p>
      <code>Data: {JSON.stringify(data.threads[0].id)}</code>
    </div>
  )
}
