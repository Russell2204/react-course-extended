import Tvs from "components/TAM/Tvs"
import Movies from "components/TAM/Movies"
import Upcoming from "components/Upcoming/Upcoming"

const HomePage:React.FC = () => {
  return (
    <main className="main">
      <Upcoming/>
      <Movies/>
      <Tvs/>
    </main>
  )
}
export default HomePage