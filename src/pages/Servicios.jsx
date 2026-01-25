import ContactForm from '../components/ContactForm'
import './Servicios.css'

function Servicios() {
  return (
    <div className="servicios">
      <section className="section-minimal">
        <div className="container-narrow">
          <h1>Servicios en Español</h1>

          <div className="servicios-content">
            <p>
              Soy una terapeuta licenciada que trabaja con personas listas para
              superar la ansiedad, el duelo, la depresión, el trauma y el estrés
              en las relaciones hacia una vida más pacífica y con propósito.
            </p>

            <p>
              Ofrezco servicios de terapia en español para individuos y parejas.
            </p>

            <h2>Especialidades</h2>

            <div className="specialty-group">
              <h3>Para Individuos</h3>
              <p>ACT (flexibilidad psicológica)</p>
              <p>Entrevista Motivacional (exploración de valores)</p>
              <p>MBCT (interrupción de espirales)</p>
              <p>Enfoque informado en trauma</p>
            </div>

            <div className="specialty-group">
              <h3>Para Parejas</h3>
              <p>El Método Gottman para relaciones</p>
            </div>

            <h2>Tarifas</h2>

            <div className="rates-list">
              <div className="rate-item">
                <span className="rate-service">Sesiones Individuales</span>
                <span className="rate-price">$150</span>
              </div>
              <div className="rate-item">
                <span className="rate-service">Sesiones de Parejas</span>
                <span className="rate-price">$300</span>
              </div>
            </div>

            <div className="rates-notes">
              <p>
                Por favor tenga en cuenta que no estoy dentro de la red de seguros.
                Puedo proporcionar un superbill para reembolso de seguro si lo solicita.
              </p>
              <p>
                Ofrezco una escala de tarifas ajustable según sea necesario.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="section-minimal">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

export default Servicios
