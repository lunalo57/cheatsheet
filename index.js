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

//v METHODES POUR LES ARRAYS
//y Pour les prochains exemples, nous utiliserons ces tableaux
//g-------------
// let array3 = ['Js', 'Php', 'Python'];
// let array4 = ['Ruby', 'React'];
//g-------------
//p .concat() 
//c Permet de concatener 2 ou plusieurs tableaux
// ex let newArray = array3.concat(array4);
// console.log(newArray) -> renvoie ['Js', 'Php', 'Python','Ruby', 'React'];
//p ... les spreads operators
//c Permet de casser les tableaux
// ex let newArray = [...array3 , ...array4];
// console.log(newArray) -> renvoie ['Js', 'Php', 'Python','Ruby', 'React'];
//p join("")
//c Permet de casser les tableaux et insère ("") entre les != valeurs
//y Renvoie une string
// console.log(array4.join("-")) -> renvoie "Ruby-React"
//p slice()
//c Supprime des éléments d'un tableau en partant du début suivant le paramètre entré
// console.log(array3.slice(1)) -> renvoie ["Php", "Python"];
// console.log(array3.slice(2)) -> renvoie ["Python"];
//p slice( , )
//c Supprime des éléments d'un tableau suivant les paramètres entrés
// console.log(array3.slice(2,3)) -> renvoie ["Python"];
//p indexOf()
//c Donne l'index de ce qui est recherché
// console.log(array3.indexOf("Python")) -> renvoie 2;
//p forEach()
// array3.forEach(languages => () => {
//     console.log(languages); -> renvoie Js Php React
// })
//p every((***)=>***=="***")
//c Check chaque élément d'un tableau s'il est == au paramètre entré
// console.log(array3.every((language)) => language === "Php");
//o -> renvoie false (booléen)
//p some((***)=>***=="***")
//c Check si il y a au moins un élément == au paramètre entré
// console.log(array3.some((language)) => language === "Php");
//o -> renvoie true (booléen)
//p shift()
//c Retire le 1er élément d'un tableau
// console.log(array3.shift()) -> renvoie ["Php","Python"];
//p pop()
//c retire le dernier élément d'un tableau
// console.log(array3.shift()) -> renvoie ["Js","Php"];
//p splice()
//c Remplace ou retire un ou des éléments suivant les paramètres entrés
//y Premier exemple
//g A partir de 1, je retire 1 élément et je remplace par C++
// const restArray = array.splice(1 , 1, "C++");
// console.log(restArray) -> renvoie ["Php"]
// console.log(array3) -> renvoie ["Js","C++","Python"]
//y Deuxième exemple
//g A partir de 0, je retire 1 élément et je remplace par C++
// const restArray = array.splice(0 , 1, "C++");
// console.log(restArray) -> renvoie ["Js"]
// console.log(array3) -> renvoie ["C++","Php","Python"]
//y Troisième exemple
//g A partir de 0, je retire 2 éléments et je remplace par C++
// const restArray = array.splice(0 , 2, "C++");
// console.log(restArray) -> renvoie ["Js","Php"]
// console.log(array3) -> renvoie ["C++","Python"]
//y Quatrième exemple
//g A partir de 0, je retire 2 éléments et je remplace par array4
// const restArray = array.splice(0 , 2, ...array4);
// console.log(restArray) -> renvoie ["Js","Php"]
// console.log(array3) -> renvoie ["Ruby", "React", "Python"]

//v IMPORTANT
//y Pour les prochains exemples, nous utiliserons ce tableau
//g-------------
// let arrayN = [4, 74, 28, 12, 1];
//g-------------
//p reduce(x,y)
//c Permet de calculer toutes les valeurs d'un tableau
//c suivant la façon dont on utilise les paramètres x et y
// console.log(arrayN.reduce((x,y) => x + y)); -> renvoie 119
//p push()
//c Ajoute un élément à la dernière place dans un tableau
// let arrayN2 = arrayN.push("coucou");
// console.log(arrayN2) -> renvoie [4, 74, 28, 12, 1, "coucou"];

