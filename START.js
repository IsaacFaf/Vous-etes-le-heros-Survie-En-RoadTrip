

let chapterObj = {
START: {
    subtitle:"L'histoire commence",
    img:"assets/img/debut.jpg",
    text:"Vous arrivez enfin à vos vacances d'été! Comme à chaque année, vous commencez toujours vos vacances avec un RoadTrip pour déconnecter du travail. Vous avez donc fini votre valise et êtes prêt à partir. À l'instant de barrer la porte, vous apercevez une hache. Vous vous posez la question s'il serait préférable de l'apporter pendant le RoadTrip.",
    options:[{
        text:"Ne pas prendre la hache",
        action:"goToChapter('PasHache')",
    }, {
        text:"Prendre la hache",
        action:"goToChapter('AvecHache')",
    }],
},

PasHache: {
    subtitle:"Chapitre 1",
    img:"assets/video/BloqueRoute.gif",
    text:"Vous avez décidé de ne pas prendre la hache. Vous avez débuté votre RoadTrip et tout semble bien se dérouler jusqu'à ce qu'un ours vous bloque la route. Impossible de l'éviter ou de faire marche arrière, il vous restes pas beaucoup d'option et il faut choisir vite!!",
    options:[{
        text:"Défiez l'ours au corp à corp",
        action:"goToChapter('DefierCorp')",
    }, {
        text:"Lui offrir un verre de vin",
        action:"goToChapter('OffrirVin')"
    }],
},

DefierCorp: {
    subtitle:"Défi d'envergure",
    img:"assets/video/LacOuContour.gif",
    text:"Vous avez décidé de le défier en corp à corp. Après une heure de combat acharné, vous êtes tous les deux en mauvaise état mais il te bloque toujours la route. Vous n'avez plus le choix, il vous faut fuir. Mais comment?",
    options:[{
        text:"Longez le lac par la forêt",
        action:"goToChapter('ChaletAbandon')"
    }, {
        text:"Vous décidez de nager dans le lac pour t'enfuir",
        action:"goToChapter('ChaletAbandon')"
    }],
},
ChaletAbandon: {
    subtitle:"Chalet suspicieux",
    img:"assets/img/ContourOuEau.jpg",
    text:"Vous avez réussi a vous enfuir mais vous avez besoin de manger et de vous mettre à l'abri rapidement. Vous voyez au loin un chalet et un bannanier. Serait-il plus sécuritaire de se réfugier dans le chalet en premier?",
    options:[{
        text:"Décidez d'allez chercher quelques bananes se qui vous aidera à vous rétablir.",
        action:"goToChapter('Banane')"
    },{
        text:"Optez pour le chalet en espérant qu'il y ai de la nourriture là-bas.",
        action:"goToChapter('Chalet')"
    }],
},
Chalet:{
    subtitle:"Mauvais chalet",
    img:"assets/video/chaletOurs.gif",
    text:"Il semblerait que vous êtes tombé dans le chalet de la famille ours.",
    options:[{
        text:"Recommencez",
        action:"goToChapter('START')",
    }],
},
Banane: {
    subtitle:"Ouch!",
    img:"assets/img/banannier.jpg",
    text:"Vous avez aperçu l'ours en essayant de vous cacher. Vous êtes tombé sur une banane. MORT. ",
    options:[{
        text:"Recommencez pour avoir une fin différente",
        action:"goToChapter('START')"
    }],
},
AvecHache: {
    subtitle:"Chapitre 1",
    img:"assets/video/BloqueRoute.gif",
    text:"Vous avez décidé de prendre la hache. Vous avez débuté votre RoadTrip et tout semble bien se dérouler jusqu'à ce qu'un ours vous bloque la route. Impossible de l'éviter ou de faire marche arrière, il vous restes pas beaucoup d'option et il faut choisir vite!!",
    options:[{
        text:"Lui offrir un verre de vin",
        action:"goToChapter('OffrirVin')"
    }, {
        text:"Optez pour une attaque avec la hache",
        action:"goToChapter('AttaqueHache')"
    }],
},
AttaqueHache: {
    subtitle:"Combat d'envergure",
    img:"assets/video/combatUnContreUn.gif",
    text:"L'ours s'est énervé et votre hache n'a pas suffit à gagner votre combat. Vous êtes mort.",
    options:[{
        text:"Recommencez pour trouvez d'autres fins",
        action:"goToChapter('START')"
    }],
},
OffrirVin: {
    subtitle:"Une offre à ne pas refuser",
    img:"assets/img/VinOurs.jpg",
    text:"L'ours, quoique surpris, accepte l'offre et vous apprenez à vous connaître. L'ours semble bien vous apprécier et il vous a obligé de continuer votre RoadTrip avec lui.",
    options:[{
        text:"Continuer le RoadTrip avec l'ours",
        action:"goToChapter('OursRoadTrip')"
    }],
},
OursRoadTrip: {
    subtitle:"Un dangé pour votre ami",
    img:"assets/img/chasseur.jpg",
    text:"En continuant votre RoadTrip avec l'ours, vous apercevez au loin une cabane de chasseur qui semble habité. Impossible de passer innaperçu sans leurs attirer l'attention.",
    options:[{
        text:"Essayez de sauver l'ours",
        action: "AvoirVin('SauveOurs')",
        
    }, {
        text:"Essayez dans profiter pour se débarasser de l'ours",
        action:"goToChapter('NuireOurs')"
    }, {
        text:"Proposez du vin au chasseur",
        action:"checkvin()"
    }],
},
SauveOurs: {
    subtitle:"Tentative de sauvetage",
    img:"assets/img/OursDeguise.jpg",
    text:"Déguiser l'ours comme votre compagne à fonctionné! En continuant le Road Trip ensemble, vous avez trouvé encore plus de vin et puisque l'ours a bien aimer votre vin. Il décide donc de vous tuer pour en avoir plus pour lui. MORT",
    options:[{
        text:"Essayez de trouver d'autres fins. (VOUS AVEZ TROUVEZ (+) DE VINS! UTILE POUR UNE FIN CACHÉE)",
        action:"goToChapter('START')"
    }],
},
NuireOurs: {
    subtitle:"Adieu ours! Où plûtot adieu à vous!",
    img:"assets/video/PeurChasseur.gif",
    text:"Vous attirez l'attention des chasseurs, C'est votre RoadTrip en solo après tout ! Mais il semblerait que avoir crier a fait peur aux chasseurs. Vous avez reçu une balle de fusil de chasse. MORT",
    options:[{
        text:"Réessayez pour trouver d'autres fins",
        action:"goToChapter('START')"
    }],
},
LOCKVinChasseur: {
    subtitle:"Fin secrète",
    img:"assets/img/MeilleurFin.jpg",
    text:"Vous êtes rendu un groupe à faire le Road Trip. L'ours s'entend super bien avec les chasseurs. Vous decidez de vivre tous ensemble puisque vous vous entendez bien autour d'une bonne bouteille de vin! FIN!",
    options:[{
        text:"Vous avez trouvé la meilleure fin mais vous pouvez toutefois recommencer et trouver les autres fins!",
        action:"goToChapter('START')"
    }],
}}

