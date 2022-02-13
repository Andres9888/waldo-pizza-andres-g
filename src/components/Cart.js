import React, { useEffect, useState } from "react"
import { Drawer, Button, Space } from "antd"
import { MinusCircleOutlined } from "@ant-design/icons"

export const Cart = ({ size, onClose, visible, orders, setOrders }) => {
  const [total, setTotal] = useState()

  useEffect(() => {
    const totalPrice = orders.reduce((sum, currentOrder) => {
      return sum + currentOrder.total
    }, 0)
    setTotal(totalPrice)
  }, [orders])

  const removeOrder = (orderIndex) => {
    const updatedOrders = orders.filter((_order, index) => index !== orderIndex)
    setOrders(updatedOrders)
  }
  return (
    <Drawer
      title={`${size} Drawer`}
      placement="right"
      size="large"
      onClose={onClose}
      visible={visible}
      extra={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" onClick={onClose}>
            OK
          </Button>
        </Space>
      }
    >
      {orders.map((order, index) => {
        return (
          <div key={index}>
            <h3>{order.size}</h3>
            <p>{order.options[0].topping.name}</p>
            <h3>{order.total}</h3>
            <MinusCircleOutlined onClick={() => removeOrder(index)} />
          </div>
        )
      })}
      <h3>Total: {total}</h3>
    </Drawer>
  )
}
