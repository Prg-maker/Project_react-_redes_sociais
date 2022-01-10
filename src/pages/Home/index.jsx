import { Header } from '../../components/Header'
import './style.css'
export function Home() {
  return(
    <div>
        <Header/>
        <main className="main">
            <div className="navbar">navbar</div>
            <div className="feed">feed</div>
        </main>
    </div>
  )
}