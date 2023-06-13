import { useEffect, useState } from 'react'
import './App.css'
import { getData } from './services/data'
import Card from './components/Card'
import confetti from 'canvas-confetti'
import Modal from './components/Modal'

function App() {
  const [data, setData] = useState([])
  const [turns, setTurns] = useState(0)
  const [disabled, setDisabled] = useState(false)
  const [optionOne, setOptionOne] = useState(null)
  const [optionTwo, setOptionTwo] = useState(null)
  const [win, setWin] = useState(false)

  const shuffleCards = () => {
    const shuffledData = [...data].map((card) => ({ ...card, match: false })).sort(() => Math.random() - 0.5);
    setData(shuffledData);
    setWin(false)
    setOptionOne(null)
    setOptionTwo(null)
    setTurns(0)
  }
  const compare = (pokemon) => {
    if(pokemon.id === optionOne?.id) return
    optionOne ? setOptionTwo(pokemon) : setOptionOne(pokemon)
  }
  const resetTurn = () => {
    setOptionOne(null)
    setOptionTwo(null)
    setTurns(prev => prev + 1)
    setDisabled(false)
  }
  
  useEffect(() => {
    if(data.length && data.every((card) => card.match === true)){
      setWin(true)
      confetti()
    }
    if(optionOne && optionTwo){
      setDisabled(true)
      if(optionOne.image === optionTwo.image){
        setData(prevCards => {
          return prevCards.map(card => {
            if(card.image == optionOne.image){
              return {...card, match: true}
            }else{
              return card
            }
          })
        })
        resetTurn()
      }else{
        setTimeout(() => { 
          resetTurn()
        }, 1000);
      }
    }
  }, [optionOne, optionTwo])

  useEffect(() => {
    const getPokemon = async () => {
      const result = await getData()
      const sorted = result.sort(() => Math.random() - 0.5)
      setData(sorted)
    }
    getPokemon()
  }, [])

  return (
    <div>
      {win && <Modal shuffleCards={shuffleCards}/>}
      <h1>Pokemon Memory Game</h1>
        <div className='turns'>
          <span>Turns: <b>{turns}</b></span>
        </div>
        <div className='container'>
          {data.map((pokemon, index) => (
            <Card 
            pokemon={pokemon} 
            key={index} 
            compare={compare}
            flipped={pokemon === optionOne || pokemon === optionTwo || pokemon.match}
            disabled={disabled}
            />
          ))}
        </div>
        <div className='button-container'>
          <button onClick={shuffleCards}>New Game</button>
        </div>
    </div>
  )
}

export default App
