var bio =   {
    "name": "Di'Shanique Al-Malik",
    "role": "Front-End Developer",
    "skills": ["HTML", "CSS", "JavaScript", "jQuery", "Dry Humor"],
    "contacts": {
        "email": "dishanique.almalik@gmail.com",
        "github": "https://github.com/dishanique",
        "location": "Philadelphia, PA"
    },

    "bioPic": "file:///Users/Di_Al-Malik1/Desktop/frontend-nanodegree-resume-master/images/Me.jpg",
    "welcomeMsg": "Welcome to my resume page!",

};


var work =  {
    "jobs": [{
        "employer": "Net-a-Porter",
        "title": "Sales and Customer Care Consultant",
        "location": "Mahwah, NJ",
        "datesWorked": "April 2015 - June 2015",
        "description": "Achieved sales performance of exceeding monthly goals while maintaining a book of clientele providing sales of luxury clothing, shoes, and accessories."
    }, {
        "employer": "Apple",
        "title": "Specialist",
        "location": "Ardmore, PA",
        "datesWorked": "September 2014 - February 2015",
        "description": "Achieved outstanding performance if becoming a Certified Apple Technician, trained and mentored employees within Apple retail store, performed technical troubleshooting abilities and repairs of Apple devices, and organized team building activities and events."

    }]
};

var education = {
    "schools": [{
        "name": "Temple University",
        "datesAttended": "2010 - 2014",
        "location": "Philadelphia, PA",
        "degree": "Bachelors of Arts",
        "major": "Strategic Communications",
        "minor": "Public Relations",
        "url": "http://www.temple.edu"
    }],
    "onlineCourses": [{
        "school": "Udacity",
        "title": "Front-End Developer Nanodegre",
        "completed": "September 2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

var projects =  {
    "projects": [{
        "title": "Portfolio",
        "datesWorked": "July 2016",
        "description": "Built a responsive portfolio utilizing HTML, CSS, JavaScript, and JQuery. I even got a little fancy with using Bootstrap!",
        "images": ["http://cdn.skilledup.com/wp-content/uploads/2014/10/Life-Front-End-Developer-Feature_1290x688_KL.jpg"],
        "url": "https://github.com/dishanique/Udacity_FEND_P3"
    }, {
        "title": "Animal Trading Card",
        "datesWorked": "June 2016",
        "description": "Converted a design prototype of an animal trading card into a functional webpage using HTML and CSS.",
        "images": ["images/indian-peafowl-tail-spread-closeup.jpg"],
        "url": "https://github.com/dishanique/Udacity_FEND_P2"
    }, {
        "title": "Blog Mockup",
        "datesWorked": "June 2016",
        "description": "Built a Blog Mockup from PDF format using basic HMTL elements.",
        "images": ["images/Blog%20Mockup.png"],
        "url": "https://github.com/dishanique/Udacity_FEND_P1"
    }]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedwelcomeMsg);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}

for (i in formattedContactInfo) {
    $("#topContacts").append(formattedContactInfo[i]);
    $("#footerContacts").append(formattedContactInfo[i]);
}


work.display= function() {

    if (work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        for (i in work.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
            }
        }
    };

work.display();

projects.display = function() {
    if (projects.projects.length > 0) {
        for (i in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for (img in projects.projects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }


        }
    }
}

projects.display();

education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (i in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
            var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
            $(".education-entry:last").append(formattedSchoolMinor);
        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (i in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
}

education.display();

$("#mapDiv").append(googleMap);
    
