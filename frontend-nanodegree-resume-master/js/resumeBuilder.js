var bio = {
    "name": "Di'Shanique Al-Malik",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "267-257-0939",
        "email": "dishanique.almalik@gmail.com",
        "github": "https://github.com/dishaniqu",
        "location": "Philadelphia, PA"
    },
    "biopic": "file:///Users/Di_Al-Malik1/Desktop/frontend-nanodegree-resume-master/images/Me.jpg",
    "welcomeMessage": "Welcome to my Online Resume!",
    "skills": ["HTML", "CSS", "JavaScript", "jQuery", "Python", "Bootstrap", "Java", "Dry Humor"]
};

var education = {
    "schools": [{
        "name": "Temple University",
        "location": "Philadelphia, PA",
        "degree": "Bachelors of Arts",
        "majors": ["Strategic Communication"],
        "dates": "2010 - 2014",
        "url": "http://www.temple.edu"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

var work = {
    "jobs": [{
        "employer": "Net-a-Porter",
        "title": "Sales and Customer Care Consultan",
        "location": "Mahwah, NJ",
        "dates": "April 2015 - June 2015",

        "description": "Achieved sales performance of exceeding monthly goals while maintaining a book of clientele providing sales of luxury clothing, shoes, and accessories."
    }, {
        "title": "Specialist",
        "employer": "Apple",
        "dates": "September 2014 - February 2015",
        "location": "Ardmore, PA",
        "description": "Achieved outstanding performance if becoming a Certified Apple Technician, trained and mentored employees within Apple retail store, performed technical troubleshooting abilities and repairs of Apple devices, and organized team building activities and event."
    }]
};

var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "2016",
        "description": "Built a responsive portfolio utilizing HTML, CSS, JavaScript, and JQuery. I even got a little fancy with using Bootstrap!",
        "images": ["http://cdn.skilledup.com/wp-content/uploads/2014/10/Life-Front-End-Developer-Feature_1290x688_KL.jpg"]
    }, {
        "title": "Animal Trading Card",
        "dates": "2016",
        "description": "Converted a design prototype of an animal trading card into a functional webpage using HTML and CSS.",
        "images": ["images/indian-peafowl-tail-spread-closeup.jpg"]
    }, {
        "title": "Blog Mockup",
        "dates": "2016",
        "description": "Built a Blog Mockup from PDF format using basic HMTL elements.",
        "images": ["images/Blog%20Mockup.png"]
    }]
};

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedJob = HTMLheaderRole.replace("%data%", bio.role);
    var formattedNameRole = (formattedName + formattedJob);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);

    /* top and footer contacts */

    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").prepend(formattedNameRole);
    $("#header").append(formattedPic);
    $("#header").append(formattedWelcome);

    /* for loop */

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < 8; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }

    for (var info = 0; info < 4; info++) {
        $("#topContacts").append(formattedContactInfo[info]);
        $("#footerContacts").append(formattedContactInfo[info]);
    }

};

bio.display();

work.display = function () {
    work.jobs.forEach(function (job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", /*work.jobs[job]*/ job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", /*work.jobs[job]*/ job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedYears = HTMLworkDates.replace("%data%", /*work.jobs[job]*/ job.dates);
        $(".work-entry:last").append(formattedYears);
        var formattedCity = HTMLworkLocation.replace("%data%", /*work.jobs[job]*/ job.location);
        $(".work-entry:last").append(formattedCity);
        var formattedDescription = HTMLworkDescription.replace("%data%", /*work.jobs[job]*/ job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

work.display();

education.display = function () {
    education.schools.forEach(function (school) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedNameDegree = formattedSchoolName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);
        var formattedSchoolDate = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedSchoolDate);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedMajor);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedLocation);
        var formattedURL = HTMLonlineURL.replace("%data%", school.url);
        $(".education-entry:last").append(formattedURL);
    });

    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function (internet) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", internet.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", internet.school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedTitleSchool);
        var formattedDate = HTMLonlineDates.replace("%data%", internet.dates);
        $(".education-entry:last").append(formattedDate);
        var formattedURL = HTMLonlineURL.replace("%data%", internet.url);
        $(".education-entry:last").append(formattedURL);
    });
};

education.display();

projects.display = function () {
    projects.projects.forEach(function (p) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", p.title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDate = HTMLprojectDates.replace("%data%", p.dates);
        $(".project-entry:last").append(formattedProjectDate);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", p.description);
        $(".project-entry:last").append(formattedProjectDescription);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", p.images);
        $(".project-entry:last").append(formattedProjectImage);
    });
};

projects.display();

$("#mapDiv").append(googleMap);
