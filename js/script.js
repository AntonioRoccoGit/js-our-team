/*

BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede. */

const ourTeam = [
    {
        name: "Wayne",
        surname: "Barnett",
        rule: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela",
        surname: "Caroll",
        rule: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter",
        surname: "Gordon",
        rule: "Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela",
        surname: "Lopez",
        rule: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott",
        surname: "Estrada",
        rule: "Developer",
        img: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara",
        surname: "Ramos",
        rule: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    }
];


//Dom Elements
const myCardContainer = document.getElementById("my-card-container");


let cards = "";
for (let i = 0; i < ourTeam.length; i++) {
    let teamMate = ourTeam[i];

    cards +=    `
                     <div class="card" style="width: calc(100% / 3 - 2rem);">
                        <img src="img/${teamMate.img}" class="card-img-top" alt="">
                        <div class="card-body text-center">
                            <h5 class="card-title">${teamMate.surname} ${teamMate.name}</h5>
                            <p class="card-text">${teamMate.rule}</p>
                        </div>
                    </div>
                `;
}
myCardContainer.innerHTML = cards;

