import "./App.css"
import React, { useState } from "react"

import { useQuery } from "@apollo/client"
import { Button } from "antd"

import { Cart, PizzaSpinner, PizzaMenu } from "components"

import { GET_PIZZA } from "./graphql/queries/queries"

const App = () => {
  const { loading, error, data } = useQuery(GET_PIZZA)
  const [orders, setOrders] = useState([])
  const [cartIsVisible, setCartIsVisible] = useState(false)

  if (loading) return <PizzaSpinner />

  if (error) return <p>Error :(</p>

  const pizzaSizes = data ? data.pizzaSizes : undefined

  const showCart = () => {
    setCartIsVisible(true)
  }
  const closeCart = () => {
    setCartIsVisible(false)
  }
  return (
    <div className="App">
      <Button type="primary" onClick={showCart}>
        Open Cart
      </Button>
      <PizzaMenu
        orders={orders}
        setOrders={setOrders}
        pizzaSizes={pizzaSizes}
      />
      <Cart
        orders={orders}
        setOrders={setOrders}
        isVisible={cartIsVisible}
        onClose={closeCart}
      />
    </div>
  )
}

export default App
