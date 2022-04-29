// import "./styles.css";

//1. If the text on the button that was clicked is a V,
//then set the display property of the article's body to none. Also set the text on the button to >.
//2. If the text on the button that was clicked is not a V,
//then set the display property of the article's body to block. Also set the text on the button to V.
function expandArticleBody(event) {
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
}

//1. If the text on the button is +,
// then add the .highlight class to the article and set the text on the button to -.
//2. If the text on the button is not +,
// then remove the .highlight class from the article and set the text on the button to +.
function highlightArticle(event) {
  const articleBody = event.target.closest(".article");
  if (event.target.innerText === "+") {
    articleBody.classList.add("highlight");
    event.target.innerText = "-";
  } else if (event.target.innerText !== "+") {
    articleBody.classList.remove("highlight");
    event.target.innerText = "+";
  }
}

const main = () => {
  //Find the article in which the button that was clicked belongs.
  const allEpdBtns = document.querySelectorAll(".expand_button");
  
  /*Add event listeners to the `.expand_button` buttons*/
  allEpdBtns.forEach((btn) => {
    btn.addEventListener("click", expandArticleBody);
  });

  ////Find the article in which the button that was clicked belongs.
  const allHighLightBtns = document.querySelectorAll(".highlightBtn");

  /*Add event listeners to the `.highlightBtn` buttons*/
  allHighLightBtns.forEach((btn) => {
    btn.addEventListener("click", highlightArticle);
  });
};

window.addEventListener("DOMContentLoaded", main);
