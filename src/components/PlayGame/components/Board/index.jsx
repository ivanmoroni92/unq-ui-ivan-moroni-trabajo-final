import React from 'react'
import { Grid } from './mixins'
import Card from './Card'

const Component = ({ cards, flippedCards, matchedCards, handleCardClick }) => {
  return (
    <>
      <Grid>
        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            flipped={
              flippedCards.some((flipped) => flipped.id === card.id) ||
              matchedCards.includes(card.pairId)
            }
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </Grid>
    </>
  )
}

export default Component