//v LE TRIO GAGNANT : FILTER / SORT / MAP
//y Pour les prochains exemples, nous utiliserons ce tableau
//g-------------
// let arrayN = [4, 74, 28, 12, 1];
//g-------------
//p filter()
//c Permet de filtrer les éléments d'un tableau 
//y Ici le wesh est le nom donné à tous les éléments du tableau
// let arrayN2 = arrayN.filter((wesh) => wesh > 10));
// console.log(arrayN2) -> renvoie [74, 28, 12];
//p sort()
//r Premier exemple - classement selon index sans paramètres
//c Permet de trier le tableau suivant le 1er index, puis suivant le 2ème...
//c de la même manière qu'un ordinateur, mais on peut changer ça
// let arrayN2 = arrayN.sort();
// console.log(arrayN2) -> renvoie [1, 12, 28, 4, 74];
//r Deuxième exemple - classement numérique avec paramètres a et b
//y Utiliser sort() de cette façon peut créer de nombreux problèmes
//y du coup, on va plutôt l'utiliser avec des paramètres
// let arrayN2 = arrayN.sort((a,b) => b - a); numériquement croissant
// console.log(arrayN2) -> renvoie [74, 28, 12, 4, 1];
// let arrayN2 = arrayN.sort((a,b) => a - b); numériquement décroissant
// console.log(arrayN2) -> renvoie [1, 4, 12, 28, 74];
//p map()
//c Permet d'énumérer 1 par 1 tous les éléments d'un tableau
//c Fonctionne comme un forEach()
//y Premier exemple
// arrayN.map((wesh) => console.log(wesh));
//o -> renvoie 4 74 28 12 1;
//y Deuxième exemple
// arrayN.map((wesh) => document.body.innerHTML += wesh);
//o -> renvoie à l'écran 47428121;
//y Troisième exemple
// arrayN.map((wesh) => document.body.innerHTML += `<li>${wesh}</li>`);
//o -> renvoie à l'écran une liste à puces
//y Quatrième exemple, la façon générale d'écrire un map()
// document.body.innerHTML = arrayN.map((wesh) => `<li>${wesh}</li>`);
//o -> renvoie à l'écran une liste à puces, chacune séparée par une virgule
//y Cinquième exemple, le top du top
// document.body.innerHTML = arrayN
//      .map((wesh) => `<li>${wesh}</li>`)
//      .join("");
//o -> renvoie à l'écran une liste à puces

//v METHODES POUR LES OBJECTS
//y Pour les prochains exemples, nous utiliserons cet objet
//g-------------
// let data = [
//     {
//         pseudo : "Denis",
//         age : 33,
//         technos : ["Js", "React", "NodeJs"],
//         admin : false,
//     },
//     {
//         pseudo : "Samia",
//         age : 24,
//         technos : ["CSS", "React", "NodeJs"],
//         admin : false,
//     },
//     {
//         pseudo : "Nikola",
//         age : 42,
//         technos : ["Php", "React", "NodeJs"],
//         admin : true,
//     }
// ]
//g-------------
//r Lister les utilisateurs et incorporer une classe à la div
//r et fait une ternaire pour le statut si true or false
//r et trier les users du plus vieux au plus jeune
//r et de filtrer les users qui sont plus agés que 24 ans -> TROP FORT!!!
// document.body.innerHTML = data 
//     .filter((user) => user.age > 24)
//     .sort((a,b) => b.age - a.age)
//     .map(
//         (user) =>
//         `
//         <div class="user-card">
//         <h2>${user.pseudo}</h2>
//         <p>Age : ${user.age}</p>
//         <p>Statut : ${user.admin ? "Modérateur" : "Membre"}</p>
//         </div>
//         `
//     )
//     .join("");

//v LES DATES 
//y Date Classique
// let date = new Date();
// console.log(date);
// Sat Nov 12 2022 11:32:14 GMT+0100 (heure normale d’Europe centrale)
//y Timestamp (le nombre ms depuis 1970)
// let date = new Date();
// let timestamp = Date.parse(date);
// console.log(timestamp);
// 1668249301000
//y IsoString
// let date = new Date();
// console.log(date.toISOString());
// 2022-11-12T10:37:33.065Z
//r Fonction permettant de récupérer des dates correctes
// let date = new Date();
// const dateParser = (chaine) => {
//     let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//         hour: "numeric",
//         minute: "numeric",
//     });
//     return newDate;
// }
// console.log(dateParser(date));
// 12 novembre 2022, 11:53
// Si month: "short"; -> 12 11 2022
// si month: "numeric"; -> 12/11/2022
//g Fonctionne aussi avec timestamp
// console.log(dateParser(timestamp));
// 12 novembre 2022, 11:53
//g Fonctionne avec ISO de la manière suivante
// let iso = date.toISOString();
// console.log(dateParser(iso));
// 12 novembre 2022, 11:53

