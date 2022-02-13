const pizzaImgUrl =
  "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kr7ormd6xl1ymkb501sv.png"

export const PizzaSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <img src={pizzaImgUrl} className="pizza-part pizza-part-1" />
        <img src={pizzaImgUrl} className="pizza-part pizza-part-2" />
        <img src={pizzaImgUrl} className="pizza-part pizza-part-3" />
        <img src={pizzaImgUrl} className="pizza-part pizza-part-4" />
      </div>
    </div>
  )
}
