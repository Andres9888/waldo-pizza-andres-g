const pizzaImgUrl =
  "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kr7ormd6xl1ymkb501sv.png"

export const PizzaSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <img className="pizza-part pizza-part-1" src={pizzaImgUrl} />
        <img className="pizza-part pizza-part-2" src={pizzaImgUrl} />
        <img className="pizza-part pizza-part-3" src={pizzaImgUrl} />
        <img className="pizza-part pizza-part-4" src={pizzaImgUrl} />
      </div>
    </div>
  )
}
