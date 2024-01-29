import e from '@/assets/images/e.svg'
import f from '@/assets/images/f.svg'
import i from '@/assets/images/i.svg'
import t from '@/assets/images/t.svg'
import w from '@/assets/images/w.svg'
const Footer = () => {
  const social = [f, i, t, e, w]
  return (
    <footer className="footer">
      <h2 className="main-title">Связаться со мной</h2>
      <ul className="footer-social">
        {social.map((img) => (
          <li key={img}>
            <a href="#">
              <img src={img} alt="" />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
