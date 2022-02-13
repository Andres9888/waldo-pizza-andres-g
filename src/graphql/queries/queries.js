import { gql } from "@apollo/client"

export const GET_PIZZA = gql`
  query GetPizza {
    pizzaSizes {
      name
      maxToppings
      basePrice
      toppings {
        topping {
          name
          price
        }
        defaultSelected
      }
    }
  }
`
