const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('div.result');
const textResult = document.querySelector('body > div.result > div > p > span');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    }); 
    
    result.classList.remove('d-none');
    
    scrollTo(0,0);  

    let output = 0;
    const timer = setInterval(() => {
        textResult.textContent = `${output}%`;

        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);

});