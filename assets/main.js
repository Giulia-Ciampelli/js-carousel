console.log('im alive');
// crea un array di oggetti per le img

const slides = [
    {
        title: 'First Slide',
        path: 'assets/img/01.jpg',
        description: 'This is the first slide'
    },
    {
        title: 'Second Slide',
        path: 'assets/img/02.jpg',
        description: 'This is the second slide'
    },
    {
        title: 'Third Slide',
        path: 'assets/img/03.jpg',
        description: 'This is the third slide'
    },
    {
        title: 'Fourth Slide',
        path: 'assets/img/04.jpg',
        description: 'This is the fourth slide'
    },
    {
        title: 'Fifth Slide',
        path: 'assets/img/05.jpg',
        description: 'This is the fifth slide'
    }
]

// RICORDA: il query selector prende solo il primo elemento con il tag/classe selezionato, e funziona esattamente come le selezioni di css, selettori avanzati compresi
// Per prendere tutti gli elementi con una certa classe/tag è possibile usare querySelectorAll()