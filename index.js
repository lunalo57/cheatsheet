//J JAVASCRIPT 1/6 - LES BASES                                              

// = : La valeur de droite est donnée à la valeur de gauche
// == : Vérifie uniquement les valeurs
// === : Vérifie les valeurs et leur type
// paramètre : Valeur qui évolue à chaque fois qu'on appelle une fonction
// return : Permet de retourner des valeurs, de stopper la fonction en cours
// fonction anonyme qui se lance toute seule
// (() => {})()
// opérateurs : + ; - ; * ; / ; **
// opérateurs d'affectation : += ; -= ; /= ; *=

//h-------------------------------------------------------------------------------

//J JAVASCRIPT 2/6 - LE DOM                                                

//y CSS
// !important (en CSS) > #id > .class > balise HTML
// Le style directement implémenté dans <div> dans HTML est > à tout
// Pour checkbox et button; ex <checkbox id="cgv">
// if(cgv.checked){}; renvoie un booléen
// Autre façon d'écrire une priorité/sélection en Js
// ex document.querySelector("form > div")
// Récupère la div qui se trouve dans le formulaire
// Pour sélectionner plusieurs balises HTML possédant la même classe
// getElementByClassName("box") OU
// querySelectorAll(".box")
 
//v textContent -> insère du texte sans balise
//v innerHTML -> ajoute du texte avec des balises

//g MOUSE EVENTS (addEventListener)
// "mousemove" : window : (e) : e.pageX + "px" : e.pageY + "px"
// "mousedown" : window : qd le bouton de la souris est en bas
// "mouseup" : window : qd le bouton de la souris est en haut
// "mouseenter" : any : qd la souris entre sur la zone
// "mouseout" : any : qd la souris sort de la zone
// "mouseover" : any : comme un hover

//g KEYPRESS EVENTS (addEventListener)
// "keypress" : (e) : ex key.textContent = e.key

//g SCROLL EVENTS (addEventListener)
// "scroll" : window : window.scrollY + "px"

//g FORM EVENTS (addEventListener)
// "input" : (e) : peut s'utiliser sur select : input : textarea : e.target.value
// Si on a plusieurs input, on peut en choisir un de cette façon
// document.querySelector('input[type="text"]')
// "submit" : (e) : e.preventDefault()
// Permet de ne pas changer de page quand on submit
// On se prémunit contre le comportement par défaut du navigateur

//g LOAD EVENTS (addEventListener)
// "load" : window : se charge une fois que toute la page est chargée

//v ADDEVENTLISTENER VS ONCLICK  
// onclick ne peut pas être utilisée 2 fois sur la même balise
// addEventListener peut le faire
// onclick peut être directement utilisé dans l'HTML
// ex <body onclick="ring(z)"> mais pas recommandé

//v ADDEVENTLISTENER (BUBBLING) != (USECAPTURE)
// "le bubbling" est le comportement de base des addeventListener
// et il s'effectue à la fin
// "le usecapture" quant à lui s'effectue au début
// Pour les declencher, il faut ajouter un 3ème paramètre 
// à l'addEventListener, et c'est un booléen
// Pour le "bubbling" le booléen est false (de base)
// Pour le "usecapture" le booléen doit être en true
// ex box.addeventListener('click',() => {
//    console.log("click test");
//    }, true);
// le "usecapture" va devancer tous les autres évènements

//v STOPPROPAGATION / REMOVELISTENER
// stopPropagation : (e) : e.stopPropagation()
// Signifie qu'il n'est utilisé nul part ailleurs
// removeEventListener

//y LE BOM Browser Object Model
// Il comprend le document, le DOM et le Js
// ex window.innerHeight
// ex window.scrollY
// ex window.innerWidth
// ex window.open("http://google.com","cours Js","height=600","width=800");
// ex window.close();

//v EVENEMENTS ADOSSES A WINDOW
// alert("");
// prompt("");
// setTimeout(() => {},1000); Compte à rebours / délai
// setInterval(() => {},1000); Execute toutes les ... secondes
// Pour arrêter un setInterval() il faut le stocker dans une variable
// puis lui adosser un "event" et utiliser clearInterval(var)

//v l'OBJET LOCATION
// location.href : .host : .pathname : .search
// ex location.replace("http://google.com");
// replace() change la direction

//v L'OBJET NAVIGATOR
//ex console.log(navigator.userAgent);
// il donne des informations sur le user, la localisation est possible

