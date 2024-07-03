
import Form from 'react-bootstrap/Form';
import plantasVerdes from "../img/plantas_rayita.png";
import "../styles/style.css";
function ContactUs(){
return(
        <div className="container-contact w-100 d-flex">
            <div className="container-left text-contact align-content-start">
                <h4 className="poppins-regular title">
                Contáctanos
                </h4>
                <h4 className="poppins-light subtitle">
                Nos encantaría brindarte <br/>más información.
                </h4>
                <img src={plantasVerdes} className='img-contact'/>
            </div>
            <div className="container-right align-content-start">
            <div className='container-form'>
            <Form>
      <Form.Group className="mb-3  space-between-form" controlId="contactUsForm.ControlInput1">
        <Form.Control type="email" placeholder="Nombre completo" className='border border-secondary'/>
      </Form.Group>
      <Form.Group className="mb-3  space-between-form" controlId="contactUsForm.ControlInput2">
        <Form.Control type="email" placeholder="Correo electrónico" className='border border-secondary'/>
      </Form.Group>
      <Form.Group className="mb-3  space-between-form" controlId="contactUsForm.ControlTextArea1">
        <Form.Control as="textarea" rows={5} className='border border-secondary' placeholder='Mensaje'/>
      </Form.Group>
      <Form.Group className='d-flex justify-content-center'>
      <button type="button" className="btn btn-success custom-button-green custom-button mt-0">Enviar</button>
      </Form.Group>
      
    </Form>
    
            </div>
            </div>
        </div>
);
}
export default ContactUs;