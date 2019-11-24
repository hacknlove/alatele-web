import React, { useState } from 'react'
import { useRouter } from 'next/router'

export function NavComponent ({
  items,
  active = '',
  percent,
  onPrefetch = () => null,
  onGoto = () => null,
  lateralActive,
  onToggleLateral
}) {
  const [NavbarBurgerExpanded, SetNavbarBurgerExpanded] = useState(false)
  return (
    <nav id="topbar" className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <span className="navbar-item">
            <img src="/alatele.svg" width="112" height="28"></img>
            ALA-TELE <span className="is-hidden-tablet">{percent && `- ${percent}`}</span>
          </span>
          {
            items.length
              ? (
                <a
                  onClick={() => SetNavbarBurgerExpanded(!NavbarBurgerExpanded)}
                  role="button"
                  className={`navbar-burger burger ${NavbarBurgerExpanded ? 'is-active' : ''}`}
                  aria-label="menu"
                  aria-expanded={NavbarBurgerExpanded ? 'true' : 'false'}
                  data-target="navbarBasicExample"
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              )
              : (
                <a
                  onClick={onToggleLateral}
                  role="button"
                  className={`navbar-burger burger lateral ${lateralActive ? 'is-active' : ''}`}
                  aria-label="menu"
                  aria-expanded={NavbarBurgerExpanded ? 'true' : 'false'}
                  data-target="navbarBasicExample"
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              )
          }
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${NavbarBurgerExpanded ? 'is-active' : ''}`}>
          <div className="navbar-start">
            {
              items.map(item => (
                <a
                  key={item.id}
                  className={`navbar-item ${active === item.id ? 'is-active' : ''}`}
                  onMouseEnter={() => onPrefetch(item.url)}
                  onClick={() => onGoto(item.url)}
                >
                  {item.label}
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default function Nav ({ items = [], active = '', onToggleLateral, lateralActive, percent }) {
  const router = useRouter()

  function onPrefetch (url) {
    router.prefetch(url)
  }

  function onGoto (url) {
    router.push(url)
  }

  return <NavComponent
    items={items}
    active={active}
    onPrefetch={onPrefetch}
    onGoto={onGoto}
    onToggleLateral={onToggleLateral}
    lateralActive={lateralActive}
    percent={percent}
  />
}
