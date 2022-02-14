import { formatPrice } from "helper/formatPrice"
import { Checkbox } from "components"

export const CheckBoxList = ({ toppings, checkedState, handleOnChange }) => {
  return toppings.map(({ topping: { name, price } }, index) => (
    <Checkbox
      checkedState={checkedState}
      index={index}
      name={name}
      handleOnChange={handleOnChange}
      formatPrice={formatPrice}
      price={price}
    />
  ))
}
