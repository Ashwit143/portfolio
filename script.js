function showPage(page) {
    document.querySelector(".home").style.display = page === "home" ? "block" : "none";
    document.querySelector(".aboutMe").style.display = page === "aboutMe" ? "block" : "none";
    document.querySelector(".achievements").style.display = page === "achievements" ? "block" : "none";
    document.querySelector(".education").style.display = page === "education" ? "block" : "none";
    document.querySelector(".skills").style.display = page === "skills" ? "block" : "none";
    document.querySelector(".projects").style.display = page === "projects" ? "block" : "none";

    // if (page === "aboutMe") {aboutMe();}
    // else if (page === "achievements"){ achievements();}
    // else if (page === "education") education();
    // else if (page === "skills") skills();
    // else if (page === "projects") projects();
}

// function achievements() {
//     const achievement = document.createElement("div");
//     achievement.className = "achievement";
//     achievement.innerHTML = `
//      2nd place in AHPS Mega Chess Competition (9th Grade)
//      <br>
//       Multiple 1st place wins in SOF Science and Math Olympiads (3rd-5th Grades)
//      <br>
//      Top 2 rank in 11th and 12th, awarded academic medals.
//      <br>`;
// }