<!DOCTYPE html>
<html lang="en">
  <head>
    <title>mwangi.kabiru</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,700" rel="stylesheet">

    <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css">
    <link rel="stylesheet" href="css/animate.css">
    
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">
    <link rel="stylesheet" href="css/magnific-popup.css">

    <link rel="stylesheet" href="css/aos.css">

    <link rel="stylesheet" href="css/ionicons.min.css">

    <link rel="stylesheet" href="css/bootstrap-datepicker.css">
    <link rel="stylesheet" href="css/jquery.timepicker.css">

    
    <link rel="stylesheet" href="css/flaticon.css">
    <link rel="stylesheet" href="css/icomoon.css">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>

    @include('header')
    
      <section class="home-slider owl-carousel js-fullheight">
        <div class="slider-item js-fullheight">
          <div class="overlay"></div>
          <div class="container">
            <div class="row slider-text align-items-center text-center justify-content-center" data-scrollax-parent="true">
              <div class="col-md-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                <p><a href="#" class="scroll">Hello! I'm</a></p>
                <h1 class="mb-3" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">mwangi kabiru</h1>
              </div>
            </div>
          </div>
        </div>

        <div class="slider-item js-fullheight">
          <div class="overlay"></div>
          <div class="container">
            <div class="row slider-text align-items-center text-center justify-content-center" data-scrollax-parent="true">
              <div class="col-md-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                <p><a href="#" class="scroll">I'm from Nairobi</a></p>
                <h1 class="mb-3" data-scrollax="properties: {translateY: '30%', opacity: 1.6}">A Software + Web Developer</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- END slider -->

      <section class="ftco-section about-section">
        <div class="container">
          <div class="row d-flex" data-scrollax-parent="true">
            <div class="col-md-4 author-img" style="background-image: url(images/me1.jpg);" data-scrollax=" properties: { translateY: '-70%'}"></div>
            <div class="col-md-2"></div>
            <div class="col-md-6 wrap ftco-animate">
              <div class="about-desc">
                <h1 class="bold-text">About</h1>
                <div class="p-5">
                  <h2 class="mb-5">Hi! I'm mwangi kabiru</h2>
                  <p>
                      My love language is building software and web-apps that solve real-world problems.
                      The tech world is fast paced and I strive to keep up with it in order to deliver top notch solutions.
                      Pleasure to meet you.
                  </p>
                  <p><a href="{{ asset('/cv/cv.pdf') }}" download="mwangikabiruCV"></a></p>
                  <ul class="ftco-footer-social list-unstyled mt-4">
                    <li><a href="https://github.com/BrianMwangi21"><span class="icon-github"></span></a></li>
                    <li><a href="https://www.linkedin.com/in/brian-mwangi-549567a2/"><span class="icon-linkedin"></span></a></li>
                  </ul>
                  <h5>Contact me here!</h5>
                  <p>Email: <a href="#">mwangbrian21@protonmail.com</a></p>
                  <p>Phone: <a href="#">+254 716 592266</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center mb-5 pb-5">
            <div class="col-md-7 text-center heading-section ftco-animate">
              <span>What i do</span>
              <h2>My services</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 d-flex align-self-stretch ftco-animate">
              <div class="media block-6 services p-3 py-4 d-block text-center">
                <div class="icon mb-3"><span class="icon-layers"></span></div>
                <div class="media-body">
                  <h3 class="heading">Android App Design</h3>
                  <h3 class="heading">UI/UX Design</h3>
                  <h3 class="heading">Responsive Design</h3>
                </div>
              </div>      
            </div>
            <div class="col-md-4 d-flex align-self-stretch ftco-animate">
              <div class="media block-6 services p-3 py-4 d-block text-center">
                <div class="icon mb-3"><span class="icon-gears"></span></div>
                <div class="media-body">
                  <h3 class="heading">Data Analysis using Python</h3>
                  <h3 class="heading">A.I & Machine Learning</h3>
                  <h3 class="heading">Smart Contracts</h3>
                </div>
              </div>      
            </div>
            <div class="col-md-4 d-flex align-self-stretch ftco-animate">
              <div class="media block-6 services p-3 py-4 d-block text-center">
                <div class="icon mb-3"><span class="icon-code"></span></div>
                <div class="media-body">
                  <h3 class="heading">Web Development</h3>
                  <h3 class="heading">Laravel PhP Framework</h3>
                  <h3 class="heading">ReactJs</h3>
                </div>
              </div>    
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center mb-5 pb-5">
            <div class="col-md-7 text-center heading-section ftco-animate">
              <span>Portfolio</span>
              <h2>Checkout a few of my works</h2>
            </div>
          </div>
          <div class="row no-gutters">
          <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
            <a href="https://senator.kasangasylvia.co.ke/wp/" class="image d-flex justify-content-center align-items-center" style="background-image: url('images/portfolio1.png'); " data-scrollax=" properties: { translateY: '-30%'}">
              
            </a>
            <div class="text">
              <h4 class="subheading">Senator Sylvia Kasanga</h4>
              <h2 class="heading"><a href="#">Personal website for the esteemed Senator</a></h2>
              <p>A project that showcases my grip on wordpress and it's themes that serve the clients needs</p>
              <p><a href="https://senator.kasangasylvia.co.ke/wp/">View Project</a></p>
            </div>
          </div>
          <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
            <a href="https://senator.kasangasylvia.co.ke/wp/" class="image order-2 d-flex justify-content-center align-items-center" style="background-image: url('images/portfolio2.png'); " data-scrollax=" properties: { translateY: '-30%'}">
              
            </a>
            <div class="text order-1">
              <h4 class="subheading">Ceramic Pro Kenya</h4>
              <h2 class="heading"><a href="#">Website for the Ceramic installer company</a></h2>
              <p>A project that showcases my grip on wordpress and it's themes that serve the clients needs</p>
              <p><a href="http://ceramicprokenya.co.ke/">View Project</a></p>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section class="ftco-section ftco-counter" id="section-counter">
        <div class="container">
          <div class="row justify-content-center mb-5 pb-5">
            <div class="col-md-7 text-center heading-section ftco-animate">
              <span>Portfolio</span>
              <h2>I love to share my achievements</h2>
            </div>
          </div>
          <div class="row d-flex justify-content-start">
            <div class="col-md-5 col-sm-5 counter-wrap ftco-animate">
              <div class="block-18">
                <div class="text">
                  <span class="ftco-label">Clients</span>
                  <strong class="number" data-number="12">0</strong>
                </div>
              </div>
            </div>
          </div>
          <div class="row d-flex justify-content-center">
            <div class="col-md-5 col-sm-5 counter-wrap ftco-animate">
              <div class="block-18">
                <div class="text">
                  <span class="ftco-label">Project done</span>
                  <strong class="number" data-number="32">0</strong>
                </div>
              </div>
            </div>
          </div>
          <div class="row d-flex justify-content-end">
            <div class="col-md-5 counter-wrap ftco-animate">
              <div class="block-18">
                <div class="text">
                  <span class="ftco-label">Cups of coffee</span>
                  <strong class="number" data-number="210">0</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      @include('footer')

      <!-- loader -->
      <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div>

      </div>

    </div>


    <script src="js/jquery.min.js"></script>
    <script src="js/jquery-migrate-3.0.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.easing.1.3.js"></script>
    <script src="js/jquery.waypoints.min.js"></script>
    <script src="js/jquery.stellar.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/jquery.magnific-popup.min.js"></script>
    <script src="js/aos.js"></script>
    <script src="js/jquery.animateNumber.min.js"></script>
    <script src="js/scrollax.min.js"></script>
    <script src="js/bootstrap-datepicker.js"></script>
    <script src="js/jquery.timepicker.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
    <script src="js/google-map.js"></script>
    <script src="js/main.js"></script>
    
  </body>
</html>