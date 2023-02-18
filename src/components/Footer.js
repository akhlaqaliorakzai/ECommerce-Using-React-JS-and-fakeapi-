import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'

export default function Footer(){
    return(
            <footer className="page-footer font-small mdb-color lighten-3 pt-4 text-danger shadow-lg">
                  {/* Footer Links */}
                  <div className="container text-center text-md-left">
                    {/* Grid row */}
                    <div className="row">
                      {/* Grid column */}
                      <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
                        {/* Content */}
                        <h5 className="font-weight-bold text-uppercase mb-4">About Us</h5>
                        <p>You can check us about us</p>
                      </div>
                      {/* Grid column */}
                      <hr className="clearfix w-100 d-md-none" />
                      {/* Grid column */}
                      <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
                        {/* Links */}
                        <h5 className="font-weight-bold text-uppercase mb-4">Categories</h5>
                        <ul className="list-unstyled">
                         
                          <li>
                            <p>
                              <a href="#!" className='text-decoration-none text-danger'>Men's Collection</a>
                            </p>
                          </li>
                          <li>
                            <p>
                              <a href="#!" className='text-decoration-none text-danger'>Women's Collection</a>
                            </p>
                          </li>
                          <li>
                            <p>
                              <a href="#!" className='text-decoration-none text-danger'>Kid's Collection</a>
                            </p>
                          </li>
                        </ul>
                      </div>
                      {/* Grid column */}
                      <hr className="clearfix w-100 d-md-none" />
                      {/* Grid column */}
                      <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
                        {/* Contact details */}
                        <h5 className="font-weight-bold text-uppercase mb-4">Address</h5>
                        <ul className="list-unstyled">
                          <li>
                            <p>
                              <i className="fa fa-home mr-3" /> Sukkur IBA University</p>
                          </li>
                          <li>
                            <p>
                              <i className="fa fa-envelope mr-3" /> info@iba-suk.edu.pk</p>
                          </li>
                          <li>
                            <p>
                              <i className="fa fa-phone mr-3" /> 03233302343</p>
                          </li>
                          <li>
                            <p>
                              <i className="fa fa-print mr-3" /> 071-5644000 / 05</p>
                          </li>
                        </ul>
                      </div>
                      {/* Grid column */}
                      <hr className="clearfix w-100 d-md-none" />
                      {/* Grid column */}
                      <div className="col-md-2 col-lg-2 text-center mx-auto my-4">
                        {/* Social buttons */}
                        <h5 className="font-weight-bold text-uppercase mb-4">Follow Us</h5>
                        {/* Facebook */}
                        <a type="button" className="btn-floating btn-fb">
                          <i className="fa fa-facebook-f fa-lg mb-3 text-danger" />
                        </a><br/>
                        {/* Twitter */}
                        <a type="button" className="btn-floating btn-tw">
                          <i className="fa fa-twitter fa-lg mb-3 text-danger" />
                        </a><br/>
                        {/* Google +*/}
                        <a type="button" className="btn-floating btn-gplus">
                          <i className="fa fa-google-plus fa-lg mb-3 text-danger" />
                        </a><br/>
                        {/* Dribbble */}
                        <a type="button" className="btn-floating btn-dribbble">
                          <i className="fa fa-dribbble fa-lg mb-3 text-danger" />
                        </a>
                      </div>
                      {/* Grid column */}
                    </div>
                    {/* Grid row */}
                  </div>
                  {/* Footer Links */}
                  {/* Copyright */}
                  <div className="footer-copyright text-center py-3">© 2022 Copyright:
                    <a href="https://mdbootstrap.com/" className='text-decoration-none text-danger'> ApnaCommerce.com</a>
                  </div>
                  {/* Copyright */}
                </footer>
             
    )
}