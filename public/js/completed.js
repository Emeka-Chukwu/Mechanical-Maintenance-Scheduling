 let doneData = [];
 let availableMach = [];
 let timingValue = 0
 const getDoneData = async () => {

    let date = new Date()
// if(date.getHours() < 17 && date.getHours() >= 8){
//     if(date.getDay() == 0 ){

//     } else if(date.getDay() == 6){

//     }else{
        const response = await fetch(`http://localhost:3000/machines?isAvailable=${"false"}&duration=${"0"}`);
     availableMach = await response.json();

     const secondResponse = await fetch(`http://localhost:3000/jobs?duration=${"0"}&inProgress=${"true"}`);
     doneData = await secondResponse.json();

     console.log(availableMach, doneData, 'hrere')

     if(availableMach.length > 0 && timingValue % 2 == 0){
         console.log(availableMach)
         $.ajax({
                url: `http://localhost:3000/machines/${availableMach[0].id}`,
                method: 'patch',
                data:{
                    "isAvailable": true 
                }
                }).done(e => (console.log('')))
                .catch(err => console.log(err))
     }


     if(doneData.length > 0 && timingValue % 2 != 0){
         $.ajax({
                url: `http://localhost:3000/jobs/${doneData[0].id}`,
                method: 'patch',
                data:{
                    "inProgress": false,
                    "isCompleted": true
                }
                }).done(e => (console.log('')))
                .catch(err => console.log(err))
     }
     timingValue++;
        
//     }
// }
 }
 setInterval( getDoneData, 30000)