import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {


    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cbe8bd1c-0958-41a8-83d1-2902e2b7bafe");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };




    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id omnis reprehenderit quae, dolorem iusto cumque eligendi, praesentium repellendus perspiciatis deleniti nam debitis. Tenetur vel repellat ea harum velit accusamus asperiores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Id delectus officiis totam. Aspernatur necessitatibus quis illum hic eligendi laboriosam amet!</p>
                <ul>
                    <li><img src={mail_icon} alt="" /> WilliamJackson@gmail.com</li>
                    <li><img src={phone_icon} alt="" /> +15-51250-150</li>
                    <li><img src={location_icon} alt="" /> 77 Massachusetts ave , combridge <br /> MA 02139, USA</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name : </label>
                    <input type="text" name='name' placeholder='Enter Your Name' required />
                    <label>Phone Number : </label>
                    <input type="tel" name="phone" placeholder='Enter Your Mobile Number' required />
                    <label>Write Your Messages Here : </label>
                    <textarea name="message" rows={6} placeholder='Enter Your Message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact
