

const timeReadySec =  jobs =>{
    
    
    let completed = document.querySelector("#completed");
    // completed.innerHTML = '';
    
    jobs.map(e => {

          

        
        closeworkHour = "17:00"
        let duration = Math.floor(e.duration/3600)
        let secondsTime = e.duration % 60
        let minutesTime = secondsTime/60
        let goHome = new Date("01/01/2000 "+closeworkHour)
        // let arrivalTime = new Date("12/16/2019 13:35")
        let arrivalTime = new Date(e.arrival)
        let arrivalTimeCheck = new Date(e.arrival)
        let arrivalTimeValue = arrivalTime.getHours()
        arrivalTimeValue
        let goHomeValue = goHome.getHours();
        goHomeValue
        let workingHour = goHomeValue - arrivalTimeValue;
        if(workingHour > duration){
            arrivalTime.setHours(arrivalTime.getHours()+duration, minutesTime)
        } else{
        let newDuration = duration - workingHour;
        let noOfDays = newDuration/8;

        noOfDays
        let noOfHours = newDuration % 8;
        noOfHours

        arrivalTime.setHours(arrivalTime.getHours()+15+workingHour)
        arrivalTime.setDate(arrivalTime.getDate()+noOfDays)
        arrivalTime.setHours(arrivalTime.getHours()+noOfHours)
        arrivalTime.setMinutes(arrivalTime.getMinutes()+minutesTime)



        if(arrivalTime.getDay() < arrivalTimeCheck.getDay() && arrivalTime.getDate() > arrivalTimeCheck.getDate()){
            arrivalTime.setHours(arrivalTime.getHours()+48)
        }
        if(arrivalTime.getDay == 0 || arrivalTime.getDay() == 6){
            arrivalTime.setHours(arrivalTime.getHours()+48)
            console.log('ooo')
        }

        if(arrivalTime.getHours() < 13 && arrivalTime.getHours() >= 12){
            arrivalTime.setHours(arrivalTime.getHours()+1)
        }
        if(arrivalTime.getHours() > 12 ){
            arrivalTime.setHours(arrivalTime.getHours()+1)
        }
            
        arrivalTime
        // return arrivalTime.getDay()
        
        }
        completed.innerHTML += 
      
        `   
            <div class=" text-center mt-3 mb-3"> 
                    <p> Title : ${e.title}</p>
                    <p> Name : ${e.name}</p>
                    <p> Completed_at : ${arrivalTime}</p>
                    <p> Section : ${JSON.parse(e.section)}</p>
                    <p> ID : ${e.id}</p>
                    
                    
            </div>
        
        `
        // completed.innerHTML += 
        //     `
            
        //     <p> Completed_at : ${arrivalTime}</p>
        //     `
        })

}



// //  added to totaltime.js line  18
// console.log(timeReady())