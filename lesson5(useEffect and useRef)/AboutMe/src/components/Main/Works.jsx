import worker from "@/assets/images/worker.jpg"
const Works = () => {
  const workers = [1,2,3,4,5,6,7,8,9]
  return (
    <section className="works">
      <div className="container">
      <h2 className="main-title">Мои работы</h2>
        <div className="works-content">
          {workers.map((item) => (
            <div key={item} className="works-content-card">
              <img src={worker} alt="" />
              <h3>Чиланзар</h3>
              <p>Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году </p>
              <a href="#">Посмотреть</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works