import React from 'react'
import { useRouter } from 'next/router'

export function MenuComponent ({
  items,
  completion = {},
  active = '',
  onPrefetch = () => null,
  onGoto = () => null,
  lateralActive,
  onToggleLateral
}) {
  return (
    <React.Fragment>
      <div
        id="menu-background" className={lateralActive ? 'is-active' : ''}
        onClick={onToggleLateral}
      />
      <aside
        id="menu"
        className={`column is-2 is-narrow-mobile is-fullheight ${lateralActive ? 'is-active' : ''}`}
      >
        <div className="menu section">
          {items.map(item => (
            <React.Fragment key={item.label}>
              <p className="menu-label">
                {item.label}
              </p>
              <ul className="menu-list">
                {item.menu.map(link => link.label && (
                  <li key={link.label}>
                    <a
                      className={link.label === active ? 'is-active' : ''}
                      onMouseEnter={() => onPrefetch(link.url)}
                      onClick={() => onGoto(link.url)}
                    >
                      <span className={`icon ${completion[link.label] === 1 ? 'has-text-success' : 'has-text-grey-light'}`}>
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
    </React.Fragment>
  )
}

export default function Menu ({
  items,
  completion,
  active,
  lateralActive,
  onToggleLateral
}) {
  const router = useRouter()

  function onPrefetch (url) {
    router.prefetch(url)
  }

  function onGoto (url) {
    router.push(url)
    setTimeout(onToggleLateral, 100)
  }

  return <MenuComponent
    items={items}
    active={active}
    onPrefetch={onPrefetch}
    onGoto={onGoto}
    completion={completion}
    lateralActive={lateralActive}
    onToggleLateral={onToggleLateral}
  />
}
