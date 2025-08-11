function solve() {
  const textAreaElement = document.getElementById('input')
  const text = textAreaElement.value
  const outputElement = document.getElementById('output'); 

  const textArray = text.split(". ")


    for (let i = 0; i < textArray.length; i += 3) {
        let currentSentences = [];

       for (let j = i; j < i + 3 && j < textArray.length; j++) {
        const sentence = textArray[j].trim();

        // Уверяваме се, че има точка накрая
        const finalSentence = sentence.endsWith('.') ? sentence : sentence + '.';

        currentSentences.push(finalSentence);
      }

        const p = document.createElement('p');
        p.textContent = currentSentences.join(' ');
        outputElement.appendChild(p);
    }

  
}