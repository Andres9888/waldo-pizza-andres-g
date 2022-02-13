import React, { useEffect, useState } from "react"
import { Drawer, Button, Space, Card } from "antd"
import { CloseCircleOutlined } from "@ant-design/icons"
import { formatPrice } from "helper/formatPrice"
export const Cart = ({ onClose, visible, orders, setOrders }) => {
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
  return (
    <Drawer
      title="Cart"
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
      {orders.map(({ size, total: subTotal, options }, index) => {
        return (
          <Card key={index}>
            <h4>{`${size} Pizza`}</h4>

            {options.map(({ price, topping }) => (
              <>
                <h5>
                  + {topping} : {price}
                </h5>
              </>
            ))}
            <h4>{formatPrice(subTotal)}</h4>
            <CloseCircleOutlined onClick={() => removeOrder(index)} />
          </Card>
        )
      })}
      <h3>Total: {formatPrice(total)}</h3>
    </Drawer>
  )
}
