const cardArray = [
    {
        name: 'hml5',
        img: 'images/hml5.jpg'
    },
    {
        name: 'css3',
        img: 'images/css3.jpg'
    },
    {
        name: 'javascript',
        img: 'images/javascript.png'
    },
    {
        name: 'react-js',
        img: 'images/react-js.png'
    },
    {
        name: 'python',
        img: 'images/python.png'
    },
    {
        name: 'flask',
        img: 'images/flask.png'
    },
    {
        name: 'sql',
        img: 'images/sql.jpg'
    },
    {
        name: 'formik',
        img: 'images/formik.png'
    },
    {
        name: 'hml5',
        img: 'images/hml5.jpg'
    },
    {
        name: 'css3',
        img: 'images/css3.jpg'
    },
    {
        name: 'javascript',
        img: 'images/javascript.png'
    },
    {
        name: 'react-js',
        img: 'images/react-js.png'
    },
    {
        name: 'python',
        img: 'images/python.png'
    },
    {
        name: 'flask',
        img: 'images/flask.png'
    },
    {
        name: 'sql',
        img: 'images/sql.jpg'
    },
    {
        name: 'formik',
        img: 'images/formik.png'
    },
    
]
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createboard() {
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/brain.jpg')
        card.setAttribute('data-id',i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
        

    }
}
createboard()

function checkMatch(){ 
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match')
    if (optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/brain.jpg')
        cards[optionTwoId].setAttribute('src', 'images/brain.jpg')
        alert('Its the same image')
    }
    if(cardsChosen[0] == cardsChosen[1]){
        alert('Its a Match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/brain.jpg')
        cards[optionTwoId].setAttribute('src', 'images/brain.jpg')
        alert('Sorry, try again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = 'Congratulations you found them all!'
    }
}
function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout( checkMatch, 500)
    }

}