const clientNom = document.getElementById('clientNom');
const clientNumero = document.getElementById('clientNumero');
const reservationDate = document.getElementById('reservationDate');
const reservationheur = document.getElementById('reservationheur');
const soumissionbtn = document.getElementById('soumissionbtn');
const Acoiffé_container = document.getElementById('Acoiffé_container');

  const recupere_reservations = async () => {
   try {
     const res = await fetch('https://backend-nodemongoose-style.onrender.com/reservations');
     const response = await res.json();
     console.log(response);
     response.forEach(element => {
      const div = document.createElement('div');
      div.className = 'clientprogramme';
      div.innerHTML=`
      <div>
      <h2><span>Nom:</span>${element.name}</h2>
<h2><span>Adresse :</span>${element.numero}</h2>
<h2><span>Date :</span>${element.date}</h2>
<h2><span>Heur :</span>${element.heur}</h2>
</div>
      `;
      Acoiffé_container.appendChild(div)
     }); 
   } catch (error) {
     console.error(error);
   }
 };




 
 
 const ajout_reservations = async(newData) => {
  try {
    const res = await fetch('https://backend-nodemongoose-style.onrender.com/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    });
    const response = await res.json();
    console.log(response);
    Acoiffé_container.innerHTML='';
    recupere_reservations()
  } catch (error) {
    console.error(error);
  }
 };



 recupere_reservations()
soumissionbtn.addEventListener('click' , ()=>{

 const newData = {
  name:clientNom.value,
  numero:Number(clientNumero.value),
  date:reservationDate.value,
  heur:reservationheur.value
};
 ajout_reservations(newData);
 Acoiffé_container.innerHTML='';

recupere_reservations()
clientNom.value ='' ;
clientNumero.value='';
reservationDate.value ='';
reservationheur.value='';
});