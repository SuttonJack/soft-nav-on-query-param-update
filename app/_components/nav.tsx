'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export default function Nav() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const updateSearchParam = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
      router.push(pathname + '?' + params.toString())
    },
    [router, pathname, searchParams]
  )

  return (
    <div
      style={{
        backgroundColor: '#1B1B1B',
        bottom: '0px',
        color: '#FFF',
        display: 'grid',
        position: 'absolute',
        right: '0px',
        top: '0px',
        width: '250px',
        placeContent: 'center',
        gap: '32px',
      }}
    >
      <Btn onClick={() => updateSearchParam('page', 'A')}>A</Btn>
      <Btn onClick={() => updateSearchParam('page', 'B')}>B</Btn>
      <Btn onClick={() => updateSearchParam('page', 'C')}>C</Btn>
    </div>
  )
}

const Btn = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '8px 14px',
        fontSize: '14px',
        lineHeight: '21px',
        color: '#FFFFFF',
        backgroundColor: '#333333',
        maxWidth: '136px',
        width: '136px',
        height: 'fit-content',
        margin: '0 auto',
        border: 'none',
        borderRadius: '10px',
        fontWeight: 600,
        letterSpacing: '0px',
        textAlign: 'center',
        textDecoration: 'none',
        outline: 'none',
        cursor: 'pointer',
        transition: 'background 0.2s ease 0s, box-shadow 0.2s ease 0s',
        appearance: 'none',
      }}
    >
      {children}
    </button>
  )
}
