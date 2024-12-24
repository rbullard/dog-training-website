const questions = document.querySelectorAll(".question-answer h3");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === "none" ? "block" : "none";
    });
});
