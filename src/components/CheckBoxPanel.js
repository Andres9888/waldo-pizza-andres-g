import { useEffect, useState } from "react"

import { formatPrice } from "helper/formatPrice"
import { AddOrder, CheckBoxList } from "components"

export const CheckBoxPanel = ({
  toppings,
  maxToppings,
  basePrice,
  setOrders,
  orders,
  size,
}) => {
  const [checkedBoxs, setCheckedBoxs] = useState()
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
    const initialCheckBoxState = toppings.map(
      ({ topping, defaultSelected }) => {
        return {
          isSelected: defaultSelected,
          topping: topping.name,
          price: topping.price,
        }
      }
    )
    const totalPrice = sumPrice(initialCheckBoxState)

    setTotal(totalPrice + basePrice)
    setCheckedBoxs(initialCheckBoxState)
  }, [toppings, basePrice])

  const handleOnChange = (checkboxIndex) => {
    const updatedCheckedState = checkedBoxs.map((checkBox, mapIndex) =>
      mapIndex === checkboxIndex
        ? { ...checkBox, isSelected: !checkBox.isSelected }
        : { ...checkBox }
    )

    const totalChecked = updatedCheckedState.filter(
      ({ isSelected }) => isSelected === true
    ).length

    if (totalChecked <= maxToppings || maxToppings === null) {
      setCheckedBoxs(updatedCheckedState)

      const totalPrice = sumPrice(updatedCheckedState)

      setTotal(totalPrice + basePrice)
    }
  }
  const submitOrder = () => {
    const options = checkedBoxs.filter(
      (_topping, index) => checkedBoxs[index].isSelected === true
    )
    setOrders([...orders, { size, total, options }])
  }
  if (!checkedBoxs) return null

  return (
    <div>
      <h3>Select Toppings</h3>
      <h4>Limit : {maxToppings}</h4>
      <ul className="toppings-list">
        <CheckBoxList
          toppings={toppings}
          checkedState={checkedBoxs}
          handleOnChange={handleOnChange}
        />
        <AddOrder
          submitOrder={submitOrder}
          formatPrice={formatPrice}
          total={total}
        />
      </ul>
    </div>
  )
}
