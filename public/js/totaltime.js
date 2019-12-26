let jobTotal = [];
let counting = 0;
let jobAwaitingTotal = [];
let arrayTime;
let sectionTime = ['panel-beating', 'mechanical','electrical','air-condition'];
const getTotalTime = async () =>{

    let date = new Date()
// if(date.getHours() < 17 && date.getHours() >= 8){
//     if(date.getDay() == 0 ){

//     } else if(date.getDay() == 6){

//     }else{
        // add the functions here
        const response = await fetch(`http://localhost:3000/jobs?isCompleted=${"false"}`);
    const data = await response.json();
    
    timeReadySec(data)
    while(counting < 4){
        arrayTime = 0;
        // get the the total jobs that are in progress in a particular section 
        jobTotal = data.filter(e => JSON.parse(e.section)[0] == sectionTime[counting] && e.inProgress == "true")
            .map(e => Number(e.duration) )
        // console.log(jobTotal, 'check length of the array')
        jobAwaitingTotal = data.filter(e => e.inProgress == "false" && e.isCompleted == "false" && JSON.parse(e.section)[0] == sectionTime[counting] && e.taken == "false")
        // console.log(jobAwaitingTotal, "jobAwaiting")
        if(jobTotal.length == 4 && jobAwaitingTotal.length > 0){
            jobTotal = jobTotal.sort( (a , b) => {return a - b });
            jobAwaitingTotal.map( ele => {
                jobTotal[arrayTime] += Number(ele.duration);
                ele.duration = jobTotal[arrayTime];
                $.ajax({
                url: `http://localhost:3000/jobs/${ele.id}`,
                method: 'patch',
                data:{
                    "duration": ele.duration,
                    "taken": true
                    
                }
                }).done(e => console.log(e, "runnnnn"))
                .catch(err => console.log(err))
                arrayTime++;
                
                if(arrayTime == 4){
                    arrayTime = 0;
                    jobTotal = jobTotal.sort( (a , b) => {return a - b });
                }
            })

        }        
        // console.log(jobAwaitingTotal,sectionTime[counting] ) 
        counting++
    }
//     }
// }

    
}

setTimeout(getTotalTime, 10000)
