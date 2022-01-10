import "./style.css"

export function Header(){
  return(
    <header className="header">
      <div className="toolbar">
          <div className="">
            <span>Conecta Dev</span>
          </div>
          <div className="">
            <button>Novo Post</button>
            <span>img1</span>
            <span>img2</span>
          </div>
      </div>
    </header>
  )
}