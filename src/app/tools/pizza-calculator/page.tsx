'use client'

import { useState } from 'react'
import './../../css/globals.scss'
import './PizzaCalculator.scss'
import { CurrencyInput } from './components/CurrencyInput'

type Pizza = {
  costInCents: number
  shape: 'circular' | 'rectangular'
  diameter?: number
  width?: number
  length?: number
}

function getUnitCost(pizza: Pizza): number | null {
  if (pizza.shape === 'rectangular') {
    if (!pizza.width || !pizza.length) return null
    const area = pizza.width * pizza.length
    return pizza.costInCents / area
  }

  if (pizza.shape === 'circular') {
    if (!pizza.diameter) return null
    const radius = pizza.diameter / 2
    const area = Math.PI * radius * radius
    return pizza.costInCents / area
  }

  return null
}

export default function PizzaCalculator() {
  const [pizzas, setPizzas] = useState<Pizza[]>([
    { costInCents: 999, shape: 'circular', diameter: 12, width: 10, length: 12 },
    { costInCents: 1399, shape: 'rectangular', diameter: 12, width: 10, length: 12 },
  ])

  const updatePizza = (index: number, updates: Partial<Pizza>) => {
    setPizzas((prev) =>
      prev.map((pizza, i) =>
        i === index
          ? {
              ...pizza,
              ...updates,
            }
          : pizza
      )
    )
  }

  return (
    <body className="bg-pizza-calculator">
      <div className="pizza-calculator">
        <div className="header">
          <h1>Pizza Calculator</h1>
          <p>Use this pizza calculator to determine the better deal between two or more pizzas.</p>
        </div>

        <div>
          {pizzas.map((pizza, i) => {
            const unitCost = getUnitCost(pizza)

            return (
              <div className="individual-pizza" key={i}>
                <div className="form-row">
                  <label htmlFor={`shape-${i}`}>Pizza Shape</label>
                  <select
                    id={`shape-${i}`}
                    value={pizza.shape}
                    onChange={(e) =>
                      updatePizza(i, {
                        shape: e.target.value as Pizza['shape'],
                        diameter: undefined,
                        width: undefined,
                        length: undefined,
                      })
                    }
                  >
                    <option value="circular">Circular</option>
                    <option value="rectangular">Rectangular</option>
                  </select>
                </div>

                {pizza.shape === 'circular' && (
                  <div className="form-row">
                    <label htmlFor={`diameter-${i}`}>Diameter (in.)</label>
                    <input
                      id={`diameter-${i}`}
                      type="number"
                      min={0}
                      value={pizza.diameter ?? ''}
                      onChange={(e) =>
                        updatePizza(i, { diameter: Number(e.target.value) || undefined })
                      }
                    />
                  </div>
                )}

                {pizza.shape === 'rectangular' && (
                  <>
                    <div className="form-row">
                      <label htmlFor={`length-${i}`}>Length (in.)</label>
                      <input
                        id={`length-${i}`}
                        type="number"
                        min={0}
                        value={pizza.length ?? ''}
                        onChange={(e) =>
                          updatePizza(i, { length: Number(e.target.value) || undefined })
                        }
                      />
                    </div>

                    <div className="form-row">
                      <label htmlFor={`width-${i}`}>Width (in.)</label>
                      <input
                        id={`width-${i}`}
                        type="number"
                        min={0}
                        value={pizza.width ?? ''}
                        onChange={(e) =>
                          updatePizza(i, { width: Number(e.target.value) || undefined })
                        }
                      />
                    </div>
                  </>
                )}

                <div className="form-row">
                  <CurrencyInput
                    index={i}
                    valueCents={pizza.costInCents}
                    onChangeCents={(cents) => updatePizza(i, { costInCents: cents })}
                  />
                </div>

                <div className="form-row">
                  <span className="label">Unit cost: </span>
                  {unitCost !== null ? (
                    <>
                      <span>{unitCost.toFixed(2)} ¢/sq. in</span>
                    </>
                  ) : (
                    <span>Enter valid dimensions</span>
                  )}
                </div>
              </div>
            )
          })}
          <div
            className="add-pizza-button"
            onClick={() =>
              setPizzas([
                ...pizzas,
                {
                  shape: 'circular',
                  diameter: 12,
                  length: 10,
                  width: 12,
                  costInCents: 1999,
                } as Pizza,
              ])
            }
          >
            <span>+ Add Pizza</span>
          </div>
        </div>
      </div>
    </body>
  )
}
