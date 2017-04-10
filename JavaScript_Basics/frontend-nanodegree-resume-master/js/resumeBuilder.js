/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append(["Wei"]);

// var firstName = "james";

// var age = 32;

// console.log(firstName);

// var awesomeThoughts = "I am Wei and I am AWESOME!"

// console.log(awesomeThoughts);

// var email = "wei@udacity.com";

// var newEmail =
//     email.replace("udacity", "gmail");

// console.log(email);

// console.log(newEmail);

// var funThoughts =
//     awesomeThoughts.replace("AWESOME", "FUN");

// $("#main").append([funThoughts]);

// var name = "Wei Wei";
// var formattedName = HTMLheaderName.replace("%data%", name);
//
// var role = "Sofeware Development Engineer";
// var formattedRole = HTMLheaderRole.replace("%data%", role);
//
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

var bio = {
    "name": "Wei Wei",
    "role": "Sofeware Development Engineer",
    "contacts": {
        "mobile": "8312957242",
        "email": "ww_1125@outlook.com",
        "twitter": "https://twitter.com/ww_wastelife",
        "github": "https://github.com/wastelife",
        "location": "Santa Cruz"
    },
    "skills": [
        "front-end", "back-end", "mobile"
    ],
    "bioPic": "images/fry.jpg"
}

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

// $("#header").append(HTMLcontactGeneric);
if (bio.contacts) {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedTwitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);
}

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", "Welcome to see my resume");
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
}

var education = {
    "schools": [
        {
            "name": "UCSC",
            "degree": "Master",
            "location": "Santa Cruz",
            "major": "EE",
            "dates": "2016-Rresent"
        }, {
            "name": "TYUT",
            "degree": "bachelor",
            "location": "China",
            "major": "EE",
            "dates": "2012-2016"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basic",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://classroom.udacity.com/courses/ud804/lessons/3077038869/concepts/30710886400923"
        }, {
            "title": "Ajax",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://classroom.udacity.com/courses/ud804/lessons/3077038869/concepts/30710886400923"
        }
    ]
}

function displayEducation() {
    for (school in education.schools) {
        $('#education').append(HTMLschoolStart);
        var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDegree = formattedSchool + formattedDegree;
        $(".education-entry:last").append(formattedDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedMajor);
    }

    $(".education-entry:last").append(HTMLonlineClasses);
    for (onlineCourse in education.onlineCourses) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        var formattedTitle = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedTitle);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $(".education-entry:last").append(formattedOnlineURL);
    }
}
displayEducation();

var work = {
    "jobs": [
        {
            "employer": "First boss",
            "title": "SDE",
            "datas": "2018",
            "location": "Santa Cruz",
            "description": "awesome work! awesome work! awesome work! awesome work! awesome work! awesome work! awesome work! awesome work! awesome work! awesome work! awesome work! awesome work! awesome work! awesome work! awesome work! awesome work! awesome work! awesome work! awesome work! awesome work! "
        }, {
            "employer": " Second boss ",
            "title": "SDE",
            "datas": "2019",
            "location": "Santa Cruz",
            "description": "awesome too! awesome too! awesome too! awesome too! awesome too! awesome too! awesome too! awesome too! awesome too! awesome too! awesome too! awesome too! awesome too! awesome too! awesome too! awesome too! awesome too! awesome too! awesome too! awesome too! awesome too! awesome too! "
        }
    ]
}
function displayWork() {
    for (job in work.jobs) {
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].datas);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}
displayWork();

var projects = {
    "projects": [
        {
            "title": "First Project",
            "dates": "2018",
            "description": "First project, First project, First project, First project, First project, First project, First project, First project, First project, First project, First project, First project, First project, First project, First project, First project, First project, First project, First project, First project, First project, First project, First project, First project, ",
            "images": ["images/fry.jpg", "images/fry.jpg"]
        }, {
            "title": "Second Project",
            "dates": "2019",
            "description": "Second project, Second project, Second project, Second project, Second project, Second project, Second project, Second project, Second project, Second project, Second project, Second project, Second project, Second project, Second project, Second project, Second project, Second project, Second project, Second project, Second project, Second project, Second project",
            "images": ["images/fry.jpg", "images/fry.jpg"]
        }
    ]
}

projects.display = function() {
    for (project in projects.projects) {
        $('#projects').append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}
projects.display();

$("#mapDiv").append(googleMap);
