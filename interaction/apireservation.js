const clientNom = document.getElementById('clientNom');
const clientNumero = document.getElementById('clientNumero');
const reservationDate = document.getElementById('reservationDate');
const reservationheur = document.getElementById('reservationheur');
const soumissionbtn = document.getElementById('soumissionbtn');

  const recupere_reservations = async () => {
   try {
     const res = await fetch('https://backend-nodemongoose-style.onrender.com/reservations');
     const response = await res.json();
     console.log(response);
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
  } catch (error) {
    console.error(error);
  }
 };




soumissionbtn.addEventListener('click' , ()=>{

 const newData = {
  name:clientNom.value,
  numero:Number(clientNumero.value),
  date:reservationDate.value,
  heur:reservationheur.value
};
 
 ajout_reservations(newData)
 recupere_reservations()
clientNom.value ='' ;
clientNumero.value='';
reservationDate.value ='';
reservationheur.value='';
});