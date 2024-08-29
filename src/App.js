import Header from './Components/Header';
import side from '../src/assets/Remove-bg.ai_1724176976726.png'

export default function App() {

  return (
    <div>
      <Header />
      <div id = 'home'>
        <div className = 'container'>
          <div>
            <h1><span>Front - End</span> <span>React</span><br/> <span>Developer</span></h1>
            <p>
              Hello I am Zaid Alshamaa And I am A Web Developer Using React Library
              You Can See Some Details About Me And Some Of My Works On This Page.
            </p>
          </div>
            <img className = 'home-img' src = {side} alt = 'img'></img>
        </div>
      </div>
        <div id = 'about-me'>
          <div className = 'container'>
            <h1 className = 'special-head'>About Me</h1>
            <p>
              مرحباًّ ! أنا زيد الشمعه أدرس في كلية الهندسية المعلوماتية في السنة الرابعة قسم هندسية البرمجيات، جامعة دمشق، وأعيش حالياً في ضاحية قدسيا، ريف دمشق، تاريخ الميلاد هو 23/7/2002، أما بالنسبة للخدمة العسكرية فأنا مؤجل دراسياً
            </p>
          </div>
        </div>
        <div id = 'my-projects'>
          <div className = 'my-projects-background'>
            <div className = 'container'>
              <h1 className = 'special-head'>My Projects</h1>
            </div>
            <div className = 'projects-grid container'>
              <div className = 'project-box'>
                <div>
                  <img src = {side} alt = 'project'></img>
                </div>
                <div className = 'text-box'>
                  <h3>Voyago</h3>
                  <a href = 'https://zaid123421.github.io/Voyago-Dashboard/' target = '_blank' rel = 'noreferrer'>
                    Browse The Project
                    <i className = "fa-solid fa-arrow-up-long"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id = 'contact-me'>
          <div className = 'container'>
            <h1 className = 'special-head'>Contact Me</h1>
          </div>
            <div className = 'info-box'>
              <a href = '#call'>
                <i className="fa-solid fa-phone"></i>
                <span id='call'>Call</span>
                <span>+963 936 293 119</span>
              </a>
              <a href = '#whats'>
                <i className="fa-brands fa-whatsapp"></i>
                {/* <i className = "fa-brands fa-square-whatsapp"></i> */}
                <span id='whats'>What's App</span>
                <span>+963 936 293 119</span>
              </a>
              <a href = '#tele'>
                <i className = "fa-brands fa-telegram"></i>
                <span id='tele'>Telegram</span>
                <span>
                  @Zaid_Alshamaa
                </span>
              </a>
              <a href = 'mailto:zshamaa20@gmail.com' target='_blank' rel = 'noreferrer'>
                <i className="fa-regular fa-envelope"></i>
                <span>Gmail</span>
                <span>zshamaa20@gmail.com</span>
              </a>
              <a href = 'https://www.facebook.com/zaid.shamaa.7' target='_blank' rel = 'noreferrer'>
                <i className="fa-brands fa-facebook"></i>
                <span>Facebook</span>
                <span>Zaid Alshamaa</span>
              </a>
              <a href = 'https://github.com/zaid123421' target='_blank' rel = 'noreferrer'>
                <i className="fa-brands fa-github"></i>
                <span>Github</span>
                <span>zaid123421</span>
              </a>
            </div>
        </div>
    </div>
  );
}