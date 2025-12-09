---
layout: home
---

<!-- Google fonts -->
<link href="https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght@0,800;1,800&family=TASA+Orbiter:wght@400..800&display=swap" rel="stylesheet">

<!-- CSS styling for page elements -->
<style>
   
  .page-content {
    padding-top: 70px !important;
  }
  
  .wrapper {
    max-width: 100% !important;
    width: 100% !important;
    padding: 0;
  }
  
  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
  }

  .leftColumn {
    width: 20%;
    position: sticky;
    align-self: flex-start;
    padding-left: 120px;
  }

  .rightColumn {
    width: 68%;
  }

  body h1 {
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: italic;
    text-align: center;
    font-size: 28px;
  }

  body h2, h3, h4 {
    font-family: "Google Sans Code", monospace;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
  }

  body p {
    font-family: "TASA Orbiter", sans-serif;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
  }

   figure {
     display: inline-block;
     text-align: center;
     margin: 0 0 20px 0; 
   }

   figure img {
     display: block;
     margin: 0 auto;
   }

   figure figcaption {
     font-family: "TASA Orbiter", sans-serif;
     font-optical-sizing: auto;
     font-weight: <weight>;
     font-style: italic;
     text-align: center;
     margin-top: 8px;
   }

  .button {
    font-family: "TASA Orbiter", sans-serif;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
    background-color: #D98199;
    border-radius: 8px;
    border-color: #FDFDFD;
    padding: 8px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }

  .button:hover {
    background-color: #CF5E7C;
    text-decoration-color: #FDFDFD;
  }

  .linkText {
    color: #FDFDFD;
  }

   .leftColumn ul {
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: 20px;
   }
   
  #scrollToTopButton {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    font-size: 18px;
    background-color: #D98199;
    border-radius: 8px;
    border-color: #FDFDFD;
    padding: 8px;
    font-family: "TASA Orbiter", sans-serif;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: italic;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }

  #scrollToTopButton:hover {
    background-color: #CF5E7C;
  }

</style>

<!-- Main HTML code -->
<body>
  <button onclick="scrollButtonPressed()" id="scrollToTopButton"><a href=" " style="text-decoration:none;"><span class="linkText">Scroll to top</span></a></button>
  <div class="container">
    <!-- Welcome + intro blurb -->
    <div class="leftColumn">
      <div style="display: flex; align-items: center; flex-direction: column; margin: 0 0 10px 0;">
        <img src="/assets/images/blue_headshot_edited.png" style="max-width:200px; height:auto; border-radius:150px; border-color:#FFFFFF; margin:20px 0 8px 0; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);">
        <div>
         <h1>Welcome to the ePortfolio!</h1>
          <p style="align-text: left;">Hi! I'm Noelle. Here, I showcase my best academic work in <strong>UI design, UX research, and full-stack web development</strong>, with my capstone project as the main attraction.</p>
          <p>I graduate summa cum laude with a bachelor's degree in computer science in late December 2025.</p>
        </div>
      </div>
      <hr>
      <br>
      <!-- Same-page links to project showcases for quicker access -->
      <div class="nav">
        <h3 style="text-align:center;">Quick Navigation</h3>
         <ul style="list-style-type:none; margin:0; padding:0;">
           <li><a href="#professionalSelfAssessment" class="button"><span class="linkText">Professional Self-Assessment</span></a></li>
            <li><a href="#codeReview" class="button"><span class="linkText">Capstone Code Review</span></a></li>
           <li><a href="#petAdoptApp" class="button"><span class="linkText">Pet Adoption Website Demo</span></a></li>
           <!--li><a href="#gardeningApp" class="button"><span class="linkText">Gardening Mobile App - UI/UX Design</span></a></li-->
         </ul>
      </div>
    </div>
    <div class="rightColumn">
       <!-- Professional Self-Assessment -->
       <div id="professionalSelfAssessment">
          <h2>Professional Self-Assessment</h2>
          <p>write about prompts. . .</p>
       </div>
      <!-- Code Review -->
       <div>
          <h2>Original Artifact & Code Review</h2>
          <p>Describe original artifact and what changes were proposed. . .</p>
          <p>The capstone project is about taking an existing, finished object from prior coursework and enhancing it with the skills built since its completion. I chose my final project from CS-340 (Client Server Development) to enhance, in which I used Python, PyDash, and Jupyter Notebook to create a dashboard of available rescue animals for a fictional client.</p>
          <!-- insert images of original dashboard from CS-340 here! -->
          <p>My capstone work sought to enhance the dashboard in three categories: software engineering & design, data structures & algorithms, and databases. I set out my writing a detailed plan that addressed changes in category, followed by a code review that scrutinized what, from the original project, could be kept, reworked, or ignored.</p>
          <iframe width="800" height="575" src="https://www.youtube.com/embed/m9avatN3a-M" frameborder="1" allow="accelerometer" allowfullscreen></iframe>
       </div>
      <!-- Pet Adoption App -->
      <div id="petAdoptApp">
        <h2>Pet Adoption Website Demo</h2>
        <p>In the spirit of the original project's theme, I reworked the dashboard into a pet adoption website that demonstrates basic viewing, filtering, and sorting capabilities. To build my frontend and backend skills, I opted to work with frameworks that hadn't been covered by my schoolwork: React for the frontend, Flask for the backend. </p>
        <h3>Software Design & Development - React + Flask</h3>
        <h4>UI Design, UX Research</h4>
        <p>Talk about UI/X stuff here. . .</p>
        <h4>React frontend</h4>
         <figure>
            <img src="/assets/images/amp_home_1.png" style="max-width:800px">
            <figcaption>AdoptMePls! Home page</figcaption>
         </figure>
         <br>
         <figure>
            <img src="/assets/images/amp_filters_applied.png" style="max-width:800px">
            <figcaption>AdoptMePls! Home page with filters and sorting applied</figcaption>
         </figure>
         <br>
         <figure>
            <img src="/assets/images/amp_petdetails.png" style="max-width:800px">
            <figcaption>AdoptMePls! Pet details page</figcaption>
         </figure>
        <h4>Flask backend</h4>
        <p>Work in progress!</p>
        <h4>Narrative</h4>
        <p>Narrative goes here. . .</p>
        <h3>Data Structures & Algorithms - Merge Sort</h3>
        <p>Work in progress!</p>
        <h4>Narrative</h4>
        <p>Narrative goes here. . .</p>
        <h3>Databases - MongoDB</h3>
        <p>Work in progress!</p>
        <h4>Narrative</h4>
        <p>Narrative goes here. . .</p>
      </div>
      <!-- Gardening App -->
      <!--div id="gardeningApp">
        <h2>Gardening Mobile App UI/UX Design - Lucidchart</h2>
        <p>Description of project, purpose</p>
        <h3>Low Fidelity Wireframe</h3>
        <p>Work in progress!</p>
        <h3>High Fidelity Wireframe</h3>
        <figure>
           <img src="/assets/images/gardening_app_wireframe.png" style="max-width:800px">
           <figcaption>Labeled, full color wireframe for unnamed gardening app</figcaption>
       </figure>
    </div-->
    </div>
  </div>
</body>

<!-- JavaScript stuff -->
<script>
  // Resource used for scroll to top functionalitY: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
  let scrollToTopButton = document.getElementById("scrollToTopButton");

  window.onscroll = function() {scrollDetector()};

  function scrollDetector() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  }

  function scrollButtonPressed() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
</script>
