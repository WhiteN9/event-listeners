// import "./styles.css";

function expandArticleBody() {
  const allEpdBtns = document.querySelectorAll(".expand_button");
  allEpdBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const articleBody = event.target
        .closest(".article")
        .querySelector(".article_body");
      if (event.target.innerText === "V") {
        articleBody.style.display = "none";

        event.target.innerText = ">";
      } else if (event.target.innerText !== "V") {
        articleBody.style.display = "block";

        event.target.innerText = "V";
      }
    });
  });
}

function highlightArticle() {
  const allHighLightBtns = document.querySelectorAll(".highlightBtn");
  allHighLightBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const articleBody = event.target.closest(".article");
      if (event.target.innerText === "+") {
        articleBody.classList.add("highlight");
        event.target.innerText = "-";
      } else if (event.target.innerText !== "+") {
        articleBody.classList.remove("highlight");
        event.target.innerText = "+";
      }
    });
  });
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();

//window.addEventListener("DOMContentLoaded", main);
