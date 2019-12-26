let counter = 0;
let increment = 0;
let jobIncrement = 0;
let machIncrement = 0;
let jobAwaiting = 0;
let updateResponse;
let updateResponseSecond;
let done = []
let displaySectionWorkingWaiting;
className = ['panel', 'mechanical','electricity','air'];
let sectionTimeDisplay = ['panel-beating', 'mechanical','electrical','air-condition'];


const updateData = async () =>{

    let date = new Date()
// if(date.getHours() < 17 && date.getHours() >= 8){
//     if(date.getDay() == 0 ){

//     } else if(date.getDay() == 6){

//     }
//     else{
        if(counter == 0 || counter % 20 == 0){
        const response = await fetch(`http://localhost:3000/machines?isAvailable=${"false"}`);
        updateResponse = await response.json();
        
        // const responseSecond = await fetch(`http://localhost:3000/jobs?isCompleted=${"false"}&inProgress=${"true"}`);
        const responseSecond = await fetch(`http://localhost:3000/jobs?isCompleted=${"false"}&inProgress=${"true"}`);  
        updateResponseSecond = await responseSecond.json();

        const responseSecondSec = await fetch(`http://localhost:3000/jobs?isCompleted=${"false"}&inProgress=${"false"}`);  
        displaySectionWorkingWaiting = await responseSecondSec.json();
    }
    // console.log(updateResponseSecond, "jobs", displaySectionWorkingWaiting)
    
        if(displaySectionWorkingWaiting > 0){
            displaySectionWorkingWaiting
                .filter(e => e.duration != 0)
                .map(e.duration = e.duration - 5)

        if(displaySectionWorkingWaiting.length - 1 == jobAwaiting){
            jobAwaiting = 0;
        }

        if(counter % 7 == 0){
             $.ajax({
                url: `http://localhost:3000/machines/${displaySectionWorkingWaiting[jobAwaiting].id}`,
                method: 'patch',
                data:{
                    "duration": displaySectionWorkingWaiting[jobAwaiting].duration
                }
                }).done(e => (console.log('hhh')))
                .catch(err => console.log(err))

                jobAwaiting++
        
            }
        }
                 let displayPanel = document.querySelector(".panelA");
            //  displayPanel.innerHTML = ''
            // displaySectionWorkingWaiting.map(e => {
            
            //  displayPanel.innerHTML += `
            //  <div class="col-md-3 col-sm-6 col-xs-12 mt-2 ">
            //         </span>
            //          <p>Name :${e.name} </p>
            //         <p>Title :  ${e.title} </p> 
            //         <p>Email :  ${e.email} </p> 
            //         <p>Phone No: ${e.phone} </p> 
            //         <p>Id : ${e.id}</p>
            //         <p>Duration : ${e.duration}</p>      
                    
            //   </div>   
            //  `
            // })
        if(updateResponse.length > 0){
        updateResponse
            .filter(e => e.duration != 0)
            .map(e => e.duration = e.duration - 5)

        updateResponseSecond
            .filter(e => e.duration != 0 )
            .map(e => {
                
                e.duration = e.duration - 5})
        // completed tasks
        updateResponse
            .filter(e => e.duration == 0)
            .map(e => {
                e.isCompleted = true;
                e.inProgress = false
                done.push(e);
            })
         updateResponseSecond
            .filter(e => e.duration == 0)
            .map(e => {
                e.isCompleted = true;
                e.inProgress = false
                done.push(e);
            })

            if(updateResponseSecond.length - 1 == jobIncrement){
                    jobIncrement = 0
                }  

            // console.log(updateResponseSecond, 'lllllll')

        if(updateResponse.length - 1 == increment){
                increment = 0;
            }
        if(updateResponse.length - 2 == machIncrement){
                machIncrement = 0;
            }

        
        
            if(counter % 4 == 0 && counter % 3 == 0){
                
        // console.log(jobIncrement)

             $.ajax({
                url: `http://localhost:3000/machines/${updateResponse[machIncrement].id}`,
                method: 'patch',
                data:{
                    "duration": updateResponse[machIncrement].duration
                }
                }).done(e => (console.log('hhh')))
                .catch(err => console.log(err))

                machIncrement++
        
            }

            if(counter % 4 == 0 && counter % 2 == 0){

        
                $.ajax({
                url: `http://localhost:3000/jobs/${updateResponseSecond[jobIncrement].id}`,
                method: 'patch',
                data:{
                    "duration": updateResponseSecond[jobIncrement].duration
                    
                }
                }).done(e => console.log("sssss"))
                .catch(err => console.log(err))

                jobIncrement++
            }
        
        
           
            
               await increment++;

    // console.log(updateResponse, updateResponseSecond)


    

            // removing completed task from work in progress
        // progress = progress.filter(e => e.duration != 0);
        // machineProgress = machineProgress.filter(e => e.duration != 0);
        counter++

    }
    let i = 0;
    
    
 
         displayPanel  = updateResponseSecond.filter(e => JSON.parse(e.section)[0] == sectionTimeDisplay[0] );
         displayMechanical = updateResponseSecond.filter(e => JSON.parse(e.section)[0] == sectionTimeDisplay[1] )
         displayElectrical = updateResponseSecond.filter(e => JSON.parse(e.section)[0] == sectionTimeDisplay[2] )
         displayAir = updateResponseSecond.filter(e => JSON.parse(e.section)[0] == sectionTimeDisplay[3] )
        let addToSection = document.querySelector(`.${className[0]}`)
        let addToSectionMech = document.querySelector(`.${className[1]}`)
        let addToSectionELect = document.querySelector(`.${className[2]}`)
        let addToSectionAir = document.querySelector(`.${className[3]}`)
        addToSection.innerHTML = '';
        addToSectionMech.innerHTML = '';
        addToSectionELect.innerHTML = '';
        addToSectionAir.innerHTML = '';

         displayPanel.map(e => {
             
             addToSection.innerHTML += `
             <div class="col-md-3 col-sm-6 col-xs-12 mt-2 ">
                    </span>
                     <p>Name :${e.name} </p>
                    <p>Title :  ${e.title} </p> 
                    <p>Email :  ${e.email} </p> 
                    <p>Phone No: ${e.phone} </p> 
                    <p>Id : ${e.id}</p>
                    <p>Duration : ${e.duration}</p>      
                    
              </div>   
             `
         })

          displayMechanical.map(e => {
             
             addToSectionMech.innerHTML += `
             <div class="col-md-3 col-sm-6 col-xs-12 text-cent mt-2 ">
                     <p>Name :  ${e.name} </p>
                    <p>Title :  ${e.title} </p> 
                    <p>Email :  ${e.email} </p> 
                    <p>Phone No: ${e.phone} </p> 
                    <p>Id : ${e.id}</p>
                    <p>Duration : ${e.duration}</p>      
                        

                    
              </div>   
             `
         })

          displayElectrical.map(e => {
             
             addToSectionELect.innerHTML += `
             <div class="col-md-3 col-sm-6 col-xs-12 text-cent mt-2 ">
                     <p>Name :${e.name} </p>
                    <p>Title :${e.title} </p> 
                    <p>Email :${e.email} </p> 
                    <p>Phone No: ${e.phone} </p> 
                    <p>Id : ${e.id}</p>
                    <p>Duration : ${e.duration}</p>     
                        

                    
              </div>   
             `
         })

          displayAir.map(e => {
             
             addToSectionAir.innerHTML += `
             <div class="col-md-3 col-sm-6 col-xs-12 text-ceer mt-3 ">
                    <p>Name : ${e.name} </p>
                    <p>Title : ${e.title} </p> 
                    <p>Email : ${e.email} </p> 
                    <p>Phone No: ${e.phone} </p> 
                    <p>Id : ${e.id}</p>
                    <p>Duration : ${e.duration}</p>      
                          

                    
              </div>   
             `
         })
         
    
   
 

    //     }
        
    // }
}

// updateData()
setInterval(updateData, 20000)