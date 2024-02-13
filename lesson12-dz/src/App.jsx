import { useEffect, useRef, useState } from 'react'
import './App.css'
function App() {
  const [prods, setProds] = useState(null)
  const [shop, setShop] = useState(JSON.parse(localStorage.shopStore) ?? [])
  const [search, setSearch] = useState('')
  const [filteredProds, setFilteredProds] = useState(null)
  const isMounted = useRef(false)
  const filteredProducts = () => {
    if (!search) {
      setFilteredProds(prods) // Если поле поиска пустое, показываем все продукты
    } else {
      const filtered = prods.filter((prod) =>
        prod.title.toLowerCase().includes(search.toLowerCase())
      )
      setFilteredProds(filtered)
    }
  }
  useEffect(() => {
    filteredProducts()
  }, [search, prods])
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((data) => data.json())
      .then((products) => setProds(products.products))
  }, [])
  useEffect(() => {
    if (isMounted.current) {
      localStorage.shopStore = JSON.stringify(shop)
      setShop(JSON.parse(localStorage.shopStore))
    }
    isMounted.current = true
  }, [shop])

  const buy = (item) => {
    if (shop.some((i) => i === item)) {
      alert('Товар уже в корзине')
    } else {
      setShop([...shop, item])
    }
  }

  return (
    <>
      <header className="container header">
        <input
          type="text"
          placeholder="Поиск..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="shop">
          {shop?.map((i, idx) => (
            <h3 key={idx}>{i}</h3>
          ))}
        </div>
      </header>
      <main className="container main">
        {filteredProds ? (
          <div className="products__list">
            {filteredProds?.map((prod) => (
              <div key={prod.id} className="products__list-card">
                <img src={prod.thumbnail} alt="" />
                <h2>{prod.title}</h2>
                <p>{prod.description}</p>
                <span>{prod.price}$</span>
                <button onClick={() => buy(prod.title)}>BUY</button>
              </div>
            ))}
          </div>
        ) : (
          <span className="loader"></span>
        )}
      </main>
    </>
  )
}

export default App
