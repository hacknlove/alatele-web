import React from 'react'
import { useRouter } from 'next/router'

export function MenuComponent ({
  percent,
  items,
  completion = {},
  active = '',
  onPrefetch = () => null,
  onGoto = () => null,
  lateralActive
}) {
  return (
    <aside
      id="menu"
      className={`column is-2 is-narrow-mobile is-fullheight ${lateralActive ? 'is-active' : ''}`}
    >
      <div className="menu section">
        {items.map(item => (
          <React.Fragment key={item.label}>
            <p className="menu-label">
              {item.label} {percent && <span>- {percent}%</span>}
            </p>
            <ul className="menu-list">
              {item.menu.map(link => !link.hidden && (
                <li key={link.label}>
                  <a
                    className={link.label === active ? 'is-active' : ''}
                    onMouseEnter={() => onPrefetch(link.url)}
                    onClick={() => onGoto(link.url)}
                  >
                    <span className={`icon ${completion[link.label] ? 'has-text-success' : 'has-text-grey-light'}`}>
                      <i className={`fas fa-${link.icon || 'check'}`}></i>
                    </span>&nbsp;
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </div>
    </aside>
  )
}

export default function Menu ({ items, completion, active, percent, lateralActive }) {
  const router = useRouter()

  function onPrefetch (url) {
    router.prefetch(url)
  }

  function onGoto (url) {
    router.push(url)
  }

  console.log(completion)

  return <MenuComponent
    items={items}
    active={active}
    percent = {percent}
    onPrefetch={onPrefetch}
    onGoto={onGoto}
    completion={completion}
    lateralActive={lateralActive}
  />
}
