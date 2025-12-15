
import Form from 'react-bootstrap/Form';
import plantasVerdes from "../img/plantas_rayita.png";
import { sendEmail } from '../hooks/use-api-arbolesVerdes';
import "../styles/style.css";
import { toast } from "react-toastify";
import { useState } from 'react';

function ContactUs() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const handleSend = async () => {

    const result = await sendEmail(
      name,
      email,
      content
    );

    if (result.status === "success") {
      toast.success("¡Mensaje enviado con éxito!");
      setName("");
      setEmail("");
      setContent("");
    } else {
      toast.error("Ocurrió un error al enviar el mensaje.");
    }
  };

  return (
    <div className="container-contact w-100 d-flex">
      <div className="container-left text-contact align-content-start">
        <h4 className="poppins-regular title">Contáctanos</h4>
        <h4 className="poppins-light subtitle">
          Nos encantaría brindarte <br />más información.
        </h4>
        <img src={plantasVerdes} className="img-contact" />
      </div>

      <div className="container-right align-content-start">
        <div className="container-form justify-self-center">

          <Form>
            <Form.Group className="mb-3 space-between-form">
              <Form.Control 
                type="text" 
                placeholder="Nombre completo"
                className="border border-secondary"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3 space-between-form">
              <Form.Control 
                type="email"
                placeholder="Correo electrónico"
                className="border border-secondary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3 space-between-form">
              <Form.Control
                as="textarea"
                rows={5}
                className="border border-secondary"
                placeholder="Mensaje"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-success custom-button-green custom-button mt-0"
                onClick={handleSend}
              >
                Enviar
              </button>
            </Form.Group>
          </Form>

        </div>
      </div>
    </div>
  );
}
export default ContactUs;