'use strict';
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    const numberofJokes = document.querySelector('input[type="number"]').value;


    const jokesXHR = new XMLHttpRequest();

        jokesXHR.open('GET', `https://randomuser.me/api/?results=${numberofJokes}`, true)


        // ===> what happens when it gets the data

        jokesXHR.onload = function() {
            if(this.status === 200) {
                const jokesResponse = JSON.parse(this.responseText);
                console.log(jokesResponse);


                let output = '';

                if (jokesResponse.type === 'success') {
                    jokesResponse.forEach(function(user){
                        console.log(jokesResponse);
                        output += `<li>${user.female}</li>`;
                    });

                } else {
                    output += '<li>Chek</li>';
                }


                document.querySelector('.jokes').innerHTML = output;
            }
        }

        jokesXHR.send()

       e.preventDefault();
}


