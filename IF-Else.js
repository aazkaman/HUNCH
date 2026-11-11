const divParA1 = document.getElementById('divParA1');
const divParB1 = document.getElementById('divParB1');
const divParC1 = document.getElementById('divParC1');

const buttonA1 = document.getElementById('btnA1');
const buttonB1 = document.getElementById('btnB1');
const buttonC1 = document.getElementById('btnC1');
const buttonFooter1 = document.getElementById('btnFootA1');
const footer = document.getElementById('footA1');
const searchBar = document.querySelector('.searchBarA1');

function setActiveCard(activeCard) {
    [divParA1, divParB1, divParC1].forEach(card => {
        if (card === activeCard) {
            card.classList.add('active');
            card.classList.remove('inactive');
        } else {
            card.classList.add('inactive');
            card.classList.remove('active');
        }
    });
}

buttonA1.addEventListener('click', () => setActiveCard(divParA1));

buttonB1.addEventListener('click', () => setActiveCard(divParB1));

buttonC1.addEventListener('click', () => setActiveCard(divParC1));

buttonFooter1.addEventListener('click', () => {
    footer.classList.toggle('on-screen');
});

searchBar.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const items = [
        { el: divParA1, text: 'pants' },
        { el: divParB1, text: 'baby clothes' },
        { el: divParC1, text: 'hijab' }
    ];

    if (query === '') {
        items.forEach(item => {
            item.el.classList.remove('active', 'inactive');
        });
        return;
    }

    items.forEach(item => {
        if (item.text.includes(query)) {
            item.el.classList.add('active');
            item.el.classList.remove('inactive');
        } else {
            item.el.classList.add('inactive');
            item.el.classList.remove('active');
        }
    });
});