import React from 'react'
import { useRouter } from 'next/router'

export function BackNextComponent ({ prev, next, onPrefeth, onGoto }) {
  return (
    <div className="field is-grouped">
      { prev && (
        <div className="control">
          <button
            type="button"
            className="button"
            onMouseEnter={() => onPrefeth(prev)}
            onClick={() => onGoto(prev)}
          >
            <span className="icon is-small">
              <i className="fas fa-arrow-left"></i>
            </span>
            <span>
              {prev.label}
            </span>
          </button>
        </div>
      )}
      { next && (
        <div className="control">
          <button
            type="button"
            className="button is-primary"
            onMouseEnter={() => onPrefeth(next)}
            onClick={() => onGoto(next)}
          >
            <span>
              {next.label}
            </span>
            <span className="icon is-small">
              <i className="fas fa-arrow-right"></i>
            </span>
          </button>
        </div>
      )}
    </div>
  )
}

export default function BackNext ({ items, active }) {
  const router = useRouter()

  let step = 0
  items.some(item => {
    if (item.label === active) {
      return true
    }
    step++
  })

  const prev = items[step - 1]
  const next = items[step + 1]

  function onPrefeth (item) {
    router.prefetch(item.url)
  }

  function onGoto (item) {
    router.push(item.url)
  }

  return <BackNextComponent
    prev={prev}
    next={next}
    onPrefeth={onPrefeth}
    onGoto={onGoto}
  />
}
