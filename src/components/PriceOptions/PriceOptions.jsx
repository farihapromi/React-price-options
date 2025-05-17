import React from 'react'
import PricieOption from '../PriceOption/PricieOption'

const PriceOptions = () => {
  const priceOptions=[
  {
    "id": 1,
    "name": "Basic Plan",
    "price": 29.99,
    "duration": "Monthly",
    "features": [
      "Access to gym equipment",
      "Locker room access",
      "1 fitness assessment"
    ]
  },
  {
    "id": 2,
    "name": "Standard Plan",
    "price": 49.99,
    "duration": "Monthly",
    "features": [
      "All Basic Plan features",
      "Unlimited group classes",
      "Free guest pass (1/month)",
      "Steam room access"
    ]
  },
  {
    "id": 3,
    "name": "Premium Plan",
    "price": 69.99,
    "duration": "Monthly",
    "features": [
      "All Standard Plan features",
      "Personal trainer (1 session/month)",
      "Nutrition consultation",
      "Priority class booking"
    ]
  },
  {
    "id": 4,
    "name": "Annual Plan",
    "price": 499.00,
    "duration": "Yearly",
    "features": [
      "All Premium Plan features",
      "2 months free",
      "Exclusive members-only events",
      "Gym merchandise pack"
    ]
  }
]

  return (
    <div>
      <h2 className="text-3xl">Best Prices for gym</h2>
      {
        priceOptions.map(option=><PricieOption key={option.id} option={option}/>)
      }
      
    </div>
  )
}

export default PriceOptions
