document.addEventListener('DOMContentLoaded', function () {

    let title = document.getElementById('title')
   console.log(title.innerText)
   title.innerText = 'Good bye'
   let sentence = 'I am good'
   title.innerHTML = `<p>${sentence}</p>`
   title.style.color = 'lightblue'
   title.style.backgroundColor = 'red'

   let redDiv = document.getElementById('red')
   let yellowDiv = document.getElementById('yellow')
   let greenDiv = document.getElementById('green')

   redDiv.onclick = () => console.log('Red');
   yellowDiv.onclick = () => console.log('Yellow');
   greenDiv.onclick = () => console.log('Green');

   const squares = document.querySelectorAll('.colorButton')
   console.log(squares);

   const timesClicked = { 'red': 0, 'yellow': 0, 'green': 0}
   squares.forEach(square => {
      // console.log(square.innerText);
      square.onclick = () => {
         timesClicked[square.value] += 1
         square.innerText = timesClicked[square.value]
      }
         
         //console.log(square.innerText);
   });
}, false);

