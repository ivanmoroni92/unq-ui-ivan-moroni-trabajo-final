import styled from 'styled-components'

export const CardWrapper = styled.div`
  perspective: 1000px;
`
export const CardInner = styled.div`
  width: ${({ $size }) => $size || '100px'};
  height: ${({ $size }) => $size || '100px'};
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ $flipped }) => ($flipped ? 'rotateY(180deg)' : 'rotateY(0)')};
`

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 8px;
`

export const CardFront = styled(CardFace)`
  background-color: #fff;
  background-image: url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png');
  background-size: cover;
  background-position: center;
`

export const CardBack = styled(CardFace)`
  background-color: #fff;
  transform: rotateY(180deg);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
