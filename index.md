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
    padding: 65px 0 0 75px;;
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

  .rightColumn p {
    font-family: "TASA Orbiter", sans-serif;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
    text-indent: 25px;
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
          <p>I graduated summa cum laude with a bachelor's degree in computer science in December 2025.</p>
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
           <li><a href="#gardeningAppDesign" class="button"><span class="linkText">Gardening Mobile App Design</span></a></li>
           <li><a href="#pulseAppRedesign" class="button"><span class="linkText">Pulse App Page Re-Design</span></a></li>
           <li><a href="#kivaAppFlipphoneDesign" class="button"><span class="linkText">Kiva LoanHub App Design</span></a></li>
         </ul>
      </div>
    </div>
    <div class="rightColumn">
       <!-- Professional Self-Assessment -->
       <div id="professionalSelfAssessment">
          <h2>Professional Self-Assessment</h2>
          <h3>Growth from Pre-Program to Now</h3>
          <p>Throughout my computer science program, I watched myself grow in real-time. I went from not knowing how to declare a variable in C++ pre-program to building a full-stack web application (app) with database integration in just over two years. I credit this growth to the variety of projects I completed that built a foundation. It began with learning the basics of Python, then that paved the way for writing Java unit tests, writing user-friendly console programs in C++, training machine learning models with Keras, identifying and fixing security vulnerabilities in software, generating and translating assembly code, and learning best practices for programming. Finally, it ended with this capstone project, which applies my well-rounded foundation toward my aspirational fields: UI/UX design and full-stack development.</p>
         <h3>Skill Building in Specific Areas</h3>
         <p>My coursework helped me build skills in these areas: <strong>Team collaboration, stakeholder communication, data structures and algorithms, software engineering, databases, and security.</strong> To illustrate, I've included examples from specific classes that stood out during the program.</p>
         <h4>Team Collaboration and Stakeholder Communication</h4>
         <p>I was first introduced to UI/UX design in CS-319, and I immediately felt called to the field. As a longtime digital design hobbyist, creating delightful UIs based on thoughtful UX research is natural and fun. I often work alone on programming projects, so conducting user interviews and taking stock of feedback gives me opportunities to communicate with stakeholders and collaborate in a team-like environment. Even a rough wireframe and a handful of user stories, like the ones included in this capstone project, are enough to streamline development toward non-negotiable features. That’s why, before a major project, I take the time to research similar software, conduct user interviews, sketch wireframes, and/or pick a color palette.</p>
         <p>My coursework on the Scrum and Agile processes in CS-250 gave me more explicit practice with team collaboration and stakeholder communication. In that class, I worked with other students on discussion boards to roleplay Scrum roles. There, I played the role of Scrum Master and worked to encourage and coordinate group communication. I also had the opportunity to create and adapt software based on mock stakeholders and changing user stories.</p>
         <h4>Software Engineering, Data Structures & Algorithms, and Databases</h4>
         <p>Other 200- and 300-level courses honed my skills in software engineering, data structures and algorithms, and databases. CS-300 taught me the importance of considering runtime complexity when writing a program or implementing an algorithm. CS-340 gave me extensive practice with querying a large MongoDB database, indexing oft-queried fields, and creating aggregation pipelines. In courses like CS-255, CS-300, and CS-410, I’ve learned how to create structures like objects or nodes that can then be reused throughout the program with functions and pointers. CS-360, my course on mobile app architecture, gave me hands-on experience with designing and developing an Android app called <em>Planly</em> that functioned as a simple event scheduler.</p>
         <h4>Security</h4>
         <p>Finally, courses like CS-305, CS-320, CS-405, and CS-410 taught me about best practices for secure coding, test-driven development, and how to spot and correct vulnerabilities in code. Key takeaways have been to always use up-to-date software, implement multi-factor authentication as a minimal line of defense, validate all input, employ an unbroken encryption algorithm like SHA-256 where appropriate, and avoid hardcoding sensitive data like user credentials.</p>
         <h3>The Capstone Showcase</h3>
         <p>The capstone showcase presented here represents the term-long, self-directed project I completed in my final term during the program. It's meant to represent the completion of my degree.</p>
         <p>The following section introduces the intent of the capstone project, the artifact from my coursework I chose to enhance, and the specific enhancements I did to complete my project. Each enhancement category centers around the same original artifact, eventually culminating in the pet adoption demo website <em>AdoptMePls</em>. My goals were to use web development libraries that hadn’t been covered by my coursework and get more hands-on practice with UI/UX processes, and I achieved both.</p>
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
        <p>In the spirit of the original project's theme, I reworked the dashboard into a pet adoption demo website that demonstrates basic viewing, filtering, and sorting capabilities on a database of available pets. View the latest iteration of <em>AdoptMePls</em> by following this link: <a href="https://adoptmepls.vercel.app/" target="_blank">https://adoptmepls.vercel.app</a>.</p>
        <p>To build my frontend and backend skills, I opted to work with libraries that hadn't been covered by my schoolwork: React for the frontend and Flask for the backend. I reused MongoDB from the original project, since a nonrelational database makes the most sense for a group of pets with varying attributes, but made my own database from scratch using MongoDB Atlas. Finally, I implemented the merge sort algorithm for sorting pets to demonstrate my familiarity with choosing and using an appropriate algorithm given project and runtime considerations.</p> 
        <h3>Software Design & Development - React + Flask</h3>
        <h4>UI Design, UX Research</h4>
        <p>First, I looked at similar websites from national and local animal adoption services. I took note of the features they had and how those features were arranged. For example, both websites displayed available pets in individual "pet cards" in a grid and had extensive filtering options for qualities like breed, age, and size. I liked both of these aspects, so I knew I wanted to include the same ideas in my design.</p> 
        <p>These services were much more visual and customizable than my original project, especially in their use of photos, colors, and filter combinations, so I conducted informal interviews with potential users that homed in on the importance of images and filters when using a pet adoption service. Interviewees' answers have been paraphrased below.</p>
        <figure>
            <img src="/assets/images/amp_qs_consolidated.png">
            <figcaption>AdoptMePls interview questions & responses</figcaption>
         </figure>
         <br>
        <p>I gleaned three user stories from these responses to guide my development. With those and my other research, I had enough information to design the UI. I created rough wireframes for the home page and the "pet detail" page that would appear when a pet card is clicked.</p>
        <figure>
            <img src="/assets/images/amp_user_stories.png" style="width:800px, border:solid 4px black">
            <figcaption>AdoptMePls user stories</figcaption>
        </figure>
        <br>
        <figure>
            <img src="/assets/images/amp_wireframes.PNG" style="width:800px">
            <figcaption>Home & PetDetail pages wireframes</figcaption>
        </figure>
        <br>
        <h4>The Website</h4>
        <p>The website is housed on Render for the Flask backend and Vercel for the React frontend. To keep the Render backend active, since following the frontend link doesn't ping it, I use Cron to ping the backend every 14 minutes. To view some of the major frontend/backend files on Github, please visit the respository <a href="https://github.com/gnbPlusPlus/gnbplusplus.github.io" target="_blank">here</a>.</p>
        <p>The UI/UX research and design I performed informed the visual layout of the website and the contents of the database as I worked. Understanding the kinds of filter options users were looking for was crucial for creating a customizable experience that fulfilled requirements.</p>
        <p>Later on, and described in its own section, I added Pytests to confirm backend functionality, set up the website on an external URL with HTTPS protection, and incorporated try/except blocks to catch errors.</p>
         <figure>
            <img src="/assets/images/amp_home_1.png" style="width:600px, height:350px">
            <figcaption>AdoptMePls! Home page</figcaption>
         </figure>
         <br>
         <figure>
            <img src="/assets/images/amp_all_pets_frontend.PNG" style="width:600px, height:350px">
            <figcaption>Filtered pets are mapped to each pet card</figcaption>
         </figure>
         <br>
         <figure>
            <img src="/assets/images/amp_filters_applied.png" style="width:600px, height:350px">
            <figcaption>AdoptMePls! Home page with filters and sorting applied</figcaption>
         </figure>
         <br>
         <figure>
            <img src="/assets/images/amp_filter_logic_frontend.PNG" style="width:600px, height:350px">
            <figcaption>Dropdown values are mapped to each filter button</figcaption>
         </figure>
         <br>
         <figure>
            <img src="/assets/images/amp_petdetails.png" style="width:600px, height:350px">
            <figcaption>AdoptMePls! PetDetail page</figcaption>
         </figure>
         <br>
         <figure>
            <img src="/assets/images/amp_fetching_single_pet.PNG" style="width:600px, height:350px">
            <figcaption>A single pet is fetched for the Pet Detail page based on its ID</figcaption>
         </figure>
         <br>
        <h4>Narrative</h4>
        <p><strong>Description: </strong>The artifact is a functioning React + Flask web app for a pet adoption service that expands greatly upon the original dashboard concept. Through research and user interviews, I found that images were important for pet browsing and eventual adoption, so I changed the dashboard design to be more visual than textual. I also added to the amount and types of filters available than were present in the original project. The first iteration of this web app was created in Mid-November 2025 and the latest iteration was completed in early-December 2025.</p>
        <p><strong>Justification: </strong>This website is worthy of inclusion in my ePortfolio because it shows my experience with React, Flask, Python, JavaScript XML (JSX), HTML, and CSS, all of which are applicable skills toward my goal of working in web development. My cursory work with UI/UX design and research to prep for this project is also relevant to both developer and designer roles. Given the extensive changes that were made from the original dashboard, this website shows both my ability to reimagine an older piece of software with different tools <em>and</em> introduce changes to the software based on user research.</p>
        <p><strong>Reflection: </strong>As I spent time creating and improving this aspect of the project, I learned that (1) creating the skeleton of a full-stack app is relatively easy, but fleshing it out is hard, (2) I really enjoy working with React and CSS, and (3) rem (relative to root element) sizing should be used over px (pixel) sizing to create uniformity across browser screens. A lot of my time was spent adjusting items in CSS and figuring out how best to nest items and use class names to avoid redundant or confusing style rules. I often had to stop development to look through articles or tutorials for syntax and logic questions, especially because this was the largest project I'd made with React.</p>
        <p><strong>Course Outcomes: </strong>With the work done in this enhancement, the following course outcomes were met: </p>
        <ul>
          <em><li>"Employ strategies for building collaborative environments that enable diverse audiences to support organizational decision making in the field of computer science."</li>
          <li>"Design, develop, and deliver professional-quality oral, written, and visual communications that are coherent, technically sound, and appropriately adapted to specific audiences and contexts."</li>
          <li>"Develop a security mindset that anticipates adversarial exploits in software architecture and designs to expose potential vulnerabilities, mitigate design flaws, and ensure privacy and enhanced security of data and resources."</li></em>
        </ul>
        <h3>Data Structures & Algorithms - Merge Sort</h3>
         <p>Sorting pets based on how long they've been waiting for adoption was something that came up during the user interviews. I considered several popular algorithms for this task before settling on merge sort. It doesn't have the best runtime complexity, but it's stable. I wrote the algorithm in a Python file, stored it in the backend, and used both the frontend sort buttons and the backend API call to pass the right information to the function.</p>
         <figure>
            <img src="/assets/images/amp_merge_sort.PNG" style="width:800px">
            <figcaption>Merge sort algorithm implemented in the backend</figcaption>
        </figure>
        <br>
        <figure>
            <img src="/assets/images/amp_backend_sort_route.PNG" style="width:800px, border:solid 4px black">
            <figcaption>API call for sorting in the backend</figcaption>
        </figure>
        <br>
        <figure>
            <img src="/assets/images/amp_frontend_sort_buttons.PNG" style="width:800px">
            <figcaption>Sort buttons' onSort functions in frontend</figcaption>
        </figure>
        <br>
        <h4>Narrative</h4>
        <p><strong>Description: </strong>With this enhancement, the website gained two working sort buttons that link up to a backend algorithm. The buttons sort the animals from fewest days waiting for adoption (ascending order) to most days waiting for adoption (descending order). This part of the project was a work-in-progress for a few weeks, with development beginning in Mid-November 2025 and continuing with the addition of the database in early December 2025.</p>
        <p><strong>Justification: </strong>The specific enhancements for the algorithms category were as follows: The merge sort algorithm was included in sorting.py (backend), a route was established between the frontend and backend for sorting.py, an arrow function was added to Home.jsx to trigger the backend route, and buttons were added to FilterSection.jsx to send “asc” or “desc” to the sort_pets functions to correlate with the “low to high” and “high to low” labels. Correctly implementing all of this demonstrates my ability to incorporate an appropriate algorithm for a task. Sorting is an oft-needed tool for websites, whether it’s a board game catalogue or pets waiting for adoption, and choosing the right algorithm can make a big difference in performance.</p>
        <p><strong>Reflection: </strong>Writing the algorithm was straightforward, since thorough resources exist for merge sort, so figuring out how to connect everything was the greater challenge. I knew I’d need an @app.route call. From there, I knew I’d need to set up a function in Home, since that’s where the buttons and list are. Finally, I knew I’d need buttons that respond appropriately to being clicked. In other words, I figured it out in pieces, starting from the backend.</p>
        <p><strong>Course Outcomes: </strong>With the work done in this enhancement, the following course outcomes were met: </p>
        <ul>
          <em><li>"Design and evaluate computing solutions that solve a given problem using algorithmic principles and computer science practices and standards appropriate to its solution, while managing the trade-offs involved in design choices."</li>
          <li>"Demonstrate an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals."</li></em>
        </ul>
        <h3>Databases - MongoDB</h3>
        <p>For this enhancement, I created a MongoDB database of mock pets awaiting adoption. An example document is included, though not every document has the same fields.</p>
        <figure>
            <img src="/assets/images/amp_database_document.PNG" style="width:800px">
            <figcaption>Database document from adoptmepls-database "pets" collection </figcaption>
        </figure>
        <br>
        <h4>Narrative</h4>
        <p><strong>Description: </strong>The database was created in late November 2025 based on the temporary “pets” list I’d created and used in app.py for prior enhancements. As development continued, animal entries were added, including ones with fields unique to their species (e.g., “hasHorns” for goats). Further, entries were given locations with latitude and longitude values from which distance (in miles) is calculated from a static user’s location (hardcoded to Atlanta, GA for now). For readability on the PetDetail page, the field “cityState” is used to represent the lat/lon values in words. Similarly, to create a more realistic depiction of sorting pets based on days waiting for adoption, the “intakeDate” field stores a UTC date from which the number of days is dynamically calculated.</p>
        <p><strong>Justification: </strong>I had used MongoDB in prior courses, but I didn’t have the opportunity to create my own database then. Although the database here is relatively tiny, making my own boosted my confidence, and it now exists as a sandbox to continue building my skills in. Having a working database linked up to a functional full stack app also feels a lot more “real” than using a list in the backend, even if both produce visually similar results in the frontend. This enhancement was mostly about creating and implementing the database, but I also wanted to avoid mistakes of the original artifact by not displaying irrelevant information, such as whether a pet is deceased or not. Instead, both the Home and PetDetail pages organize and display relevant information to the user in a clear way using appropriate headings, sections, and padding.</p>
        <p><strong>Reflection: </strong>Manually creating and updating the database documents was tedious, but once I got past that hurdle and successfully connected MongoDB to the backend, the main challenge was figuring out how to switch everything from using the temporary pets list to using the real database. To avoid redundant code, I created a separate function in app.py for processing each pet as its received. The process_pet function calculates aspects like days waiting for adoption, location in miles, and age range, giving the rest of the app clean variables like daysWaiting, ageRange, and location (rather than latitude/longitude) to work with. Frontend work came in the form of translating the values "yes/no" to "true/false" to clear up discrepancies between filter options and their matching database values.</p>
        <p><strong>Course Outcomes: </strong>With the work done in this enhancement, the following course outcome was met: </p>
        <ul>
          <em><li>"Demonstrate an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals."</li></em>
        </ul>
        <h3>Pytests and Security Measures</h3>
        <p>With the first version of the website complete, my stretch goal for the capstone was to correctly set up, run, and pass a handful of Pytests in the backend. I performed some simple tests using a mock database document to test (1) the API call to retrieve all pets and (2) the sorting algorithm's accuracy in ascending and descending orders. Other security-minded measures include securing my website's URL with HTTPS (thanks to Vercel), obscuring the MongoDB access credentials rather than hardcoding them, and implementing exception catching in the backend.</p>
         <figure>
            <img src="/assets/images/backend_test_sorting.png" style="width:800px">
            <figcaption>Pytest that checks sorting logic</figcaption>
        </figure>
        <br>
        <figure>
            <img src="/assets/images/backend_tests_passed.png" style="width:800px">
            <figcaption>All Pytests passed!</figcaption>
        </figure>
        <br>
      </div>
      <!-- Gardening App -->
      <div id="gardeningAppDesign">
        <h2>Gardening Mobile App Design - Lucidchart</h2>
        <p>For the term-long project in my UI/UX design course (CS-319), I incrementally developed the design for a gardening app based on an overarching user story, app research, two rounds of user interviews, low fidelity wireframes, and feedback gathering sessions. From user interviews came two distinct personas. From those personas came low level wireframes. From those wireframes came feedback from the interviewed users and my classmates. Finally, from everything came the high fidelity wireframe showcased first below. Feel free to continue scrolling past it to view the steps I took along the way.</p>
        <p>Because the final wireframe is so large, I recommend right-clicking the images and selecting "Open image in new tab" to view them in higher definition and zoom in more easily.</p>
        <h3>Realized Design - High Fidelity Wireframe</h3>
        <figure>
           <img src="/assets/images/gardening_app_wireframe_top.png" style="max-width:800px">
           <figcaption>Top of gardening app wireframe (zoomed in)</figcaption>
        </figure>
        <br>
        <figure>
           <img src="/assets/images/gardening_app_wireframe_bottom.png" style="max-width:800px">
           <figcaption>Bottom of gardening app wireframe (zoomed in)</figcaption>
        </figure>
        <br>
        <figure>
           <img src="/assets/images/gardening_app_wireframe.png" style="max-width:800px">
           <figcaption>Labeled, full color wireframe for unnamed gardening app</figcaption>
        </figure>
        <br>
        <h3>Step 1 - First round of user interviews based on story</h3>
        <p>The user story for this project was as follows: <em>“As a grower, I want to view a dashboard that informs me of the moisture content and nitrogen level in the soil at each of my trees so that I can easily target water use and track nitrogen levels.”</em> From this, I developed an interview document that probed potential early adopters for more app requirements.</p>
        <figure>
           <img src="/assets/images/gardening_app_user_qs_1.png" style="max-width:800px">
           <figcaption>Gardening app interview questions & responses (1)</figcaption>
        </figure>
        <br>
        <figure>
           <img src="/assets/images/gardening_app_user_qs_2.png" style="max-width:800px">
           <figcaption>Gardening app interview questions & responses (2)</figcaption>
        </figure>
        <br>
        <h3>Step 2 - Personas</h3>
        <p>From the user interviews emerged two distinct personas, "The Intermediate" and "The Long-Time Casual". I personify them with both a summary and a tagline quote.</p>
        <h4>"The Intermediate" Persona</h4>
        <div style="border:2px solid black; padding:8px;">
          <p>Sapphire is a 29-year-old college graduate, works from home as a UI/UX Designer, lives with her partner, does not have children, and rents an apartment for about $1,500/month in a climate that experiences some snow. Collectively, she and her partner make about $80,000/year.</p>
          <p>She has an intermediate level of experience when it comes to gardening, maintaining two small gardens: one indoor and one outdoor. She grows tomatoes year-round in her indoor garden and opts for common seasonal crops like peppers and broccoli that are well-suited to grow in planters (instead of in-ground). She also grows some flowers to help encourage pollinators, like bees, to visit in the outdoor space. Sapphire is the primary caretaker of the gardens, and would be the primary user of the app, but her partner might be the one to water and fertilize when they’re working together or when Sapphire is busy. She is an iOS user and might download the app on her iPhone or iPad, both of which her partner can also access for using the app in her stead.</p>
          <p>Sapphire’s goals for the app include better garden management and furthered plant education. She has struggled with growing certain crops, like onions, in the past and would like to avoid repeating mistakes that lead to plant death. Knowing when to water, fertilize, and rearrange given varying moisture, nitrogen, phosphorus, pH, NPK, temperature, sunlight, and humidity levels would equip her with insights needed to adjust for her plants’ optimal health. Further, having built-in educational materials and estimations of when to water/fertilize next for each plant she grows would inform her, allowing her to differentiate her tactics and increase her skill.</p>
          <p><em>“I want a gardening app that not only does the tedious work of logging all of my plants’ data but also helps make me a better gardener. I value a straightforward design that gives me information as quickly as possible and keeps it all organized to avoid clutter. As someone who looks at screens for a living, I need to be able to set the app to dark mode for less eye strain.”</em></p>
        </div>
        <h4>"The Long-Time Casual" Persona</h4>
        <div style="border:2px solid black; padding:8px;">
          <p>Eloise is a 54-year-old high-school math teacher with a bachelor’s degree and teaching certification. She plans on retiring within the next 15 years and lives with her spouse in a warm, snow-less climate in a house they own. Her children are adults and live in different parts of the country, making Eloise and her spouse “empty nesters”. Collectively, her household makes about $100,000/year.</p>
          <p>Eloise and her spouse have cared for outdoor plants for many years, thanks to the warm climate, but are often reliant on “outdoor causes” such as rain and continued warm weather to keep the plants alive. Eloise often forgets to water her plants unless she sets a reminder on her phone, and beyond watering, she does not fertilize or consider other factors for growth. Her spouse behaves similarly. They mainly grow decorative, long-term plants like bougainvillea, elephant ear plants, and small rubber trees, but they also maintain aloe vera succulents and use their gel to treat sunburns. Eloise uses an Android OS smartphone, and because she already uses it to set watering reminders, she would continue to use it for this app. She’s comfortable using her smartphone but gets easily confused by apps with overly complicated interfaces, so simplicity is a must.</p>
          <p>Although Eloise has been a casual gardener for many years, and the favorable weather often takes care of her plants for her, she would like to improve her skills and branch out to edible crops like herbs. She wants an app that will teach her about proper moisture ranges for her different plants (and new ones) and remind her when to water only when her plants need moisture. Reminders are a must, thanks to her forgetfulness, and she would like to be able to set a time range for when reminders trigger—that way, she doesn’t get a notification (and promptly forget about it) while she’s at work and can’t respond.</p>
          <p><em>“I love having plants around in my front and back yards because, well, that’s what I’ve always done. It would be nice to grow edible plants that complement my cooking instead of only growing what’s convenient. An app that takes the guesswork out and tells me when my plants need water would be like my own personal helper! I think shades of green, blue, and grey with magenta accents would make it lovely to browse through.”</em></p>
        </div>
        <h3>Step 3 - Low Fidelity Wireframes</h3>
        <figure>
           <img src="/assets/images/gardening_app_low1.png" style="max-width:800px">
           <figcaption>Gardening app dashboard (home) screen wireframe</figcaption>
        </figure>
        <br>
        <figure>
           <img src="/assets/images/gardening_app_low2.png" style="max-width:800px">
           <figcaption>Gardening app detailed plant screen wireframe</figcaption>
        </figure>
        <br>
        <figure>
           <img src="/assets/images/gardening_app_low3.png" style="max-width:800px">
           <figcaption>Gardening app plant library screen wireframe</figcaption>
        </figure>
        <br>
        <figure>
           <img src="/assets/images/gardening_app_low4.png" style="max-width:800px">
           <figcaption>Gardening app settings screen wireframe</figcaption>
        </figure>
        <br>
        <h3>Step 4 - Second round of user interviews, personas only</h3>
        <p>With the low fidelity wireframes for each screen done, I re-interviewed the two users that most closely aligned with the personas. I also gathered feedback from classmates in a discussion post assignment in which I was advised to ease up on the use of thick, dark lines. After this step came the realized, high fidelity wireframe showcased above.</p>
        <figure>
           <img src="/assets/images/gardening_app_user_interview2.png" style="max-width:800px">
           <figcaption>Gardening app user interviews (round two)</figcaption>
        </figure>
        <br>
      </div>
      <!-- Pulse App Re-Design -->
      <div id="pulseAppRedesign">
        <h2>Pulse App Page Re-Design - Figma</h2>
        <p>In my Android Studio mobile development course (CS-360), I was tasked with redesigning one page from an existing app. I chose Pulse, the app used by my school for distributing mobile learning management system (LMS) content. While the app was functional and fine as-is, I set out to re-design its "course module" screen by (1) making the UI more aesthetically pleasant and (2) adding more details and navigability.</p>
        <h3>High Fidelity Wireframe</h3>
        <figure>
           <img src="/assets/images/pulse_app_redesign.png" style="max-width:800px">
           <figcaption>Labeled, full color redesign for Pulse "course module" screen</figcaption>
        </figure>
        <br>
      </div>
      <!-- Kiva Flip Phone App Design -->
      <div id="kivaAppFlipphoneDesign">
        <h2>Kiva LoanHub App Design - Lucidchart</h2>
        <p>This work came from my UI/UX design course (CS-319). <a href="https://www.kiva.org/" target="_blank">Kiva</a> is an existing lending software that allows users to loan money to people in need. My task was to design a flip-phone-accessible mobile app that gave borrowers (i.e., users in need of loans) the ability to create and view loan requests with appropriate amounts of details for their and their loaners' needs. I studied loan requests on Kiva's website to glean the most important details for the smaller, limited flip-phone version to retain. I also thought it important to include general details about Kiva for the borrower to access, as this app assumes a lack of PC browser access.</p>
        <h3>High Fidelity Wireframe</h3>
        <figure>
           <img src="/assets/images/kiva_flipphone_wireframe.png" style="max-width:800px">
           <figcaption>Labeled, full color design for main screens of LoanHub</figcaption>
        </figure>
        <br>
        <figure>
           <img src="/assets/images/kiva_flipphone_wireframe_left.png" style="max-width:800px">
           <figcaption>Left side of LoanHub wireframe (zoomed in)</figcaption>
        </figure>
        <br>
        <figure>
           <img src="/assets/images/kiva_flipphone_wireframe_right.png" style="max-width:800px">
           <figcaption>Right side of LoanHub wireframe (zoomed in)</figcaption>
        </figure>
        <br>
      </div>
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
