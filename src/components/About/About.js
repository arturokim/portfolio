import profile from "../../assets/images/profile.jpeg"

export default function About() {
  return (
    <section className="about">
      <div className="introduction">
        <h1>
          <div>👋 Hi, my name is</div>
          <div>Arturo Kim</div>
        </h1>
        <div>
          <div>
            <p>I'm a software engineer based in New York, NY specializing in building web applications. As I embark on my journey in software engineering, I invite you to explore my portfolio showcasing my passion for creating dynamic and user-centered web experiences. Let's build the web together!</p>
          </div>
        </div>
      </div>
      <div className="pp">
        <img id="profile-image" src={profile} alt="profile"/>
      </div>
    </section>
  )
}