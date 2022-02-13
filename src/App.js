import "./App.css"
import React, { useState } from "react"

import { Card, Button, Col, Row } from "antd"
import { useQuery } from "@apollo/client"
import { CheckBoxPanel } from "./components/CheckBoxPanel"
import { GET_PIZZA } from "./graphql/queries/queries"
import { Cart } from "./components/Cart"
import { PizzaSpinner } from "./components/PizzaSpinner"

function App() {
  const { loading, error, data } = useQuery(GET_PIZZA)
  const [cartVisible, setCartVisible] = useState(false)
  const [orders, setOrders] = useState([])

  if (loading) return <PizzaSpinner />

  if (error) return <p>Error :(</p>

  const pizzaSizes = data ? data.pizzaSizes : null

  const showCart = () => {
    setCartVisible(true)
  }
  const onCartClose = () => {
    setCartVisible(false)
  }
  return (
    <div className="App">
      <Button type="primary" onClick={showCart}>
        Open Cart
      </Button>
      <div className="pizza-container">
        <Row gutter={16}>
          {pizzaSizes.map(
            ({ name: pizzaSize, maxToppings, toppings, basePrice }) => (
              <Col span={8}>
                <Card title={`${pizzaSize}  🍕`}>
                  <CheckBoxPanel
                    maxToppings={maxToppings}
                    toppings={toppings}
                    basePrice={basePrice}
                    setOrders={setOrders}
                    orders={orders}
                    size={pizzaSize}
                  />
                </Card>
              </Col>
            )
          )}
        </Row>
      </div>
      <Cart
        orders={orders}
        setOrders={setOrders}
        onClose={onCartClose}
        visible={cartVisible}
      />
    </div>
  )
}

export default App
