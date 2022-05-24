const cardArray = [
    {
        name: 'fries',
        img: 'images/Fries.jpeg'
    },
    {
        name: 'burger',
        img: 'images/burger.jpg'
    },
    {
        name: 'Pizza',
        img: 'images/Pizza.jpg'
    },
    {
        name: 'bentobox',
        img: 'images/bentobox.jpg'
    },
    {
        name: 'cooffe',
        img: 'images/cooffe.jpg'
    },
    {
        name: 'lemonpie',
        img: 'images/lemonpie.png'
    },
    {
        name: 'Sushi',
        img: 'images/Sushi.jpg'
    },
    {
        name: 'Lobster Roll',
        img: 'images/Lobster Roll.jpg'
    },
    {
        name: 'fries',
        img: 'images/Fries.jpeg'
    },
    {
        name: 'burger',
        img: 'images/burger.jpg'
    },
    {
        name: 'Pizza',
        img: 'images/Pizza.jpg'
    },
    {
        name: 'bentobox',
        img: 'images/bentobox.jpg'
    },
    {
        name: 'cooffe',
        img: 'images/cooffe.jpg'
    },
    {
        name: 'lemonpie',
        img: 'images/lemonpie.png'
    },
    {
        name: 'Sushi',
        img: 'images/Sushi.jpg'
    },
    {
        name: 'Lobster Roll',
        img: 'images/Lobster Roll.jpg'
    },
    
]
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

function createboard() {
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('data-id',i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
        

    }
}
createboard()

function flipCard() {
    const cardId = this.getAttribute('data-id')
    console.log(cardArray[cardId].name)
    console.log('click', cardId)

}