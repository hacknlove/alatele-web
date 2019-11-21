import React from 'react'

export function MenuComponent ({
  items,
  active = '',
  onPrefetch = () => null,
  onGoto = () => null
}) {
  return (
    <aside className="menu">
      {items.map(item => (
        <>
          <p className="menu-label">
            {item.label}
          </p>
          <ul className="menu-list">
            {item.menu.map(link => (
              <li key={link.id}>
                <a
                  className={link.id === active ? 'is-active' : ''}
                  onMouseEnter={() => onPrefetch(link.url)}
                  onClick={() => onGoto(link.url)}
                >
                  {link.label}
                </a>
              </li>
            ))

            }
          </ul>
        </>
      ))}
    </aside>
  )
}
