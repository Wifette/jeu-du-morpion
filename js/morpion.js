//variable i pour tour O ou X
let i = 0;
//Constante pour récupérer les cases avec la classe 
//case dans le html pour l'affecter à la variable cases
const cases = document.querySelectorAll('.case');
//Fonction qui incrémente la variable i de 1 à chaque tour
//si pair joueur 'O' si impair joueur 'X'
function tour(){
    i++;
    return i % 2 === 0 ? 'O' : 'X';
}
//Fonction qui permet de vérifier qu'une case est vide et de la remplir au clic,
//puis d'affecter la valeur de i à la variable valtour pour afficher '0' ou 'X' dans le label
//puis on appelle la fonction isWin()
function jouer(){
    if (!this.innerHTML) this.innerHTML = valtour = tour();
    isWin();
}
//Evénement click appelle la fonction jouer
cases.forEach(el => el.addEventListener('click', jouer));
//Fonction qui vérifie si une ligne est gagnante ou si match nul
//Et on affiche le tour ou le gagant dans le label
function isWin(){
    
    if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[1].innerHTML && cases[1].innerHTML === cases[2].innerHTML){
        afficherGagnant();
        rejouer();    
    }
    else if (cases[3].innerHTML !== '' && cases[3].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[5].innerHTML){
        afficherGagnant();
        rejouer(); 
    }
    else if (cases[6].innerHTML !== '' && cases[6].innerHTML === cases[7].innerHTML && cases[7].innerHTML === cases[8].innerHTML){
        afficherGagnant();
        rejouer(); 
    }
    else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[3].innerHTML && cases[3].innerHTML === cases[6].innerHTML){
        afficherGagnant();
        rejouer(); 
    }
    else if (cases[1].innerHTML !== '' && cases[1].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[7].innerHTML){
        afficherGagnant();
        rejouer(); 
    }
    else if (cases[2].innerHTML !== '' && cases[2].innerHTML === cases[5].innerHTML && cases[5].innerHTML === cases[8].innerHTML){
        afficherGagnant();
        rejouer(); 
    }
    else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[8].innerHTML){
        afficherGagnant();
        rejouer(); 
    }
    else if(cases[2].innerHTML !== '' && cases[2].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[6].innerHTML){
        afficherGagnant();
        rejouer(); 
    }
    else if
    ((cases[0].innerHTML != '') && (cases[1].innerHTML != '') && (cases[2].innerHTML != '') && (cases[3].innerHTML != '') && (cases[4].innerHTML != '') && (cases[5].innerHTML != '') && (cases[6].innerHTML != '') && (cases[7].innerHTML != '') && (cases[8].innerHTML != ''))
    {document.getElementById('labeltour').innerHTML = "Match nul !"
    rejouer();
    
} 
else{ 
    document.getElementById('labeltour').innerHTML = "Le joueur " + valtour + " a joue. A vous !";
}         
}

function afficherGagnant(){
    document.getElementById('labeltour').innerHTML = "Le joueur " + valtour + " gagne !";
    
}
//On affiche une fenêtre pour demander si le joueur veut rejouer
//Si oui on vide les cases
//Si non on ferme la fenêtre et on termine le jeu
function rejouer(){
    if (confirm("Voulez-vous rejouer ?")){
        cases.forEach(el => el.innerHTML ="");}
        else{
            window.close();
        }}