if(!localStorage.getItem("MemoryChapter" == null)){
    goToChapter('START')
}
goToChapter(localStorage.getItem("MemoryChapter"));





function goToChapter(chapitre){
    
    

    const subtitle = document.querySelector(".subtitle");
    const text = document.querySelector(".parag");
    const bouton = document.querySelector(".bouton");
    const img = document.querySelector(".imgchange");
    const video = document.querySelector(".imgchange");
    subtitle.innerHTML = chapterObj[chapitre]["subtitle"];
    text.innerHTML = chapterObj[chapitre]["text"];
    video.src = chapterObj[chapitre]["video"];
    img.src = chapterObj[chapitre]["img"];
    bouton.innerHTML="";
    for (let i =0; i<chapterObj[chapitre]["options"].length; i++){
        let button = document.createElement("button");
        let text = document.createTextNode(chapterObj[chapitre]["options"][i]["text"]);
        button.appendChild(text);
        button.setAttribute("onclick", chapterObj[chapitre]["options"][i]["action"]);
        bouton.appendChild(button);

    }
    const audio = document.querySelector(".audio");
    bouton.addEventListener("click", function(){
        audio.play();
    })


    const sauvegarde = localStorage.setItem("MemoryChapter", chapitre)
    localStorage.getItem("Memory");
    
    
    
};



    
    
    


    

    




let vinTrouver = localStorage.getItem("ClefDuSecret");

function AvoirVin(chapitre){
    vinTrouver = true;
    goToChapter(chapitre);
    localStorage.setItem("ClefDuSecret", vinTrouver)
}

function checkvin(){
    if(vinTrouver == true){
        goToChapter('LOCKVinChasseur')
    };
    if(vinTrouver == false){
        goToChapter('OursRoadTrip')
    };
};
console.log("exécuter goToChapter('START')")

function resetMemory(){
    localStorage.removeItem("ClefDuSecret");
    goToChapter("START")
}