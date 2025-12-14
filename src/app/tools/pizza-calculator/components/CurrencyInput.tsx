'use client'

import { useRef } from 'react'

type Props = {
  index: number
  valueCents: number
  onChangeCents: (cents: number) => void
}

export function CurrencyInput({ index, valueCents, onChangeCents }: Props) {
  const ref = useRef<HTMLInputElement>(null)

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  const displayValue = formatter.format(valueCents / 100)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '')
    const cents = digits === '' ? 0 : Number(digits)
    onChangeCents(cents)

    // Keep cursor at end (good enough for currency fields)
    requestAnimationFrame(() => {
      const el = ref.current
      if (!el) return
      const len = el.value.length
      el.setSelectionRange(len, len)
    })
  }

  return (
    <>
      <label htmlFor={'cost-' + { index }}>Cost</label>
      <input
        id={'cost-' + { index }}
        ref={ref}
        type="text"
        inputMode="decimal"
        value={displayValue}
        onChange={handleChange}
      />
    </>
  )
}
