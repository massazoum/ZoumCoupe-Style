const times = document.getElementById("btntimes");
const bars = document.getElementById("btnbars");
const menumobile = document.getElementById("menumobile");

const sectionCards =document.getElementById("sectionCards");
const cardswipper =document.getElementById("cardswipper");
const produitDiv =document.getElementById("produitDiv");

const tablesectionCards = [
  {
 image :'./Media/imgaes/A1.jfif',
 title: 'Coupe de cheveux ' ,
 text :'Nos coiffeurs sont spécialisés dans la coupe de cheveux pour hommes, femmes et enfants. Ils peuvent vous aider à choisir un style qui correspond à votre personnalité et à votre apparence'
  },
  {
    image :'./Media/imgaes/A2.jfif',
    title: 'Coloration des cheveux' ,
    text :"coiffeurs spécialisés dans la coloration des cheveux sont des experts dans l'art de transformer la couleur des cheveux de leurs clients. Voici une description générale de ces coiffeurs spécialisés en coloration des cheveux "
  },
  {
    image :'./Media/imgaes/A3.jfif',
    title:'Coiffure et coiffage',
 text :"Nos coiffeurs spécialisés en coiffure et coiffage sont des experts dévoués qui mettent leur passion et leur talent au service de votre style capillaire. Ils maîtrisent l'art de la coiffure sous toutes ses facettes, de la coupe aux coiffures élaborées."
  }
  ,
  {
    image :'./Media/imgaes/A5.jfif',
 title: 'Coupe de cheveux ' ,
 text :"Notre équipe de coiffeurs dévoués est passionnée par l'art de la coupe de cheveux et se consacre à vous offrir des résultats exceptionnels. Nos coiffeurs spécialisés dans la coupe de cheveux en global sont des experts dans la création de styles uniques et adaptés à chaque client."
  }
]

const afficheService =()=>{
  tablesectionCards.forEach( element =>{
   const div = document.createElement('div');
   div.classList ='sectionCard';
   div.innerHTML =`
   <img src=${element.image} alt="">
   <h2>${element.title}</h2>
   <p>${element.text}</p>
   `
   sectionCards.appendChild(div);

  })
}


const tablecardswipper = [
  {
    image:'./Media/images/profile1.jpg',
    title:'David Dell',
    text:'he lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.',
    nomBtn1:'info',
    nomBtn2:'Contacter'
  },
  {
    image:'./Media/images/profile2.jpg',
    title:'David Dell',
    text:'he lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.',
    nomBtn1:'info',
    nomBtn2:'Contacter'
  },
  {
    image:'./Media/images/profile3.jpg',
    title:'David Dell',
    text:'he lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.',
    nomBtn1:'info',
    nomBtn2:'Contacter'
  }
  ,
  {
    image:'./Media/images/profile4.jfif',
    title:'David Dell',
    text:'he lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.',
    nomBtn1:'info',
    nomBtn2:'Contacter'
  },
  {
    image:'./Media/images/profile5.jfif',
    title:'David Dell',
    text:'he lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.',
    nomBtn1:'info',
    nomBtn2:'Contacter'
  }
]

const afficheSwipper =()=>{
  tablecardswipper.forEach(element =>{
    const div =document.createElement('div');
    div.classList='card swiper-slide';
    div.innerHTML=`
    <div class="image-content">
    <span class="overlay"></span>

    <div class="card-image">
        <img src=${element.image} alt="" class="card-img">
    </div>
</div>

<div class="card-content">
    <h2 class="name"${element.title}</h2>
    <p class="description">${element.text}</p>

    <div class="bntReserver">
      <button class="button">${element.nomBtn1}</button>
    <button class="button">${element.nomBtn2}</button>
    </div>
</div>
    `;

    cardswipper.appendChild(div);
  })
}

const tableProduits = [
  {
    image: './Media/boutique/sechecheveux.jfif', 
    title: 'Sèche-cheveux professionnel',
    text: 'Un sèche-cheveux puissant pour des résultats impeccables.',
    prix: '490',
  },
  {
    image: './Media/boutique/Lisseur.jfif',
    title: 'Lisseur à cheveux en céramique',
    text: 'Obtenez des cheveux lisses et brillants en quelques minutes.',
    prix: '3499',
  },
  {
    image: './Media/boutique/Ferfriser.jfif',
    title: 'Fer à friser professionnel',
    text: 'Créez des boucles parfaites en un rien de temps.',
    prix: '3999',
  },
  {
    image: './Media/boutique/Brossecheveux.jfif ',
    title: 'Brosse à cheveux démêlante',
    text: 'Une brosse pour des cheveux sans nœuds en douceur.',
    prix: '1999',
  },
  {
    image: './Media/boutique/Tondeuse.jfif', 
    title: 'Tondeuse à cheveux professionnelle',
    text: 'Tondez les cheveux avec précision et style.',
    prix: '5499',
  },
  {
    image: './Media/boutique/Bigoudisvelcro.jfif',
    title: 'Bigoudis en velcro',
    text: 'Des bigoudis faciles à utiliser pour de belles boucles.',
    prix: '2499',
  },
  {
    image: './Media/boutique/Laque.jfif',
    title: 'Laque professionnelle pour cheveux',
    text: 'Fixez votre coiffure pour une tenue longue durée.',
    prix: '999',
  },
  {
    image: './Media/boutique/Ciseaux.jfif',
    title: 'Ciseaux de coiffeur de qualité',
    text: 'Des ciseaux de précision pour une coupe parfaite.',
    prix: '29.99',
  },
];


const afficheproduits =()=>{
  tableProduits.forEach(element =>{
    const div =document.createElement('div');
    div.classList='produit';
    div.innerHTML=`
    <img src=${element.image} alt="Sèche-cheveux">
    <h3>${element.title}</h3>
    <p>${element.text}</p>
    <span class="prix">${element.prix} FG</span>
    <button id="acheter">Acheter</button>
    `;

    produitDiv.appendChild(div);
  })
}

afficheproduits();
afficheService();
afficheSwipper();

times.addEventListener("click", function () {
  bars.style.display = 'block';
  times.style.display = 'none';
  menumobile.style.display = 'none';
});

bars.addEventListener("click", function () {
  bars.style.display = 'none';
  times.style.display = 'block';
  menumobile.style.display = 'block';
});




