---
layout: home
---

<!-- Google fonts -->
<link href="https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght@0,800;1,800&family=TASA+Orbiter:wght@400..800&display=swap" rel="stylesheet">

<!-- CSS styling for page elements -->
<style>
  .container {
    display: flex;
    max-width: 100%;
  }

  .leftColumn {
    width: 25%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    overflow-y: auto;
    padding: 70px 0 0 75px;;
    box-sizing: border-box;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .leftColumn::-webkit-scrollbar {
    display: none;
  }

  .rightColumn {
    margin-left: 10%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

   .rightColumn > * {
    max-width: 800px;
    width: 100%;
   }

  .rightColumn figure {
    width: auto;
    margin: 0 auto;
    display: block;
  }

  body h1 {
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: italic;
    text-align: center;
    font-size: 28px;
  }

  body h2, body h3, body h4 {
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
    text-indent: 5px;
  }

   figure {
     display: inline-block;
     text-align: center;
     margin: 0 0 20px 0; 
   }

   figure img {
     display: block;
     margin: 0 auto;
     border: 1px solid black;
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
          <p>Hi! I'm Noelle. In this ePortfolio, I showcase my best academic work in <strong>UI design, UX research, and full-stack web development</strong>.</p>
          <p>You can view the website I made for my capstone project, a pet adoption demo called <em>AdoptMePls</em>, <a href="https://adoptmepls.vercel.app/" target="_blank">here</a>.</p>
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
       <div id="codeReview">
          <h2>Original Artifact & Code Review</h2>
          <p>The capstone project was about taking an existing, finished object from prior coursework and enhancing it with the skills built since its completion. I chose my final project from CS-340 (Client Server Development) to enhance, in which I used Python, PyDash, and Jupyter Notebook to create a dashboard of available rescue animals for a fictional client.</p>
          <figure>
            <img src="/assets/images/original_dashboard2.png" style="width:800px">
            <figcaption>Original dashboard from CS-340</figcaption>
          </figure>
          <br>
          <p>My capstone work sought to enhance the dashboard in three categories: <strong>software engineering & design, data structures & algorithms, and databases</strong>. I set out by writing a detailed plan that addressed changes in each category, followed by a code review that scrutinized what, from the original project, could be kept, reimagined, or ignored.</p>
          <iframe width="800" height="575" src="https://www.youtube.com/embed/m9avatN3a-M" frameborder="1" allow="accelerometer" allowfullscreen></iframe>
       </div>
       <br>
      <!-- Pet Adoption App -->
      <div id="petAdoptApp">
        <h2>Pet Adoption Website Demo</h2>
        <p>In the spirit of the original project's theme, I reworked the dashboard into a pet adoption website demo that demonstrates basic viewing, filtering, and sorting capabilities on a database of available pets. View the latest iteration of <em>AdoptMePls</em> by following this link: <a href="https://adoptmepls.vercel.app/" target="_blank">https://adoptmepls.vercel.app</a>.</p>
        <p>To build my frontend and backend skills, I opted to work with frameworks that hadn't been covered by my schoolwork: React for the frontend and Flask for the backend. I reused MongoDB from the original project, since a nonrelational database makes the most sense for a group of pets with varying attributes, but made my own from scratch using MongoDB Atlas. Finally, sorting the pets is done using the merge sort algorithm to demonstrate my familiarity with choosing and using an appropriate algorithm given project and runtime considerations.</p> 
         <p>The enhancements made in each of the three major categories are discussed further below.</p>
        <h3>Software Design & Development - React + Flask</h3>
        <h4>UI Design, UX Research</h4>
        <p>First, I looked at similar services from both PetFinder and a local animal adoption service, Mountain Pet Rescue. I took note of the features they had and how those features were arranged. For example, both websites displayed available pets in individual "cards" in a grid and had extensive filtering options for qualities like breed, age, and size. I liked both of these aspects, so I knew I wanted to include the same ideas in my design.</p> 
        <p>These services were much more visual and customizable than my original project, especially in their use of photos, colors, and filter combinations, so I prepared five interview questions that homed in on the importance of images and filters when using an adoption service and conducted informal interviews with three potential users. The answers to these questions have been paraphrased below.</p>
        <figure>
            <img src="/assets/images/amp_ux_q1.PNG">
            <figcaption>Interview Question 1 & Responses</figcaption>
         </figure>
         <br>
         <figure>
            <img src="/assets/images/amp_ux_q2.PNG">
            <figcaption>Interview Question 2 & Responses</figcaption>
         </figure>
         <br>
         <figure>
            <img src="/assets/images/amp_ux_q3.PNG">
            <figcaption>Interview Question 3 & Responses</figcaption>
         </figure>
         <br>
         <figure>
            <img src="/assets/images/amp_ux_q4.PNG">
            <figcaption>Interview Question 4 & Responses</figcaption>
         </figure>
         <br>
         <figure>
            <img src="/assets/images/amp_ux_q5.PNG">
            <figcaption>Interview Question 5 & Responses</figcaption>
         </figure>
         <br>
        <p>From these responses and my research, I had enough information to design the UI. I created rough wireframes for the home page and the "pet details" page that a user visits when clicking on a pet.</p>
        <figure>
            <img src="/assets/images/amp_wireframes.PNG" style="width:800px">
            <figcaption>Home & Pet Details pages wireframes</figcaption>
        </figure>
        <br>
        <h4>The website</h4>
        <p>The website is housed on Render for the Flask backend and Vercel for the React frontend. To keep the Render backend active, since following the frontend link doesn't ping it, I used Cron to ping the backend every 14 minutes. The UI/UX research and design I performed informed the visual layout of the website and the contents of the database as I worked. Understanding the kinds of filter options users were looking for was crucial for creating a customizable experience that fulfilled user requirements.</p>
         <figure>
            <img src="/assets/images/amp_home_1.png" style="width:600px, height:350px">
            <figcaption>AdoptMePls! Home page</figcaption>
         </figure>
         <br>
         <figure>
            <img src="/assets/images/amp_filters_applied.png" style="width:600px, height:350px">
            <figcaption>AdoptMePls! Home page with filters and sorting applied</figcaption>
         </figure>
         <br>
         <figure>
            <img src="/assets/images/amp_petdetails.png" style="width:600px, height:350px">
            <figcaption>AdoptMePls! Pet details page</figcaption>
         </figure>
         <br>
        <h4>Narrative (Describe, Justify, Reflect)</h4>
        <p>The artifact is a functioning React + Flask web application (app) for a pet adoption service that expands greatly upon the original dashboard concept from my CS-340 project. Through research and user interviews, I found that images were important for pet browsing and eventual adoption, so I changed the dashboard design to be more visual than textual. I also added to the amount and types of filter options available for filtering pets in the database. The first iteration of this web app was created in Mid-November, 2025, and the latest iteration was completed in early-December, 2025.</p>
        <p>This website is worthy of inclusion in my ePortfolio because it shows my experience with React, Flask, Python, JavaScript, HTML, and CSS, all of which are applicable skills toward my goal of working in web development. My cursory work with UI/UX design and research to prep for this project is also relevant to both developer and designer roles. Given the extensive changes that were made from the original dashboard, this website shows both my ability to reimagine an older piece of software with different tools <em>and</em> introduce changes to the software based on user research.</p>
        <p>As I spent time creating and improving this aspect of the project, I learned that 1) creating the skeleton of a full-stack app is relatively easy, but fleshing it out is hard, 2) I really enjoy working with React and CSS, and 3) rem (relative to root element) sizing should be used over px (pixel) sizing to create uniformity across browser screens. A lot of my time was spent adjusting items in CSS and figuring out how best to nest items and use class names to avoid redundant or confusing style rules. I often had to stop development to look through articles or tutorials for syntax and logic questions, especially because this was the largest project I'd made with React.</p>
        <h3>Data Structures & Algorithms - Merge Sort</h3>
         <figure>
            <img src="/assets/images/amp_merge_sort.PNG" style="width:800px">
            <figcaption>Merge sort algorithm implemented in the backend</figcaption>
        </figure>
        <br>
        <p>Work in progress!</p>
        <h4>Narrative (Describe, Justify, Reflect)</h4>
        <p>Narrative goes here. . .</p>
        <h3>Databases - MongoDB</h3>
        <figure>
            <img src="/assets/images/amp_database_document.PNG" style="width:800px">
            <figcaption>Database document from adoptmepls-database "pets" collection </figcaption>
        </figure>
        <br>
        <p>Work in progress!</p>
        <h4>Narrative (Describe, Justify, Reflect)</h4>
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
