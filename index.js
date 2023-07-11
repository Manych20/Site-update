const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq_question) => {
    faq.addEventListener("click", ()=> {
        faq.classList.toggle("active")
    })
})

// var questions = document.querySelectorAll('.faq .faq_question');

// questions.forEach(function(faq_question) {
//   var faq_answer = question.querySelector('.faq_answer');
//   var h2 = question.querySelector('h2');
  
//   h2.addEventListener('click', function() {
//     answer.classList.toggle('active');
//   });
// });
