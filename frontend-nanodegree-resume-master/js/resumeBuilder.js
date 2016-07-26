<!DOCTYPE html>

<head>
  <link href="css/style.css" rel="stylesheet">
  <link rel="icon" href="file:///Users/Di_Al-Malik1/Desktop/Me.jpg">

  <script src="js/jQuery.js"></script>
  <script src="http://code.highcharts.com/highcharts.js"></script>
  <script src="http://code.highcharts.com/modules/exporting.js"></script>
  <script src="js/helper.js"></script>
  <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=places"></script>

  <meta name="viewport" content="width=device-width">
</head>
<body unresolved>
  <div id="main">
    <div id="header" class="center-content">
      <ul id="topContacts" class='flex-box'></ul>
    </div>
    <div style='clear: both;'></div>
    <div id="workExperience" class='gray'>
      <h2>Work Experience</h2>
    </div>
    <div id="projects">
      <h2>Projects</h2>
    </div>
    <div id="education" class='gray'>
      <h2>Education</h2>
    </div>
    <div id="skills">
      <h2>Skills</h2>
      <div id="container" style="min-width: 310px; height: 400px; max-width: 1200px; margin: 0 auto"></div>
    </div>
    <div id="mapDiv">
      <h2>Where I've Lived and Worked</h2>
    </div>
    <div id="letsConnect" class='dark-gray'>
      <h2 class='orange center-text'>Let's Connect</h2>
      <ul id="footerContacts" class="flex-box">
      </ul>
    </div>
  </div>

  <script src="js/resumeBuilder.js"></script>

  <script type="text/javascript">
    if(document.getElementsByClassName("flex-item").length === 0) {
      document.getElementById("topContacts").style.backgroundColor = "black";
    }
    if(document.getElementsByTagName("h1").length === 0) {
      document.getElementById("header").style.backgroundColor = "black";
    }
    if(document.getElementsByClassName("work-entry").length === 0) {
      document.getElementById("workExperience").style.backgroundColor = "black";
    }
    if(document.getElementsByClassName("project-entry").length === 0) {
      document.getElementById("projects").style.backgroundColor = "black";
    }
    if(document.getElementsByClassName("education-entry").length === 0) {
      document.getElementById("education").style.backgroundColor = "black";
    }
//    if(document.getElementsByClassName("skills-entry").length === 0) {
//      document.getElementById("skillsChart").style.backgroundColor = "black";
//    }
    if(document.getElementsByClassName("flex-item").length === 0) {
      document.getElementById("letsConnect").style.backgroundColor = "black";
    }
    if(document.getElementById("map") == undefined) {
      document.getElementById("mapDiv").style.display = "none";
    }
  </script>
</body>

