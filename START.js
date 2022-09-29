START = {
    subtitle:"START",
    text:"Vous arrivez enfin à vos vacances d'été! Comme à chaque année, vous commencez toujours vos vacances avec un RoadTrip pour déconnecter du travail. Vous avez donc fini votre valise et êtes prêt à partir. À l'instant de barrer la porte, vous apercevez une hache. Vous vous posez la question s'il serait préférable de l'apporter pendant le RoadTrip.",
    options:[PasHache = {
        text:"Ne pas prendre la hache",
        action:"goToChapter('PasHache')",
    }, AvecHache = {
        text:"Prendre la hache",
        action:"goToChapter('AvecHache')",
    }],
},

PasHache = {
    subtitle:"PasHache",
    text:"Vous avez décidé de ne pas prendre la hache. Vous avez débuté votre RoadTrip et tout semble bien se dérouler jusqu'à ce qu'un ours vous bloque la route. Impossible de l'éviter ou de faire marche arrière, il vous restes pas beaucoup d'option et il faut choisir vite!!",
    options:[DefierCorp = {
        text:"Défiez l'ours au corp à corp",
        action:"goToChapter('DefierCorp')",
    }, OffrirVin = {
        text:"Lui offrir un verre de vin",
        action:"goToChapter('OffrirVin')"
    }],
},

DefierCorp = {
    subtitle:"DefierCorp",
    text:"Vous avez décidé de le défier en corp à corp. Après une heure de combat acharné, vous êtes tous les deux en mauvaise état mais il te bloque toujours la route. Vous n'avez plus le choix, il vous faut fuir. Mais comment?",
    options:[ChaletAbandon = {
        text:"Longez le lac par la forêt",
        action:"goToChapter('ChaletAbandon')"
    }, ChaletAbandon1 = {
        text:"Vous décidez de nager dans le lac pour t'enfuir",
        action:"goToChapter('ChaletAbandon')"
    }],
},
ChaletAbandon = {
    subtitle:"ChaletAbandon",
    text:"Vous avez réussi a vous enfuir mais vous avez besoin de manger et de vous mettre à l'abri rapidement. Vous voyez au loin un chalet et un bannanier. Serait-il plus sécuritaire de se réfugier dans le chalet en premier?",
    options:[Banane = {
        text:"Décidez d'allez chercher quelques bananes se qui vous aidera à vous rétablir.",
        action:"goToChapter('Banane')"
    },Chalet = {
        text:"Optez pour le chalet en espérant qu'il y ai de la nourriture là-bas.",
        action:"goToChapter('Chalet')"
    }],
},
Banane = {
    subtitle:"Banane",
    text:"Vous avez aperçu l'ours en essayant de vous cacher. Vous êtes tombé sur une banane. MORT. ",
    options:[MortBanane = {
        text:"Recommencez pour avoir une fin différente",
        action:"goToChapter('START')"
    }],
},
AvecHache = {
    subtitle:"AvecHache",
    text:"Vous avez décidé de prendre la hache. Vous avez débuté votre RoadTrip et tout semble bien se dérouler jusqu'à ce qu'un ours vous bloque la route. Impossible de l'éviter ou de faire marche arrière, il vous restes pas beaucoup d'option et il faut choisir vite!!",
    options:[OffrirVin1 = {
        text:"Lui offrir un verre de vin",
        action:"goToChapter('OffrirVin')"
    }, AttaqueHache = {
        text:"Optez pour une attaque avec la hache",
        action:"goToChapter('AttaqueHache')"
    }],
},
AttaqueHache = {
    subtitle:"AttaqueHache",
    text:"L'ours s'est énervé et votre hache n'a pas suffit à gagner votre combat. Vous êtes mort.",
    options:[MortHache = {
        text:"Recommencez pour trouvez d'autres fins",
        action:"goToChapter('START')"
    }],
},
OffrirVin = {
    subtitle:"OffrirVin",
    text:"L'ours, quoique surpris, accepte l'offre et vous apprenez à vous connaître. L'ours semble bien vous apprécier et il vous a obligé de continuer votre RoadTrip avec lui.",
    options:[OursRoadTrip = {
        text:"Continuer le RoadTrip avec l'ours",
        action:"goToChapter('OursRoadTrip')"
    }],
},
OursRoadTrip = {
    subtitle:"OursRoadTrip",
    text:"En continuant votre RoadTrip avec l'ours, vous apercevez au loin une cabane de chasseur qui semble habité. Impossible de passer innaperçu sans leurs attirer l'attention.",
    options:[SauveOurs = {
        text:"Essayez de sauver l'ours",
        action:"goToChapter('SauveOurs')"
    }, NuireOurs = {
        text:"Essayez dans profiter pour se débarasser de l'ours",
        action:"goToChapter('NuireOurs')"
    }, LOCKVinChasseur = {
        text:"Proposez du vin au chasseur",
        action:"goToChapter('LOCKVinChasseur')"
    }],
},
SauveOurs = {
    subtitle:"SauveOurs",
    text:"Déguiser l'ours comme votre compagne à fonctionné! En continuant le Road Trip ensemble, vous avez trouvé encore plus de vin et puisque l'ours a bien aimer votre vin. Il décide donc de vous tuer pour en avoir plus pour lui. MORT",
    options:[MortSauveOurs = {
        text:"Essayez de trouver d'autres fins. (VOUS AVEZ TROUVEZ (+) DE VINS! UTILE POUR UNE FIN CACHÉE)",
        action:"goToChapter('START')"
    }],
},
NuireOurs = {
    subtitle:"NuireOurs",
    text:"Vous attirez l'attention des chasseurs, C'est votre RoadTrip en solo après tout ! Mais il semblerait que avoir crier a fait peur aux chasseurs. Vous avez reçu une balle de fusil de chasse. MORT",
    options:[MortNuireOurs = {
        text:"Réessayez pour trouver d'autres fins",
        action:"goToChapter('START')"
    }],
},
LOCKVinChasseur = {
    subtitle:"LOCKVinChasseur",
    text:"Vous êtes rendu un groupe à faire le Road Trip. L'ours s'entend super bien avec les chasseurs. Vous decidez de vivre tous ensemble puisque vous vous entendez bien autour d'une bonne bouteille de vin! FIN!",
    options:[MeilleurFin = {
        text:"Vous avez trouvé la meilleure fin mais vous pouvez toutefois recommencer et trouver les autres fins!",
        action:"goToChapter('START')"
    }],
}