import "./Contacts.css"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';


function Contacts() {
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const formRef = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_dmbhh5r', 'template_ws5iv1c', formRef.current, {
            publicKey: 'WdhUke1JK1F8dHKY4',
          })
          .then(
            () => {
                setSuccess(true);
            },
            (error) => {
              setError(true);
            },
          );
      };
  return (
    <div className="contacts">
      <div className="textContainer">
        <h1>Let's work togeather</h1>
        <div className="item">
            <h2>Mail</h2>
            <span>sagarsahil520@gmail.com</span>
        </div>
        <div className="item">
            <h2>Address</h2>
            <span>Btm 2nd stage, Bangaluru, India.</span>
        </div>
        <div className="item">
            <h2>Phone</h2>
            <span>+91-8310948499</span>
        </div>
      </div>
      <div className="formContainer">
        <form ref={formRef} onSubmit={sendEmail}>
        <input type="text" placeholder="Name" name="name" required />
        <input type="email" placeholder="Email" name="email" required />
        <textarea rows={8} placeholder="Your message" name="message" required />
        <button type="submit">Send</button>
        {error && "Somthing went wrong try again!" }
        {success && "Success"
        }
        </form>
      </div>
    </div>
  )
}

export default Contacts