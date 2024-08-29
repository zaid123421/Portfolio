import { useState } from "react"


export default function Header() {

  const [isOpened, setIsOpened] = useState(false);

  function handleClick() {
    setIsOpened(!isOpened);
  }

  return(
    <div className = "container header">
      <nav>
        <i onClick = {handleClick} className = "fa-solid fa-bars toggle-menu"></i>
        {
          isOpened &&
          <ul className = "small-screens-ul">
            <li><a href = "#home">Home</a></li>
            <li><a href = "#about-me">About Me</a></li>
            <li><a href = "#my-projects">My Projects</a></li>
            <li><a href = "#contact-me">Contact Me</a></li>
          </ul>
        }
          <ul className = "large-screens-ul">
            <li><a href = "#home">Home</a></li>
            <li><a href = "#about-me">About Me</a></li>
            <li><a href = "#my-projects">My Projects</a></li>
            <li><a href = "#contact-me">Contact Me</a></li>
          </ul>
      </nav>
    </div>
  )
}