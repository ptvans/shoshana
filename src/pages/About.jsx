import gardenPortrait from '../photos/garden-portrait.jpg'
import './About.css'

function About() {
  return (
    <div className="about">
      <section className="section-minimal">
        <div className="container">
          <h1>About Terra</h1>

          <div className="about-layout">
            <div className="about-content">
            <p>
              I am a licensed therapist partnering with individuals ready to move
              through anxiety, grief, depression, trauma, and relationship stress
              to a more peaceful, purposeful life. For over eight years, I've provided
              compassionate care in hospitals, human-services agencies, schools, and
              the non-profit sector to clients facing diverse social, economic,
              interpersonal, and circumstantial challenges.
            </p>

            <p>
              I blend Motivational Interviewing (values solicitation), ACT (psychological
              flexibility), MBCT (interrupting spirals), and attachment-informed exploration
              to progress together. From there, we use those insights to collaborate on
              manageable action plans that can lead to personal transformation.
            </p>

            <p>
              I'm committed to helping clients identify, process, and honor the emotions
              and insights that arise on their journey. My goal is to foster deep
              self-awareness, co-create a personalized roadmap of practices and strategies,
              and guide clients toward a clearer, more regulated, and more insightful space.
            </p>
            </div>

            <div className="about-portrait">
              <img src={gardenPortrait} alt="Terra" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
