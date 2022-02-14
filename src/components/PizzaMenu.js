import React from "react"
import { Card, Col, Row } from "antd"
import { CheckBoxPanel } from "components"

export const PizzaMenu = ({ pizzaSizes, orders, setOrders }) => {
  return (
    <div className="pizza-container">
      <Row gutter={16}>
        {pizzaSizes.map(
          ({ name: pizzaSize, maxToppings, toppings, basePrice }) => (
            <Col span={8}>
              <Card title={`${pizzaSize}  🍕`}>
                <CheckBoxPanel
                  basePrice={basePrice}
                  maxToppings={maxToppings}
                  orders={orders}
                  setOrders={setOrders}
                  size={pizzaSize}
                  toppings={toppings}
                />
              </Card>
            </Col>
          )
        )}
      </Row>
    </div>
  )
}
