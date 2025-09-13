let data = {
    "Предмети": [
        { title: "Алмазний Меч", desc: "Меч із алмазів", img: "https://static.wikia.nocookie.net/minecraft-mojang/images/f/f0/%D0%9A%D1%80%D0%B0%D1%84%D1%82_%D0%B0%D0%BB%D0%BC%D0%B0%D0%B7%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BC%D0%B5%D1%87%D0%B0.jpg" },
        { title: "Незеритовий Злиток", desc: "Накладається на алмазні предмети", img: "https://minecraft-max.net/upload/iblock/e4c/aovgcda3v5vyep6vygxx4cb9mojqvoht.png" },
        { title: "Золоте яблуко", desc: "Їжа з ефектами", img: "https://minecraft-max.net/upload/iblock/1db/1db7c8bd8c072c2d27a52df3bd5b1919.png" }
    ],
    "Блоки": [
        { title: "Блок Меду", desc: "Блок меду від бджіл, уповільнює", img: "https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/f/f8/Honey_Block_JE2_BE1.png" },
        { title: "Динаміт (TNT)", desc: "Може вибухати", img: "https://static.wikia.nocookie.net/minecraft/images/f/f5/TNT_JE4_BE3.png" },
        { title: "Глазурована кераміка", desc: "Декоративний блок", img: "data:image/png;base64,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" }
    ],
    "Музика": [
        { title: "Moog City 2", desc: "C418 — музыка меню", img: "" },
        { title: "Pigstep", desc: "Lena Raine — пластинка", img: "" }
    ]
};

const menuEl = document.getElementById('menu');
const contentEl = document.getElementById('content');


const categories = Object.keys(data);
const buttons = [];

categories.forEach((cat, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'menu-button';
    btn.textContent = cat;

    btn.addEventListener('click', () => {
        setActiveButton(btn);
        renderCategory(cat);
    });
    menuEl.appendChild(btn);
    buttons.push(btn);
});


function setActiveButton(activeBtn){
    buttons.forEach(b => {
        if(b === activeBtn){
            b.classList.add('active');
            b.setAttribute('aria-current','true');
        } else {
            b.classList.remove('active');
            b.removeAttribute('aria-current');
        }
    });
}


function renderCategory(category){

    while(contentEl.firstChild) contentEl.removeChild(contentEl.firstChild);

    const items = data[category] || [];
    items.forEach((it, i) => {
        const card = document.createElement('article');
        card.className = 'card';

        card.style.animationDelay = (i * 0.08) + 's';

        const h2 = document.createElement('h2');
        h2.textContent = it.title;

        const p = document.createElement('p');
        p.className = 'desc';
        p.textContent = it.desc;

        card.appendChild(h2);
        card.appendChild(p);

        if(it.img){
            const img = document.createElement('img');
            img.src = it.img;
            img.alt = it.title;

            img.onerror = () => { img.style.display = 'none'; };
            card.appendChild(img);
        }

        contentEl.appendChild(card);
    });


    if(items.length === 0){
        const note = document.createElement('p');
        note.textContent = 'Пока тут нет контента.';
        note.style.opacity = '0.8';
        contentEl.appendChild(note);
    }
}


if(buttons.length){
    setActiveButton(buttons[0]);
    renderCategory(categories[0]);
}