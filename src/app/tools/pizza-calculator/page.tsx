'use client'

import { useState } from 'react'
import './../../css/globals.scss'
import './PizzaCalculator.scss'

type Pizza = {
  costInCents: number
  shape: 'circular' | 'rectangular'
  diameter?: number
  width?: number
  length?: number
}

function getUnitCost(pizza: Pizza) {
  let unitPrice
  if (pizza.shape == 'rectangular') {
    const area = Number(pizza.width) * Number(pizza.length)
    unitPrice = pizza.costInCents / area
  } else {
    const radius = Number(pizza.diameter) / 2
    const area = Math.PI * radius * radius
    unitPrice = pizza.costInCents / area
  }
  return unitPrice.toFixed(5)
}

export default function PizzaCalculator() {
  const [pizzas, setPizzas] = useState<Pizza[]>([
    {
      costInCents: 999,
      shape: 'circular',
      diameter: 12,
    },
    {
      costInCents: 1399,
      shape: 'rectangular',
      width: 10,
      length: 12,
    },
  ])

  const updatePizza = (index: number, updates: Partial<Pizza>) => {
    setPizzas((prev) => prev.map((pizza, i) => (i === index ? { ...pizza, ...updates } : pizza)))
  }

  return (
    <body className="bg-pizza-calculator">
      <div className="pizza-calculator">
        <h1>Pizza Calculator</h1>

        <div className="data-entry-container">
          {pizzas.map((pizza, i) => (
            <div className="individual-pizza" key={i}>
              <div>
                <label htmlFor={`shape-${i}`}>Pizza Shape</label>
                <select
                  id={`shape-${i}`}
                  value={pizza.shape}
                  onChange={(e) => updatePizza(i, { shape: e.target.value as Pizza['shape'] })}
                >
                  <option value="circular">Circular</option>
                  <option value="rectangular">Rectangular</option>
                </select>
              </div>

              {pizza.shape === 'circular' && (
                <div>
                  <label htmlFor={`diameter-${i}`}>Diameter</label>
                  <input
                    id={`diameter-${i}`}
                    type="number"
                    value={pizza.diameter ?? ''}
                    onChange={(e) => updatePizza(i, { diameter: Number(e.target.value) })}
                  />
                </div>
              )}

              {pizza.shape === 'rectangular' && (
                <>
                  <div>
                    <label htmlFor={`length-${i}`}>Length</label>
                    <input
                      id={`length-${i}`}
                      type="number"
                      value={pizza.length ?? ''}
                      onChange={(e) => updatePizza(i, { length: Number(e.target.value) })}
                    />
                  </div>

                  <div>
                    <label htmlFor={`width-${i}`}>Width</label>
                    <input
                      id={`width-${i}`}
                      type="number"
                      value={pizza.width ?? ''}
                      onChange={(e) => updatePizza(i, { width: Number(e.target.value) })}
                    />
                  </div>
                </>
              )}

              <div>
                <label htmlFor={`cost-${i}`}>Cost</label>
                <input
                  id={`cost-${i}`}
                  type="text"
                  inputMode="decimal"
                  value={(pizza.costInCents / 100).toFixed(2)}
                  onChange={(e) => {
                    const dollars = Number(e.target.value)
                    if (!Number.isNaN(dollars)) {
                      updatePizza(i, { costInCents: Math.round(dollars * 100) })
                    }
                  }}
                />
              </div>

              <div>
                Unit cost: {getUnitCost(pizza)} ¢/in<sup>2</sup>
              </div>
            </div>
          ))}
        </div>
      </div>
    </body>
  )
}
