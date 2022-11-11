//h GITHUB                                                                  

//g Permet de versionner son travail en plusieurs sauvegardes
//g à des moments donnés et de pouvoir reprendre des sauvegardes 
//g antérieures si les updates sont buguées

//p "cd" -> change directory -> permet de se déplacer
//p "mkdir" -> make directory -> créer un dossier
//p "touch" -> créer un fichier
//p "ls" -> list -> affiche la liste des fichiers et dossiers
//p "cd.." -> permet de revenir en arrière
//p "code ." -> lance VsCode

//g Quand on versionne un projet, on le fait d'abord en local
//g puis ensuite on peut le faire en ligne

//y Voici les différentes étapes pour créer un "REPOSITORY"
//j 1)        " git init "                                                     
//j 2)        " git status "                                                   
//j 3)        " git add * "                                                    
//j 4)        " git commit -m 'first commit' "                                 
//j 5)        " git remote add origin https://github.com/lunalo57/exemple.git "
//j 6)        " git branch -M main "                                           
//j 7)        " git push -u origin main "                                      

//o Pour créer son propre site internet sur Github
//-> Créer un nouveau repository
//-> pseudo.github.io -> créer
//-> on récupère le repository
//-> on va sur le desktop
//-> " git clone " -> on clone notre repository dans un dossier
//-> " git add * "
//-> " git commit -m 'commit' "
//-> " git push -u origin main "
//-> le nom du site sera " https://pseudo.github.io "

//v Si on travaille en TEAM
//p " git pull " -> récupère la MAJ sur le dépôt distant
//p " .gitignore " -> pour bibliothèques ou frameworks

//v Fichiers indispensables dans un projet
//p " .gitignore " -> se fait dans VsCode
//p README.md -> se fait sur Github

//v Quand on travaille en TEAM, il faut faire des BRANCHES
//p " git branch nomBranch " -> créer une branche
//p " git branch " -> affiche les branches
//p " git checkout nomBranch " -> change de branche
//p " git merge " -> fusionne la branche

//y " git push --set-upstream origin nomBranch "
//c C'est comme un fork , on reprend tout le fichier ou 
//c dossier et on le met autre part