//v LE DESTRUCTURING
//y Premier exemple
// let moreData ={
//     destVar : ["Element 1" , "Element 2"]
// };
// console.log(moreData.destVar);
// (2) ['Element 1', 'Element 2']
//g Les 2 signifient la même chose
// const { destVar } = moreData;
// console.log(destVar);
// (2) ['Element 1', 'Element 2']
//y Deuxième exemple
// let array5 = [70, 80, 90];
// let [x, y, z] = array5;
// console.log(x, y, z); -> renvoie 70 80 90
//y Troisième exemple
let date = new Date();
let iso = date.toISOString();
console.log(iso); 
// -> 2022-11-12T18:35:45.071Z
// const dateDestructuring = (chaine) => {
//     let newDate = chaine.split("T")[0];
//     let [y, m, d] = newDate.split("-");
//     return [d, m, y].join("/");
// }
// console.log(dateDestructuring(iso));
// -> 12/11/2022

//v LES DATASETS
//y Ces exemples sont en rapport avec le code HTML
//c Permet de manipuler le DOM
//c C'est des données que l'on peut mettre dans des balises
//c les balises en HTML sont en quelque sorte des objets
//c Elles permettent de mettre des données dans des balises
//c On peut les utiliser quand on ne veut pas utiliser les id ou les class
// const h3js = document.getElementById('javascript');
// console.log(h3js.dataset.lang); -> renvoie "js"
//y Autre exemple
// const h3 = document.querySelectorAll('h3');
//g h3.forEach((languages) => console.log(languages.dataset.lang));
// -> renvoie "js" "ph" "py"

//v LES REGEX
//c Permet de tester les chaines de caractères pour voir si
//c elles correspondent à ce que l'on attend
//p search()
// let mail = "quick_silver69@gmail.com"
// console.log(mail.search(/quick/)); -> renvoie 0;
// Si c'est true renvoie 0, si false renvoie -1
//y les / slashs encadrent l'expression qu'il faut trouver
//p replace( , )
// let mail = "quick_silver69@gmail.com"
// console.log(mail.replace(/quick/ , "fast")); 
//o -> renvoie "de_silver@gmail.com"
//p match()
// let mail = "quick_silver33@gmail.com"
//y Pas sensible à la casse avec le i
// console.log(mail.match(/QuIck/)); -> renvoie null;
// console.log(mail.match(/QuIck/i)); -> (renvoie true, un tableau et l'index) ou null;
//y On peut chercher des lettres
// console.log(mail.match(/[tui]/)); -> (renvoie true, un tableau et l'index) ou null;
//y On peut chercher des chiffres
// console.log(mail.match(/[123]/)); -> (renvoie true, un tableau et l'index) ou null;
//y Tous les chiffres (s'arrête au premier chiffre)
// console.log(mail.match(/\d/)); -> (renvoie true, un tableau et l'index) ou null;
//y Toutes les lettres (s'arrête à la première lettre)
// console.log(mail.match(/[a-z]/)); -> (renvoie true, un tableau et l'index) ou null;
//y Tous les caractères (s'arrête au premier caractère)
//y Ne comprend pas les caractères spéciaux
// console.log(mail.match(/\w/)); -> (renvoie true, un tableau et l'index) ou null;
//g Vérifier un mail
// console.log(mail.match(/^[\w-_]+@[\w-]+\.[a-z]{2,4}$/i));
//o -> (renvoie true, un tableau et l'index) ou null;
// ^ = start of string
// $ = end of string
// il faut échapper le . sinon ça ne fonctionne pas
// {2,4} = minimum 2 et maximum 4
// i pour dire qu'on n'est pas sensible à la casse
//g Séparateur de millier
// let separator = 15484135345;
// console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));;
//o -> renvoie 15,484,135,345
// On transforme le nombre en chaine de caractères avec toString();

//h-----------------------------------------------------------------------

//j JAVASCRIPT 4/6 LES API                                                








