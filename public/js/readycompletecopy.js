

const timeReady =  jobs =>{
closeworkHour = "17:00"
let duration = 10
let goHome = new Date("01/01/2000 "+closeworkHour)
let arrivalTime = new Date("12/16/2019 13:35")
let arrivalTimeCheck = new Date("12/16/2019 13:35")
let arrivalTimeValue = arrivalTime.getHours()
arrivalTimeValue
let goHomeValue = goHome.getHours();
goHomeValue
let workingHour = goHomeValue - arrivalTimeValue;
if(workingHour > duration){
    return "will Be ready by "+Math.ceil(duration) + " hrs"
} else{
    let newDuration = duration - workingHour;
    let noOfDays = newDuration/8;
    
    noOfDays
    let noOfHours = newDuration % 8;
    noOfHours
 
    arrivalTime.setHours(arrivalTime.getHours()+15+workingHour)
    arrivalTime.setDate(arrivalTime.getDate()+noOfDays)
    arrivalTime.setHours(arrivalTime.getHours()+noOfHours)
    
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
    return arrivalTime.getDay()
    
}

}
console.log(timeReady())