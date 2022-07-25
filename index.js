window.onload = ()=>{

    const data = {
        taskType:null,
        assignedTo: null,
        StartDate: null,
        EndDate: null,
        Reminder: null,
        Subject: null,
        biginputs: null
    }

console.log("started")
const taskType = document.getElementById("TaskType");
const assignedTo = document.getElementById("AssignedTo");
const StartDate = document.getElementById("StartDate");

const EndDate = document.getElementById("EndDate");

const Reminder = document.getElementById("Reminder");
const Subject = document.getElementById("Subject");

const biginputs = document.getElementById("biginputs");


const applyButton = document.getElementById("apply");
applyButton.addEventListener("click", apply);

function apply(){
    let a  = data.taskType = taskType.value;
    let b = data.assignedTo = assignedTo.value;

    data.StartDate = StartDate.value;

    data.EndDate = EndDate.value;

    data.Reminder = Reminder.value;

    data.Subject = Subject.value;

    data.biginputs = biginputs.value;
    console.log(data);
    let newEle = document.createElement("div");
    newEle.setAttribute("class", "events");
    newEle.innerHTML = "Task Type:" +data.taskType +"<br>"+ "Assigned to:"+ data.assignedTo +"<br>"+ "to be completed by:" + data.Reminder;

    let parent = document.getElementById("timelineEvents");
    parent.appendChild(newEle);


    
}

}