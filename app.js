// Variables
const faqPanels = document.querySelectorAll(".faq-panel");
const faqAnswers = document.querySelectorAll(".faq-answer");
const expandBtns = document.querySelectorAll(".expand");
const expand = document.querySelectorAll(".fa-plus");

for (let i = 0; i < faqPanels.length; i++) {
  faqPanels[i].addEventListener("click", function (e) {
    if (faqAnswers[i].classList.contains("hidden")) {
      faqAnswers[i].classList.remove("hidden");
      expand[i].classList = "fas fa-minus";
    } else {
      faqAnswers[i].classList.add("hidden");
      expand[i].classList = "fas fa-plus";
    }
  });
}
