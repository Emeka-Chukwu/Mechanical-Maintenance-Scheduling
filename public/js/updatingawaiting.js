// let counter = 0;
// let displaySectionWorkingWaiting;
// let jobAwaitingIncremental = 0;

// const updateData = async () =>{

//     let date = new Date()
// if(date.getHours() < 17 && date.getHours() >= 8){
//     if(date.getDay() == 0 ){

//     } else if(date.getDay() == 6){

//     }else{
//         if(counter == 0 || counter % 50 == 0){
//        const response = await fetch(`http://localhost:3000/machines?isAvailable=${"false"}`);
//         var updateResponse = await response.json();
//         // const responseSecond = await fetch(`http://localhost:3000/jobs?isCompleted=${"false"}&inProgress=${"true"}`);
//         const responseSecondSec = await fetch(`http://localhost:3000/jobs?isCompleted=${"false"}&inProgress=${"false"}`);  
//         displaySectionWorkingWaiting = await responseSecondSec.json();
//     }


//             if(displaySectionWorkingWaiting.length > 0){
//                 console.log(displaySectionWorkingWaiting.length);
                
//                 displaySectionWorkingWaiting
//                     .filter(e => e.duration != 0)
//                     .map(e =>  e.duration = Number(e.duration)-5)
//                     console.log(displaySectionWorkingWaiting[0].duration)
//                     // console.log(displaySectionWorkingWaiting, "job minus")
  
//             }  
            
//             if(displaySectionWorkingWaiting.length == jobAwaitingIncremental){
//             jobAwaitingIncremental = 0
//             }

//             //  if(counter % 50 == 0){
//             //      $.ajax({
//             //     url: `http://localhost:3000/jobs/${displaySectionWorkingWaiting[jobAwaitingIncremental].id}`,
//             //     method: 'patch',
//             //     data:{
//             //         "duration": displaySectionWorkingWaiting[jobAwaitingIncremental].duration
//             //     }
//             //     }).done(e => (console.log('awaiting job')))
//             //     .catch(err => console.log(err))

//             //     jobAwaitingIncremental++
//             // }
//             let displayPanel = document.querySelector(".panelA");
//              displayPanel.innerHTML = ''
//             displaySectionWorkingWaiting.map(e => {
            
//              displayPanel.innerHTML += `
//              <div class="col-md-3 col-sm-6 col-xs-12 mt-2 ">
//                     </span>
//                      <p>Name :${e.name} </p>
//                     <p>Title :  ${e.title} </p> 
//                     <p>Email :  ${e.email} </p> 
//                     <p>Phone No: ${e.phone} </p> 
//                     <p>Id : ${e.id}</p>
//                     <p>Duration : ${e.duration}</p>      
                    
//               </div>   
//              `
//             })
//         }
    
//     }
// }

// // updateData()
// setInterval(updateData, 3000)