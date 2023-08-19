const facttext = document.querySelector('.facttext')
const generatebtn = document.querySelector('.nextbtn')
const spantext = document.querySelector('#dynamicText')
const cursorr = document.querySelector('.cursorr')

const apiUrl = 'https://api.api-ninjas.com/v1/facts?limit=1';
const apiKey = 'HX0Q1mxyTU/YfdLDI+Q4dQ==LyH6e6kLWeM1nVZy';

let factgenerator = () => {
    fetch(apiUrl, {
        headers: {
          'X-Api-Key': apiKey
        }
      })
        .then(response => response.json())
        .then(data => {
          const fact = data;
          console.log(fact);
          // facttext.textContent = fact[0].fact;

          function updateTextWithDelay(newText, delay) {
            let index = 0;
            function updateCharacter() {
              if (index < newText.length) {
                spantext.innerText = newText.substring(0, index + 1);
                index++;
                setTimeout(updateCharacter, delay);
              }
            }
          
            updateCharacter();
          }
          
          const newText = fact[0].fact;
          const delay = 60; // Delay in milliseconds
          
          updateTextWithDelay(newText, delay);
        
        })
        .catch(error => {
          console.error('Error fetching fact:', error);
        });
}

generatebtn.addEventListener('click', factgenerator)





