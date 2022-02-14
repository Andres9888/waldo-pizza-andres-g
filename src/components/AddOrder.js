import { ShoppingCartOutlined } from "@ant-design/icons"
import { Button } from "antd"

export const AddOrder = ({ submitOrder, formatPrice, total }) => {
  return (
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
  )
}
