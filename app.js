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
const cardsChosen = []
const cardsChosenIds = []
const cardsWon = []

function createboard() {
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/Fullstack.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
        

    }
}
createboard()

function checkMatch(){ 

    const cards = document.querySelectorAll('img')

    console.log('check for match')
    if(cardsChosen[0] == cardsChosen[1]){
        alert('Its a Match!')
        cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png')
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard)

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