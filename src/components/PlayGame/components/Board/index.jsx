import React, { useContext } from 'react'
import { GameContext } from '../../../../Hook/GameContext'
import { Grid } from './mixins'
import Card from './Card'
import { getGridColumns } from '../../../../utils'

const Component = ({ cards, flippedCards, matchedCards, handleCardClick }) => {
  const { difficulty } = useContext(GameContext)
  const amountColums = getGridColumns(difficulty)

  return (
    <>
      <Grid $columns={amountColums}>
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
