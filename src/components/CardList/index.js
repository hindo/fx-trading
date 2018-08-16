import * as React from 'react'

import { Card } from '../Card'

import './styles.css'

export const CardList = (props) => {
  const { items } = props
  return (
    <div className="card__list">
      {items.map((item, idx) => (
        <Card key={`card-${idx}`} {...item} />
      ))}
    </div>
  )
}
