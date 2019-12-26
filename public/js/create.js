// Creating new job entry
const getD = async() =>{
  let response = await fetch(`http://localhost:3000/jobs?id=2`);
  let data = await response.json()
  console.log(data)
  let panel = JSON.parse(data[0].section)[0]
  console.log(panel)
  // panelMach = machines.filter(e => e.section == 'panel beating' );
}
getD()

$(document).ready(function(e) {
  $("button").click(function(e) {
    e.preventDefault(e);
    let jobsToDo = [];
    let timeArray = [];
    let section = '';
    let sectionArr = [];
    let totalTime = 0;
    $.each($("input[name= repairs]:checked"), function() {
      jobsToDo.push(
        $(this)
          .val()
          .split(":")[0]
      );
      timeArray.push($(this).val().split(":")[1])
      sectionArr.push($(this).val().split(":")[2])
      

    });
    
    if(sectionArr.includes('panel beating')){
      sectionArr.unshift("panel-beating");
    }else if(sectionArr.includes('mechanical')){
      sectionArr.unshift('mechanical');
    } else if(sectionArr.includes("electrical")){
      sectionArr.unshift("electrical");
    } else{
      sectionArr.unshift("air-condition");
    }
    totalTime = timeArray.reduce((a,b) => Number(a) + Number(b))
    
    alert("Repairs to make are : " + jobsToDo.join(",") +"with total working time of "+totalTime/3600);

    formSubmit = document.querySelector('#create-input');
    let name = formSubmit.name.value;
    let email = formSubmit.email.value;
    let phone = formSubmit.phone.value;
    let title = formSubmit.title.value;
    let Tasks = JSON.stringify(jobsToDo)
    let duration = totalTime
    let isCompleted = false;
    let inProgress = false;
    let arrivalHour = new Date()
    let date = arrivalHour.toLocaleDateString()
    let timeOf = arrivalHour.toLocaleTimeString().split(' ')[0];
    let arrival = new Date()
    section = JSON.stringify(sectionArr)
    let taken = false
    
    $.ajax({
      url : "http://localhost:3000/jobs",
      method : "post",
      data: {
        name,
        email,
        phone,
        title,
        section,
        Tasks,
        arrival,
        duration,
        isCompleted,
        inProgress,
        taken
        
      }
    }).done(e =>  console.log(e))
      .catch(err => console.log(err))

    // redirect to main page
      setTimeout( () => ( window.location = '/index.html'), 6000)

    // "id": 1,
    //   "name": "the owner",
    //   "title": "json-server",
    //   "description": "Description",
    //   "Tasks": [],
    //   "isCompleted": "true",
    //   "section": [
    //     "panel-beating",
    //     "mechanical"
    //   ],
    //   "inProgress": "false",
    //   "author": "typicode",
    //   "priority": 3,
    //   "duration": "0"


  });
});
