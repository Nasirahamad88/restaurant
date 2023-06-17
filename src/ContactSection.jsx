import React from 'react';

const ContactSection = () => {
  return (
    <div className="container my-5 py-5">
      <div className="bg-primary">
        <div className="row">
          <div className="col-lg-8 col-md-12 p-5 bg-white rounded-3">
            <div className="d-flex mb-3 flex-column">
              <h1 className="h5 text-capitalize my-4">What service You need?</h1>
              <div className="d-flex flex-wrap">
                <div className="d-flex flex-wrap justify-content-center align-items-center me-4">
                  <input type="checkbox" name="webdev" className="form-check-input m-0 me-3" id="webdev" />
                  <label htmlFor="webdev">Web Development</label>
                </div>
                <div className="d-flex flex-wrap justify-content-center align-items-center me-4">
                  <input type="checkbox" name="webdes" className="form-check-input m-0 me-3" id="webdes" />
                  <label htmlFor="webdes">Web Design</label>
                </div>
                <div className="d-flex flex-wrap justify-content-center align-items-center me-4">
                  <input type="checkbox" name="logodes" className="form-check-input m-0 me-3" id="logodes" />
                  <label htmlFor="logodes">Logo Design</label>
                </div>
                <div className="d-flex flex-wrap justify-content-center align-items-center me-4">
                  <input type="checkbox" name="others" className="form-check-input m-0 me-3" id="others" />
                  <label htmlFor="others">Others</label>
                </div>
              </div>
            </div>
            <form className="row mb-3">
              <div className="col-md-6 p-3">
                <input required placeholder="First Name" type="text" name="" id="" className="form-control" />
              </div>
              <div className="col-md-6 p-3">
                <input required placeholder="Last Name" type="text" name="" id="" className="form-control" />
              </div>
              <div className="col-md-6 p-3">
                <input required placeholder="E-mail" type="email" name="" id="" className="form-control" />
              </div>
              <div className="col-md-6 p-3">
                <input required placeholder="Phone" type="tel" name="" id="" className="form-control" />
              </div>
              <div className="col-md">
                <textarea required name="" placeholder="Write your message" id="" cols="30" rows="1" className="form-control"></textarea>
              </div>
              <div className="text-end mt-4">
                <input className="btn px-4 py-3 btn-outline-dark" type="submit" value="Send Message" />
              </div>
            </form>
          </div>
          <div className="col-lg-4 col-md-12 text-white aside px-4 py-5">
            <div className="mb-5">
              <h1 className="h3">Contact Information</h1>
              <p className="opacity-50">
                <small>Fill out the form and we will get back to you within 24 hours</small>
              </p>
            </div>
            <div className="d-flex flex-column px-0">
              <ul className="m-0 p-0">
                <li className="d-flex justify-content-start align-items-center mb-4">
                  <span className="opacity-50 d-flex align-items-center me-3 fs-2">
                    <ion-icon name="call"></ion-icon>
                  </span>
                  <span>+134 1234 1234</span>
                </li>
                <li className="d-flex align-items-center r mb-4">
                  <span className="opacity-50 d-flex align-items-center me-3 fs-2">
                    <ion-icon name="mail"></ion-icon>
                  </span>
                  <span>Help@contact.com</span>
                </li>
                <li className="d-flex justify-content-start align-items-center mb-4">
                  <span className="opacity-50 d-flex align-items-center me-3 fs-2">
                    <ion-icon name="pin"></ion-icon>
                  </span>
                  <span>
                    52 Buddy Ln Conway,
                    <br />
                    Arkansas(AR), 72032
                  </span>
                </li>
              </ul>
              <div className="text-muted text-center bg-blue">
  <code>Inspiration from:</code>
  <br />
  <code>
    <a href="https://dribbble.com/shots/14126196-Contact-Form-01/attachments/5749555?mode=media">Erşad Başbağ</a>
  </code>
  <br />
  <code>Created By: walid cherhane</code>
  <br />
  <div>
    <a href="https://codepen.io/walidcherhane" target="_blank" rel="noopener noreferrer">
      <ion-icon name="logo-codepen"></ion-icon>
    </a>
  </div>
</div>


              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default ContactSection;