//v L'OBJET HISTORY
// ex window.history.back(2);
// Pour revenir de 2 pages en arrière
// ex window.history.go(-2);
// Pour aller là où l'on veut

//v SETPROPERTY
// ex wwindow.addEventListener('mousemove', () => {
//    nav.style.setProperty(--x , e.layerX + "px");
//    nav.style.setProperty(--y , e.layerY + "px");
//    })
// --x et --y sont des variables que l'on a insérer en CSS
// sous la forme var(--x) et var(--y)
// Très souvent utilisé pour des after OU
// quand on ne peut vraiment rien sélectionner à partir du CSS ou HTML

//h-----------------------------------------------------------------------

//j JAVASCRIPT 3/6 LA DATA                                                

//v LES STRUCTURES DE CONTROLE
//p IF ELSE 
// if(){
// }else{
// }
//p WHILE
// while(){
// }
//p DO WHILE
// do{
// }while()
//p FOR
// for(const user of data){
// } //g Ici, tout ce qui se trouvera dans le tableau data sera appelé user
//p FOR
// for(i=0 ; i<DataTransfer.length ; i++){
//     document.body.innerHTML += `<h2>${data[i].pseudo}</h2>`;
// }
//p SWITCH
// document.body.addEventListener('click', (e) => {
//     switch(e.target.id){
//         case "Js":
//             document.body.style.background = "yellow";
//             break;
//         case "Php":
//             document.body.style.background = "purple";
//             break;
//         case "Python":
//             document.body.style.background = "blue";
//             break;
//         default:
//             null;
//     }
// });

//v METHODES POUR LES STRINGS
//p parseInt()
//c Change le string en number
//p typeof
//c Donne le type de donnée
//p isNan
//c Vérifie si la valeur n'est pas un chiffre
// Si c'est un chiffre -> false ; si pas un chiffre -> true
//p .length
//c Donne la longueur de la string (espaces compris)
//p .length-1
//c Pour connaitre la dernière lettre de la string
// ex console.log(string[string.length-1]);
//p indexOf()
//c Pour savoir où commence un mot, où se trouve une lettre
// ex console.log(string.indexOf("javascript"));
// Si trouvé -> donne l'index ; si pas trouvé -> renvoie -1
//p slice()
//c Coupe la string à partir d'un point en partant du début
// let string = "bonjour";
// let newString = string.slice(3);
// console.log(newString); -> renvoie "jour"
//p slice ( , )
//c Coupe la string à partir d'un point en partant du début
//c et sur une certaine longueur
//y Exclut le 1er et inclut le dernier
// let string = "bonjour je suis Laurent";
// let newString = string.slice(4,15);
// console.log(newString); -> renvoie "our je suis"
//p split("")
//c Coupe la string selon certains endroits, isole et créé un tableau
// let string = "abracadabra";
// let newString = string.split("b");
// console.log(newString); -> renvoie ["a","racada","ra"]
//p toLowerCase()
//c Met tout en minuscule
//p toUpperCase()
//c Met tout en majuscule
//p replace( , )
//c Change une string par une autre string
// let string = "je suis le plus canon des codeurs";
// let newString = string.replace("canon","beau");
// console.log(newString); -> renvoie "je suis le plus beau des codeurs"

//v METHODES POUR LES NUMBERS
//p toFixed()
//c Permet de réduire le nombre de chiffres après la virgule
// let number = 42.1234
// console.log(number.toFixed(2)); -> renvoie 42.12
//p parseInt()
//c Change une string en number
// let number = "42"
// console.log(number.parseInt()); -> renvoie 42
//y Si il y a plusieurs chiffres dans une string, il renverra le 1er
// let number = "42.12 est un chiffre"
// console.log(number.parseInt()); -> renvoie 42
//p parseFloat()
//c Change une string en number, mais renvoie des décimaux
// let number = "42.12 est un chiffre"
// console.log(number.parseFloat()); -> renvoie 42.12
//p console.log(Math.PI); -> renvoie 3.14......
//p console.log(Math.round(3.5)); -> renvoie 4
//p console.log(Math.floor(3.9)); -> renvoie 3
//p console.log(Math.ceil(3.2)); -> renvoie 4
//p console.log(Math.pow(2 , 7)); -> renvoie 128
//p console.log(Math.sqrt(16)); -> renvoie 4
//p console.log(Math.random()); -> renvoie x : 0 < x < 1