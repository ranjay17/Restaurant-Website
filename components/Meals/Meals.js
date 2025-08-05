import React from 'react'
import { dummyMeals } from './DummyMeals'
import MealsCard from '../UI/MealsCard'

const Meals = () => {
  return (
    <>
      {
        dummyMeals.map((item)=>{
            return <MealsCard
            key = {item.id}
            id = {item.id}
            title = {item.title}
            description = {item.description}
            price = {item.price}
            />
        })
      }
    </>
  )
}

export default Meals
