import React, { useEffect, useState } from "react"

import { PizzaOrder } from "components"
import { Drawer } from "./Drawer"
import { formatPrice } from "helper/formatPrice"

export const Cart = ({ onClose, isVisible, orders, setOrders }) => {
  const [total, setTotal] = useState()

  useEffect(() => {
    const totalPrice = orders.reduce((sum, { total }) => {
      return sum + total
    }, 0)
    setTotal(totalPrice)
  }, [orders])

  const removeOrder = (orderIndex) => {
    const updatedOrders = orders.filter((_order, index) => index !== orderIndex)
    setOrders(updatedOrders)
  }
  const PizzaOrderList = orders.map(
    ({ size, total: subTotal, options }, index) => {
      return (
        <PizzaOrder
          key={index}
          removeOrder={removeOrder}
          size={size}
          subTotal={subTotal}
          options={options}
          index={index}
        ></PizzaOrder>
      )
    }
  )
  return (
    <Drawer
      total={total}
      PizzaOrderList={PizzaOrderList}
      onClose={onClose}
      isVisible={isVisible}
    >
      {PizzaOrderList}
      <h3>Total: {formatPrice(total)}</h3>
    </Drawer>
  )
}
