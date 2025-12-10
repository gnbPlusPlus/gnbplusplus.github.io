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
    overflow-x: hidden;
  }

  .rightColumn {
    width: 68%;
  }

   .rightColumn p {
      max-width: 800px;
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
          <p style="align-text: left;">Hi! I'm Noelle. Here, I showcase my best academic work in <strong>UI design, UX research, and full-stack web development</strong>. You can view the website I made for my capstone project, a pet adoption demo called AdoptMePls!, <a href="https://adoptmepls.vercel.app/">here</a>./</p>
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
          <p>The capstone project is about taking an existing, finished object from prior coursework and enhancing it with the skills built since its completion. I chose my final project from CS-340 (Client Server Development) to enhance, in which I used Python, PyDash, and Jupyter Notebook to create a dashboard of available rescue animals for a fictional client.</p>
          <figure>
            <img src="/assets/images/original_dashboard.png" style="width:800px">
            <figcaption>Original dashboard from CS-340</figcaption>
          </figure>
          <p>My capstone work sought to enhance the dashboard in three categories: software engineering & design, data structures & algorithms, and databases. I set out by writing a detailed plan that addressed changes in each category, followed by a code review that scrutinized what, from the original project, could be kept, reimagined, or ignored.</p>
          <iframe width="800" height="575" src="https://www.youtube.com/embed/m9avatN3a-M" frameborder="1" allow="accelerometer" allowfullscreen></iframe>
       </div>
      <!-- Pet Adoption App -->
      <div id="petAdoptApp">
        <h2>Pet Adoption Website Demo</h2>
        <p>In the spirit of the original project's theme, I reworked the dashboard into a pet adoption website demo that demonstrates basic viewing, filtering, and sorting capabilities on a database of available pets.</p>
        <p>To build my frontend and backend skills, I opted to work with frameworks that hadn't been covered by my schoolwork: React for the frontend and Flask for the backend. I reused MongoDB from the original project, since a nonrelational database makes the most sense for a group of pets with varying attributes, but made my own from scratch using MongoDB Atlas. Finally, sorting the pets is done using the merge sort algorithm to demonstrate my familiarity with choosing and using an appropriate algorithm given project and runtime considerations.</p> 
         <p>The enhancements made in each of the three major categories are discussed further below.</p>
        <h3>Software Design & Development - React + Flask</h3>
        <h4>UI Design, UX Research</h4>
        <p>First, I looked at similar services from both PetFinder and a local animal adoption service, Mountain Pet Rescue. I took note of the features they had and how those features were arranged. For example, both websites displayed available pets in individual "cards" in a grid and had extensive filtering options for qualities like breed, age, and size. I liked both of these aspects, so I knew I wanted to include the same ideas in my design.</p> 
        <p>These services were much more visual and customizable than my original project, especially in their use of photos, colors, and filter combinations, so I prepared five interview questions that homed in on the importance of images and filters when using an adoption service and conducted informal interviews with three potential users. The answers to these questions have been paraphrased below.</p>
        <h4>The website</h4>
         <figure>
            <img src="/assets/images/amp_home_1.png" style="width:800px">
            <figcaption>AdoptMePls! Home page</figcaption>
         </figure>
         <br>
         <figure>
            <img src="/assets/images/amp_filters_applied.png" style="width:800px">
            <figcaption>AdoptMePls! Home page with filters and sorting applied</figcaption>
         </figure>
         <br>
         <figure>
            <img src="/assets/images/amp_petdetails.png" style="width:800px">
            <figcaption>AdoptMePls! Pet details page</figcaption>
         </figure>
        <h4>Narrative</h4>
        <p>Narrative goes here. . .</p>
        <h3>Data Structures & Algorithms - Merge Sort</h3>
         <figure>
            <img src="/assets/images/amp_merge_sort.PNG" style="width:800px">
            <figcaption>Merge sort algorithm implemented in the backend</figcaption>
        </figure>
        <p>Work in progress!</p>
        <h4>Narrative</h4>
        <p>Narrative goes here. . .</p>
        <h3>Databases - MongoDB</h3>
        <figure>
            <img src="/assets/images/amp_database_document.PNG" style="width:800px">
            <figcaption>Database document from adoptmepls-database "pets" collection </figcaption>
        </figure>
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
