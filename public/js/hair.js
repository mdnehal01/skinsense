function ques1(){
    document.querySelector(".quiz-section1").style.display="block";
    document.querySelector(".quiz-section2").style.display="none";    
}

function ques2(){
    document.querySelector(".quiz-section1").style.display="none";
    document.querySelector(".quiz-section2").style.display="block";
    document.querySelector(".quiz-section3").style.display="none";
}

function ques3(){
    document.querySelector(".quiz-section1").style.display="none";
    document.querySelector(".quiz-section2").style.display="none";
    document.querySelector(".quiz-section3").style.display="block";
    document.querySelector(".quiz-section4").style.display="none";
}

function ques4(){
    document.querySelector(".quiz-section1").style.display="none";
    document.querySelector(".quiz-section2").style.display="none";
    document.querySelector(".quiz-section3").style.display="none";
    document.querySelector(".quiz-section4").style.display="block";
    document.querySelector(".quiz-section5").style.display="none";
}

function ques5(){
    document.querySelector(".quiz-section1").style.display="none";
    document.querySelector(".quiz-section2").style.display="none";
    document.querySelector(".quiz-section3").style.display="none";
    document.querySelector(".quiz-section4").style.display="none";
    document.querySelector(".quiz-section5").style.display="block";
    document.querySelector(".quiz-section6").style.display="none";
}

function ques6(){
    document.querySelector(".quiz-section1").style.display="none";
    document.querySelector(".quiz-section2").style.display="none";
    document.querySelector(".quiz-section3").style.display="none";
    document.querySelector(".quiz-section4").style.display="none";
    document.querySelector(".quiz-section5").style.display="none";
    document.querySelector(".quiz-section6").style.display="block";
    document.querySelector(".quiz-section7").style.display="none";
}

function ques7(){
    document.querySelector(".quiz-section1").style.display="none";
    document.querySelector(".quiz-section2").style.display="none";
    document.querySelector(".quiz-section3").style.display="none";
    document.querySelector(".quiz-section4").style.display="none";
    document.querySelector(".quiz-section5").style.display="none";
    document.querySelector(".quiz-section6").style.display="none";
    document.querySelector(".quiz-section7").style.display="block";
    document.querySelector(".quiz-section8").style.display="none";
}

function ques8(){
    document.querySelector(".quiz-section1").style.display="none";
    document.querySelector(".quiz-section2").style.display="none";
    document.querySelector(".quiz-section3").style.display="none";
    document.querySelector(".quiz-section4").style.display="none";
    document.querySelector(".quiz-section5").style.display="none";
    document.querySelector(".quiz-section6").style.display="none";
    document.querySelector(".quiz-section7").style.display="none";
    document.querySelector(".quiz-section8").style.display="block";
    document.querySelector(".quiz-section9").style.display="none";
}



function ques9(){
    document.querySelector(".quiz-section1").style.display="none";
    document.querySelector(".quiz-section2").style.display="none";
    document.querySelector(".quiz-section3").style.display="none";
    document.querySelector(".quiz-section4").style.display="none";
    document.querySelector(".quiz-section5").style.display="none";
    document.querySelector(".quiz-section6").style.display="none";
    document.querySelector(".quiz-section7").style.display="none";
    document.querySelector(".quiz-section8").style.display="none";
    document.querySelector(".quiz-section9").style.display="block";
    document.querySelector(".quiz-section10").style.display="none";
}

function ques10(){
    document.querySelector(".quiz-section1").style.display="none";
    document.querySelector(".quiz-section2").style.display="none";
    document.querySelector(".quiz-section3").style.display="none";
    document.querySelector(".quiz-section4").style.display="none";
    document.querySelector(".quiz-section5").style.display="none";
    document.querySelector(".quiz-section6").style.display="none";
    document.querySelector(".quiz-section7").style.display="none";
    document.querySelector(".quiz-section8").style.display="none";
    document.querySelector(".quiz-section9").style.display="none";
    document.querySelector(".quiz-section10").style.display="block";
}





const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const maxCheckboxes = 2;

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
                if (checkedCheckboxes.length > maxCheckboxes) {
                    checkbox.checked = false;
                    document.querySelector(".alert").style.display="flex";
                }
            });
        });

        // Optionally, you can also prevent form submission if the user has selected more than three checkboxes
        document.getElementById('valueForm').addEventListener('submit', (event) => {
            const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
            if (checkedCheckboxes.length !== maxCheckboxes) {
                alert('Please select exactly two checkboxes.');
                event.preventDefault(); // Prevent form submission
            }
        });


function hideAlert(){
    document.querySelector('.alert').style.display="none";
}