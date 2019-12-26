let machines = [];
let panelMach = [];
let mechMach = [];
let electMach = [];
let airCondMach = [];
let progress = [];
let machineProgress = [];
// let done = [];
let progressValues = [];
const getMachines = async() =>{
    const response = await fetch(`http://localhost:3000/machines?isAvailable=${"true"}`);
    const data = await response.json();
    console.log(data)
    
    

    const responseSecond = await fetch(`http://localhost:3000/jobs?isCompleted=${"false"}&inProgress=${"false"}`);
    const dataSecond = await responseSecond.json()
    console.log(dataSecond, 'lklk');

    // return 'o'
    console.log('start')
    machines = data;
    // assigning machines their workstation
    panelMach = machines.filter(e => e.section == 'panel beating' && e.isAvailable == "true" );
    mechMach = machines.filter(e => e.section == 'mechanical' && e.isAvailable == "true" );
    electMach = machines.filter(e => e.section == 'Electrical' && e.isAvailable == "true");
    airCondMach = machines.filter(e => e.section == 'Air Condition' && e.isAvailable == "true");
    console.log(panelMach, 'ttttt')

    // return 'o'
   const availableJobs = dataSecond.filter(e => JSON.parse(e.section)[0]=='panel-beating'  && e.duration != 0)
    console.log(availableJobs, 'availableElectJobs')
    console.log('accordion');
    
    if(availableJobs.length != 0 && panelMach.length != 0){
        let noOfMach = panelMach.length;
        let noOfJobs = availableJobs.length;
        let noOfAssignment = noOfMach < noOfJobs ? noOfMach : noOfJobs;
        for( let i = 0; i < noOfAssignment; i++){
            availableJobs[i].inProgress = false;
            progress.push(availableJobs[i])
            panelMach[i].duration = availableJobs[i].duration;
            panelMach[i].isAvailable = false;
            panelMach[i].jobId = availableJobs[i].id;
            machineProgress.push(panelMach[i])
            panelMach[i].duration--;
            availableJobs[i].duration--; 
      
            console.log(panelMach, 'panelmaec')
            console.log('kkkk')

            $.ajax({
                url: `http://localhost:3000/machines/${panelMach[i].id}`,
                method: 'patch',
                data:{
                    "isAvailable": false,
                    "duration": panelMach[i].duration,
                    "jobId": panelMach[i].jobId
                }
                }).done(e => (console.log('hhh')))
                .catch(err => console.log(err))

            $.ajax({
                url: `http://localhost:3000/jobs/${availableJobs[i].id}`,
                method: 'patch',
                data:{
                    "duration": 90,
                    "inProgress": true
                }
                }).done(e => (""))
                .catch(err => console.log(err))

        }
    }
// return '000';
    const availableMechJobs = dataSecond.filter(e => JSON.parse(e.section)[0]=='mechanical' && e.duration != 0 )
    if(availableMechJobs.length != 0 && mechMach.length != 0){
        let noOfMach = mechMach.length;
        let noOfJobs = availableMechJobs.length;
        let noOfAssignment = noOfMach < noOfJobs ? noOfMach : noOfJobs;
        for( let i = 0; i < noOfAssignment; i++){
            availableMechJobs[i].inProgress = true;
            progress.push(availableMechJobs[i])
            mechMach[i].duration = availableMechJobs[i].duration;
            mechMach[i].isAvailable = false;
            mechMach[i].jobId = availableMechJobs[i].id;
            machineProgress.push(mechMach[i])


            $.ajax({
                url: `http://localhost:3000/machines/${mechMach[i].id}`,
                method: 'patch',
                data:{
                    "isAvailable": false,
                    "duration": mechMach[i].duration,
                    "jobId": mechMach[i].jobId
                }
                }).done(e => (console.log('hhh')))
                .catch(err => console.log(err))

            $.ajax({
                url: `http://localhost:3000/jobs/${availableMechJobs[i].id}`,
                method: 'patch',
                data:{
                    
                    "inProgress": true
                }
                }).done(e => (""))
                .catch(err => console.log(err))
        }

    }

    const availableElectJobs = dataSecond.filter(e => JSON.parse(e.section)[0] == 'electrical'   && e.duration != 0)
    console.log(availableElectJobs, 'availableElectJobs')
    console.log(electMach, 'electMach');
    
    if(availableElectJobs.length != 0 && electMach.length != 0){
        let noOfMach = electMach.length;
        let noOfJobs = availableElectJobs.length;
        let noOfAssignment = noOfMach < noOfJobs ? noOfMach : noOfJobs;
        console.log(noOfAssignment, 'pppppppppppppppppp')
        for( let i = 0; i < noOfAssignment; i++){
            availableElectJobs[i].inProgress = true;
            progress.push(availableElectJobs[i])
            electMach[i].duration = availableElectJobs[i].duration;
            electMach[i].isAvailable = false;
            electMach[i].jobId = availableElectJobs[i].id;
            machineProgress.push(electMach[i])

            $.ajax({
                url: `http://localhost:3000/machines/${electMach[i].id}`,
                method: 'patch',
                data:{
                    "isAvailable": false,
                    "duration": electMach[i].duration,
                    "jobId": electMach[i].jobId
                }
                }).done(e => (console.log('hhh')))
                .catch(err => console.log(err))

            $.ajax({
                url: `http://localhost:3000/jobs/${availableElectJobs[i].id}`,
                method: 'patch',
                data:{
                    
                    "inProgress": true
                }
                }).done(e => ("yesss"))
                .catch(err => console.log(err))
        }

        


    }

    const availableAirConditionJobs = dataSecond.filter(e => JSON.parse(e.section)[0] == 'air-condition'  && e.duration != 0)
    if(availableAirConditionJobs.length != 0 && airCondMach.length != 0){
        let noOfMach = airCondMach.length;
        let noOfJobs = availableAirConditionJobs.length;
        let noOfAssignment = noOfMach < noOfJobs ? noOfMach : noOfJobs;
        for( let i = 0; i < noOfAssignment; i++){
            availableAirConditionJobs[i].inProgress = true; 
            progress.push(availableAirConditionJobs[i])
            airCondMach[i].duration = availableAirConditionJobs[i].duration;
            airCondMach[i].isAvailable = false;
            airCondMach[i].jobId = availableAirConditionJobs[i].id;
            machineProgress.push(airCondMach[i])

            $.ajax({
                url: `http://localhost:3000/machines/${airCondMach[i].id}`,
                method: 'patch',
                data:{
                    "isAvailable": false,
                    "duration": airCondMach[i].duration,
                    "jobId": airCondMach[i].jobId
                }
                }).done(e => (console.log('hhh')))
                .catch(err => console.log(err))

            $.ajax({
                url: `http://localhost:3000/jobs/${availableAirConditionJobs[i].id}`,
                method: 'patch',
                data:{
                    "duration": 90,
                    "inProgress": true
                }
                }).done(e => (""))
                .catch(err => console.log(err))
        }
    
    }

    // the countdown

    // if(progress.length > 0){
    //     progress
    //         .filter(e => e.duration > 0)
    //         .map(e => --e.duration)

    //     machineProgress
    //         .filter(e => e.duration > 0 )
    //         .map(e => --e.duration)
    //     // completed tasks
    //     progress
    //         .filter(e => e.duration == 0)
    //         .map(e => {
    //             e.isCompleted = true;
    //             e.inProgress = false
    //             done.push(e);
    //         })


    //         // removing completed task from work in progress
    //     // progress = progress.filter(e => e.duration != 0);
    //     // machineProgress = machineProgress.filter(e => e.duration != 0);


    // }

    //  updating the database for the new values
  
    

     console.log(progress,'proo', machineProgress)
    
     

    // timing of the machines 

     



}
// checking for the date and time
// let date = new Date()
// if(date.getHours() < 17 && date.getHours() >= 8){
//     if(date.getDay() == 0 ){

//     } else if(date.getDay() == 6){

//     }else{
//         setTimeout(getMachines, 5000)
        
//     }
// }
    // .then(e => console.log(e)).catch(err=> console.log(err))

        setTimeout(getMachines, 5000)
