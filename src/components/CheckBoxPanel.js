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
    const defaultCheckState = toppings.map(({ topping, defaultSelected }) => {
      return {
        isSelected: defaultSelected,
        topping: topping.name,
        price: topping.price,
      }
    })
    const totalPrice = sumPrice(defaultCheckState)

    setTotal(totalPrice + basePrice)
    setCheckedState(defaultCheckState)
  }, [toppings, basePrice])

  const handleOnChange = (checkboxIndex) => {
    const updatedCheckedState = checkedState.map((checkBox, index) =>
      index === checkboxIndex
        ? { ...checkBox, isSelected: !checkBox.isSelected }
        : { ...checkBox }
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
    setOrders([...orders, { size, total, options }])
  }
  if (!checkedState) return null

  return (
    <div>
      <h3>Select Toppings</h3>
      <h4>Limit : {maxToppings}</h4>
      <ul className="toppings-list">
        <CheckBoxList
          toppings={toppings}
          checkedState={checkedState}
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
