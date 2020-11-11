import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMobileAlt,
  faCarSide,
  faMoneyCheckAlt,
  faCaretRight,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { ArrowRight } from 'react-bootstrap-icons';

export class Home extends Component {
  render() {
    return (
      <div className='HmoePaga'>
        <body>
          {/* <!-- ======= Header ======= --> */}
          <header id='header' class='header-scrolled'>
            <div class='container'>
              <div id='logo' class='pull-left'>
                <p class='logo-name'>cashCars</p>
              </div>

              <nav id='nav-menu-container'>
                <ul class='nav-menu'>
                  <li class='menu-active'>
                    <a href='index.html'>Home</a>
                  </li>
                  <li>
                    <a href='#about'>About As</a>
                  </li>
                  <li>
                    <a href='#speakers'>Blogs</a>
                  </li>
                  <li>
                    <a href='#schedule'>FAQs</a>
                  </li>
                  <li>
                    <a href='#contact'>Contact us</a>
                  </li>
                  {/* <li class="buy-tickets"><a href="#buy-tickets">Buy Tickets</a></li>  */}
                </ul>
              </nav>
              {/* <!-- #nav-menu-container --> */}
            </div>
          </header>
          {/* <!-- End Header --> */}

          {/* <!-- ======= Intro Section ======= --> */}
        </body>

        <section id='intro'>
          <div class='intro-container' data-aos='zoom-in' data-aos-delay='100'>
            <h1 class='mb-4 pb-0' id='slogan'>
              Get An Estimate For Your Car Now!
            </h1>
            <h1 class='mb-4 pb-0' id='slogan'>
              Tell us about your<span> car</span>
            </h1>
            {/* //---------------------------Sellect------------------------------// */}
            <div class='container-1'>
              <div class='box-1'>
                <select
                  class='form-control'
                  name='car-years'
                  id='car-years'
                  required=''
                >
                  <option value=' '>Select Year</option>
                  <option value='2021'>2021</option>
                  <option value='2020'>2020</option>
                  <option value='2019'>2019</option>
                  <option value='2018'>2018</option>
                  <option value='2017'>2017</option>
                  <option value='2016'>2016</option>
                  <option value='2015'>2015</option>
                  <option value='2014'>2014</option>
                  <option value='2013'>2013</option>
                  <option value='2012'>2012</option>
                  <option value='2011'>2011</option>
                  <option value='2010'>2010</option>
                  <option value='2009'>2009</option>
                  <option value='2008'>2008</option>
                  <option value='2007'>2007</option>
                  <option value='2006'>2006</option>
                  <option value='2005'>2005</option>
                  <option value='2004'>2004</option>
                  <option value='2003'>2003</option>
                  <option value='2002'>2002</option>
                  <option value='2001'>2001</option>
                  <option value='2000'>2000</option>
                  <option value='1999'>1999</option>
                  <option value='1998'>1998</option>
                  <option value='1997'>1997</option>
                  <option value='1996'>1996</option>
                  <option value='1995'>1995</option>
                  <option value='1994'>1994</option>
                  <option value='1993'>1993</option>
                  <option value='1992'>1992</option>
                  <option value='1991'>1991</option>
                  <option value='1990'>1990</option>
                  <option value='1989'>1989</option>
                  <option value='1988'>1988</option>
                  <option value='1987'>1987</option>
                  <option value='1986'>1986</option>
                  <option value='1985'>1985</option>
                  <option value='1984'>1984</option>
                  <option value='1983'>1983</option>
                  <option value='1982'>1982</option>
                  <option value='1981'>1981</option>
                  <option value='1980'>1980</option>
                </select>

                <select
                  class='form-control'
                  name='car-makes'
                  id='car-makes'
                  required=''
                >
                  <option value=''>---</option>
                </select>

                <select
                  class='form-control'
                  name='car-makes'
                  id='car-makes'
                  required=''
                >
                  <option value=''>---</option>
                </select>

                <select
                  class='form-control'
                  name='car-model-trims'
                  id='car-model-trims'
                ></select>

                <select name='condition' class='form-control' required=''>
                  <option value=''>Select Condition</option>
                  <option value='Clean'>Clean</option>
                  <option value='Average'>Average</option>
                  <option value='Rough'>Rough</option>
                  <option value='Damaged'>Damaged</option>
                  <option value='Not Sure'>Not Sure</option>
                </select>
              </div>

              <div class='box-2'>
                <input
                  type='text'
                  class='form-control'
                  name='vin'
                  placeholder='VIN# ( Optional )'
                />
                <select name='financial' class='form-control' required=''>
                  <option value=''>Financial Status</option>
                  <option value='Owned'>Owned</option>
                  <option value='Financed'>Financed</option>
                </select>

                <input
                  type='text'
                  class='form-control'
                  name='mileage'
                  placeholder='Enter Mileage'
                  required=''
                ></input>

                <input
                  type='text'
                  class='form-control'
                  name='price'
                  placeholder='Asking Price'
                  required=''
                ></input>

                <input
                  type='text'
                  class='form-control'
                  name='comment'
                  placeholder='Comments'
                />
              </div>

              <div class='box-3'>
                <input
                  type='text'
                  class='form-control'
                  name='name'
                  placeholder='Full Name'
                  required=''
                />

                <input
                  type='text'
                  class='form-control'
                  name='phone'
                  placeholder='Phone Number'
                  required=''
                />

                <input
                  type='text'
                  class='form-control'
                  name='email'
                  placeholder='Email Address'
                  required=''
                />

                <input
                  type='text'
                  class='form-control'
                  name='code'
                  placeholder='Zip Code'
                  required=''
                />
              </div>

              <div class='box-4'>
                <a href='#about' class='about-btn scrollto'>
                  Get My Valuation!
                </a>
              </div>
            </div>
            {/* //---------------------------Sellect------------------------------// */}
          </div>
        </section>

        {/* //---------------------------Details------------------------------// */}

        <section id='about'>
          <div class='container' data-aos='fade-up' id='Details'>
            <div class='row'>
              <div class='col-lg-64'>
                <h2>Are You Looking To Sell Your Car For Cash ?</h2>
                <p>
                  Selling your car has never been easier! We will come to your
                  home or office at a time which is convenient for you and pay
                  you on the spot for your car in NJ. ANY MAKE, ANY MODEL, ANY
                  CONDITION! WE WILL BUY YOUR CAR! To get started today simply
                  give us a call at Toll Free +1(908) 688-4059 or fill out Our
                  Online Form, and we will be happy to assist you through this
                  swift and easy process. Have your car picked up in NJ and get
                  your CASH ON THE SPOT! We Pay Top Dollar! Call Us Now!.
                </p>
              </div>
            </div>
            <h1 id='line'>
              <span>_______________________</span>
            </h1>
            <div class='row'>
              <div id='steps'>
                <h2 id='OurSteps'>Our steps</h2>

                <FontAwesomeIcon icon={faMobileAlt} size='7x' />
                <i class='fas fa-mobile-alt' id='icon'></i>
                <ArrowRight color='#f82249' size={50} id='arrow' />

                <FontAwesomeIcon icon={faCarSide} size='7x' />
                <i class='fas fa-car-side' id='icon'></i>
                <ArrowRight color='#f82249' size={50} id='arrow' />

                <FontAwesomeIcon icon={faMoneyCheckAlt} size='7x' />
                <i class='fas fa-money-check-alt' id='icon'></i>

                <div class='clearfix'></div>
                <h3 id='willCall'>
                  Will
                  <span>call you</span> and come to you Give you cash on the
                  spot of your car
                </h3>
              </div>
            </div>
            <h1 id='line'>
              <span>_________________</span>
            </h1>
            <div>
              <h3 id='get'>
                GET CASH FOR YOUR USED CAR IN NEW JERSEY. WE PAY TOP DOLLAR. WE
              </h3>
              <h3 id='gett'>
                COME TO YOU AND BUY YOUR CAR AS IS! SELL YOUR CAR QUICKLY AND
                EASILY TODAY!
              </h3>
            </div>
          </div>
        </section>

        {/* //---------------------------Contact us------------------------------// */}

        <section id='contact' class='section-bg'>
          <div class='container' data-aos='fade-up'>
            <div class='section-header'>
              <h2>Contact Us</h2>
              <p>Nihil officia ut sint molestiae tenetur.</p>
            </div>

            <div class='row contact-info'>
              <div class='col-md-4'>
                <div class='contact-address'>
                  <i class='ion-ios-location-outline'></i>
                  <h3>Address</h3>
                  <address>A108 Adam Street, NJ 535022, USA</address>
                </div>
              </div>

              <div class='col-md-4'>
                <div class='contact-phone'>
                  <i class='ion-ios-telephone-outline'></i>
                  <h3>Phone Number</h3>
                  <p>
                    <a href='tel:+155895548855'>+1(908) 688-4059</a>
                  </p>
                </div>
              </div>

              <div class='col-md-4'>
                <div class='contact-email'>
                  <i class='ion-ios-email-outline'></i>
                  <h3>Email</h3>
                  <p>
                    <a href='mailto:info@example.com'>info@example.com</a>
                  </p>
                </div>
              </div>
            </div>

            <div class='form'>
              <form
                action='forms/contact.php'
                method='post'
                role='form'
                class='php-email-form'
              >
                <div class='form-row'>
                  <div class='form-group col-md-6'>
                    <input
                      type='text'
                      name='name'
                      class='form-control'
                      id='name'
                      placeholder='Your Name'
                      data-rule='minlen:4'
                      data-msg='Please enter at least 4 chars'
                    />
                    <div class='validate'></div>
                  </div>
                  <div class='form-group col-md-6'>
                    <input
                      type='email'
                      class='form-control'
                      name='email'
                      id='email'
                      placeholder='Your Email'
                      data-rule='email'
                      data-msg='Please enter a valid email'
                    />
                    <div class='validate'></div>
                  </div>
                </div>
                <div class='form-group'>
                  <input
                    type='text'
                    class='form-control'
                    name='subject'
                    id='subject'
                    placeholder='Subject'
                    data-rule='minlen:4'
                    data-msg='Please enter at least 8 chars of subject'
                  />
                  <div class='validate'></div>
                </div>
                <div class='form-group'>
                  <textarea
                    class='form-control'
                    name='message'
                    rows='5'
                    data-rule='required'
                    data-msg='Please write something for us'
                    placeholder='Message'
                  ></textarea>
                  <div class='validate'></div>
                </div>
                <div class='mb-3'>
                  <div class='loading'>Loading</div>
                  <div class='error-message'></div>
                  <div class='sent-message'>
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class='text-center'>
                  <button type='submit'>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* //-----------------------------footer-----------------------// */}
        <footer id='footer'>
          <div class='footer-top'>
            <div class='container'>
              <div class='copyright'>
                &copy; <strong>NJ Cash Cars</strong>. All Rights Reserved
              </div>
              <div class='credits'>
                <a href='https://bootstrapmade.com/'>
                  Call Now : +1(908) 688-4059
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
