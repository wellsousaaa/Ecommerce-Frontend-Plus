import "./contact.scss";
import Title from "../../components/Title";

function Contact() {
  return (
    <main>
      <h1>Contato</h1>

      <div className="contact-form">
        <form
          className="flex col align-center"
          onSubmit={(e) => {
            e.preventDefault();
            e.target.reset();
            window.alert("Mensagem enviada com sucesso!");
          }}
        >
          <div className="flex">
            <label> Nome </label>
            <input
              required
              placeholder="Insira seu nome..."
              type="text"
              name="name"
            />
          </div>

          <div className="flex">
            <label> Email </label>
            <input
              required
              placeholder="Insira seu email..."
              type="email"
              name="email"
            />
          </div>

          <div className="flex">
            <label> Assunto </label>
            <input
              required
              placeholder="Qual o assunto da mensagem?"
              type="text"
              name="subject"
            />
          </div>

          <textarea
            style={{ padding: 5 }}
            placeholder="Escreva sua mensagem..."
          ></textarea>

          <button>Enviar</button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
