const form = document.getElementById("bioForm");
const preview = document.querySelector(".preview");
const mainContent = document.querySelector("main");

const cardName = document.getElementById("cardName");
const cardBio = document.getElementById("cardBio");
const cardSkills = document.getElementById("cardSkills");
const cardGithub = document.getElementById("cardGithub");
const cardLinkedin = document.getElementById("cardLinkedin");
const cardPhoto = document.getElementById("cardPhoto");
const downloadBtn = document.getElementById("downloadBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const bio = document.getElementById("bio").value.trim();
  const skills = document.getElementById("skills").value.trim();
  const github = document.getElementById("github").value.trim();
  const linkedin = document.getElementById("linkedin").value.trim();
  const photoFile = document.getElementById("photo")?.files[0];

  cardName.textContent = name || "Your Name";
  cardBio.textContent = bio || "Short bio will appear here.";
  cardSkills.innerHTML = `<strong>Skills:</strong> ${skills || "N/A"}`;

  if (github) {
    cardGithub.href = github;
    cardGithub.style.display = "inline-block";
  } else {
    cardGithub.style.display = "none";
  }

  if (linkedin) {
    cardLinkedin.href = linkedin;
    cardLinkedin.style.display = "inline-block";
  } else {
    cardLinkedin.style.display = "none";
  }

  if (photoFile) {
    const reader = new FileReader();
    reader.onload = function (event) {
      cardPhoto.src = event.target.result;
    };
    reader.readAsDataURL(photoFile);
  }

  preview.classList.remove("hidden");
  mainContent.style.filter = "blur(5px)";
});

preview.addEventListener("click", (e) => {
  if (e.target === preview) {
    preview.classList.add("hidden");
    mainContent.style.filter = "none";
  }
});