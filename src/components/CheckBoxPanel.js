import { useEffect, useState } from "react"
import { ShoppingCartOutlined } from "@ant-design/icons"
import { Button } from "antd"

import { formatPrice } from "helper/formatPrice"

export const CheckBoxPanel = ({
  toppings,
  maxToppings,
  basePrice,
  setOrders,
  orders,
  size,
}) => {
  const [checkedState, setCheckedState] = useState()
  const [total, setTotal] = useState()
  const sumPrice = (checkboxsState) => {
    return checkboxsState.reduce((sum, { isSelected, price }) => {
      if (isSelected === true) {
        return sum + price
      }
      return sum
    }, 0)
  }
  useEffect(() => {
    const defaultCheckState = toppings.map((topping) => {
      return {
        isSelected: topping.defaultSelected,
        topping: topping.topping.name,
        price: topping.topping.price,
      }
    })
    const totalPrice = sumPrice(defaultCheckState)

    setTotal(totalPrice + basePrice)
    setCheckedState(defaultCheckState)
  }, [toppings, basePrice])

  const handleOnChange = (checkboxIndex) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === checkboxIndex
        ? { ...item, isSelected: !item.isSelected }
        : { ...item }
    )

    const totalChecked = updatedCheckedState.filter(
      ({ isSelected }) => isSelected === true
    ).length

    if (totalChecked <= maxToppings || maxToppings === null) {
      setCheckedState(updatedCheckedState)

      const totalPrice = sumPrice(updatedCheckedState)

      setTotal(totalPrice + basePrice)
    }
  }
  const submitOrder = () => {
    const options = checkedState.filter(
      (_topping, index) => checkedState[index].isSelected === true
    )
    setOrders([...orders, { size: size, total: total, options: options }])
  }
  if (!checkedState) return null

  return (
    <div className="App">
      <h3>Select Toppings</h3>
      <h4>Limit : {maxToppings}</h4>
      <ul className="toppings-list">
        {toppings.map(({ topping: { name, price } }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index].isSelected}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
                <div className="right-section">{formatPrice(price)}</div>
              </div>
            </li>
          )
        })}
        <li>
          <div className="toppings-list-item">
            <Button onClick={submitOrder}>
              <ShoppingCartOutlined />
              Add
            </Button>
            <div className="left-section">Total:</div>
            <div className="right-section">{formatPrice(total)}</div>
          </div>
        </li>
      </ul>
    </div>
  )
}
