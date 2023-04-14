//date
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

//navbar links
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container1");
const links = document.querySelector(".links1");

navToggle.addEventListener("click", () => {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});




//fixed nav
const nav = document.querySelector("#nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
});



//form

const formInput = document.querySelector(".input-form");
const firstDOM = document.querySelector(".first-name");
const lastDOM = document.querySelector(".last-name");
const emailDOM = document.querySelector(".email");
const messageDOM = document.querySelector(".text-area");
const formFeedBack = document.querySelector(".feedback");

formInput.addEventListener("submit", async (e) => {
  e.preventDefault();
  const firstName = firstDOM.value;
  const lastName = lastDOM.value;
  const email = emailDOM.value;
  const message = messageDOM.value;

  try {
    const { data } = await axios.post("/api/epic", {
      firstName,
      lastName,
      email,
      message,
    });
    firstDOM.value = "";
    lastDOM.value = "";
    emailDOM.value = "";
    messageDOM.value = "";
    console.log(data);
  } catch (error) {
    formFeedBack.style.display = "block";
    formFeedBack.textContent = `Please try again!!`;
  }
});
