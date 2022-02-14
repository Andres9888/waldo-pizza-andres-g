import React from "react"
import { CloseCircleOutlined } from "@ant-design/icons"
import { Card } from "antd"
import { formatPrice } from "helper/formatPrice"

export const PizzaOrder = ({ size, options, index, removeOrder, subTotal }) => {
  return (
    <Card>
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
}
