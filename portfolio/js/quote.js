const games = [
    { title: "FreeFire Max", img: "../img/ff.jpg", desc: "An Open World Clash." },
    { title: "BGMI", img: "../img/bgmi.jpg", desc: "Open-world action ." },
    { title: "The Legend of Zelda: Breath of the Wild", img: "../img/xelda.jpg", desc: "An open-world adventure." },
    { title: "God of War", img: "../img/godofwar.jpg", desc: "Experience an epic saga." },
    { title: "Minecraft", img: "../img/minecraft.jpg", desc: "Build and explore your own world." },
    { title: "Fortnite", img: "../img/fortnite.jpg", desc: "Battle to be the last one standing." },
    { title: "Among Us", img: "../img/among.jpg", desc: "Work together to complete tasks." },
    { title: "Halo Infinite", img: "../img/haloinfinte.jpg", desc: "Join the epic battle." },
    { title: "Call of Duty: Warzone", img: "../img/cod.jpg", desc: "Fight to survive." },
    { title: "Red Dead Redemption 2", img: "../img/reddead.jpg", desc: "A tale of survival in the Wild West." },
    { title: "Overwatch", img: "../img/overwatch.jpg", desc: "Team-based multiplayer shooter." },
    { title: "Genshin Impact", img: "../img/genshin.jpg", desc: "Open-world action RPG." }
];

// Injecting game cards into the HTML
const gamesContainer = document.getElementById('games-container');

games.forEach(game => {
    const card = document.createElement('div');
    card.className = 'col-md-3 mb-4', 'card';
    card.innerHTML = `
        <div class="card">
            <img src="${game.img}" class="card-img-top game-image" alt="${game.title}">
            <div class="card-body">
                <h5 class="card-title">${game.title}</h5>
                <p class="card-text">${game.desc}</p>
            </div>
        </div>
     `;
    gamesContainer.appendChild(card);
});
