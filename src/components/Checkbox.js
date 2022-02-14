export const Checkbox = ({
  index,
  name,
  handleOnChange,
  formatPrice,
  price,
  checkedState,
}) => {
  return (
    <li key={index}>
      <div className="toppings-list-item">
        <div className="left-section">
          <input
            checked={checkedState[index].isSelected}
            id={`custom-checkbox-${index}`}
            name={name}
            type="checkbox"
            value={name}
            onChange={() => handleOnChange(index)}
          />
          <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
        </div>
        <div className="right-section">{formatPrice(price)}</div>
      </div>
    </li>
  )
}
