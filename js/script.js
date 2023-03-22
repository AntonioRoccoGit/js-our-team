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
const myList = document.getElementById("my-list");


console.log(ourTeam);
for(let i = 0; i < ourTeam.length; i++) {
    let teamMate = ourTeam[i];
    console.log(teamMate);
    //creo li e lo metto nel dom
    const myListItem = document.createElement("li");
    myList.append(myListItem);

    for(let key in teamMate) {
        console.log(key, ":", teamMate[key]);
        const myListItemPropreties = document.createElement("div");
        myListItemPropreties.innerHTML = propretieSelect(key, teamMate[key]);
        myListItem.append(myListItemPropreties);
    }
}


//

function propretieSelect(prop, objectProp) {
    let myInnerTxt; 
    if(prop === "img"){
        myInnerTxt = `<img src="img/${objectProp}" alt="">`;
    }else {
        myInnerTxt = `${prop}: ${objectProp}`;
    }
    return myInnerTxt;
} 