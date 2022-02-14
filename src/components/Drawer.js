import React from "react"
import { Drawer as DrawerAntd, Button, Space } from "antd"

export function Drawer({ onClose, isVisible, children }) {
  return (
    <DrawerAntd
      extra={
        <Space>
          <Button type="primary" onClick={onClose}>
            Close
          </Button>
        </Space>
      }
      placement="right"
      size="large"
      title="Cart"
      visible={isVisible}
      onClose={onClose}
    >
      {children}
    </DrawerAntd>
  )
}
