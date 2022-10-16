employees = {}

//querying
let employee1Select = document.getElementById("employee1")
let employee2Select = document.getElementById("employee2")
let meetingElement = document.getElementById("meeting")
let submit = document.getElementById("submit")
let toastBody = document.getElementById("toast-body")
let toastElement = document.getElementById("toast")
let toastBg = document.getElementById("toast-background")
let errorMsg = document.getElementById('error')

class Responsibilities{
    constructor (name){
        this.name = name
    }
}

class Role{
    constructor(name, responsibilities){
        this.name = name
        this.responsibilities = responsibilities
    }
}

class Employee{
    constructor(name, role){
        this.name = name 
        this.role = role
    }
}


function checkEligibilityOfEmployee(meeting, employee){
        if ((employee.role.responsibilities.includes(meeting)))
            return true
        else 
            return false
    }

 
function validate(employee1,employee2,meeting){
    if (employee1 === "" || employee1 === undefined){
        errorMsg.innerHTML = "Select employee 1"
        return false
    } 
    else if(employee2 === "" || employee2 === undefined){
        errorMsg.innerHTML = "Select employee 2"
        return false
    }
    else if(meeting === "" || meeting === undefined){
            errorMsg.innerHTML = "Meeting Required"
            return false
    }
    else if(employee1 === employee2){ 
        errorMsg.innerHTML = "Cannot set meeting between same employee"
        return false
    }
    else{
        errorMsg.innerHTML = ""
        return true
    }

}

function  sheduleMeeting(){
    employee1 = employees[employee1Select.value]
    employee2 = employees[employee2Select.value]
    meeting = responsibilities[meetingElement.value]
    if(validate(employee1,employee2,meeting)){
        if (!this.checkEligibilityOfEmployee(meeting, employee1))
        showToast(meeting,employee1)
    else if (!this.checkEligibilityOfEmployee(meeting, employee1))
       showToast(meeting,employee2)
    else
        showToast(meeting, employee1, employee2)
    } 
}


function showToast(meeting, ...people) {
    if (people.length ===1 ){
            toastBody.innerHTML = `${people[0].name} is not eligible for ${meeting.name} meeting`
            toastElement.classList.replace('bg-success','bg-danger')
        }
    else if(people.length ===2) {
            toastBody.innerHTML = `${meeting.name} meeting sheduled between ${people[0].name} and ${people[1].name} `
            toastElement.classList.replace('bg-danger','bg-success')
    }
    const toast = new bootstrap.Toast(toastElement)
    toast.show()
}


//responsibilities
let responsibilities = {
    scrum : new Responsibilities('scrum'),
    grooming : new Responsibilities('grooming'),
    archDesign : new Responsibilities('Architectural Design'),
    payroll : new Responsibilities('payroll'),
    fun : new Responsibilities('Fun Activities'),
    security : new Responsibilities('Security Analysis'),
    uxDesign : new Responsibilities('UX Design')
} 

//roles 
sde1 = new Role('SDE I',[responsibilities.scrum])
sde2 = new Role('SDE II', [responsibilities.scrum, responsibilities.archDesign])
sde3 = new Role('SDE III', [responsibilities.scrum, responsibilities.grooming, responsibilities.archDesign])
po = new Role('PO', [responsibilities.grooming , responsibilities.uxDesign])
hr = new Role('HR', [responsibilities.payroll, responsibilities.fun])
tops = new Role('TOPS', [responsibilities.scrum, responsibilities.grooming, responsibilities.security])

//users 
function createUserandAddToList(name, role){
 employee = new Employee(name, role)
 employees[name] = employee
}

//create users
createUserandAddToList('Abhijith',sde1)
createUserandAddToList('Ann',sde2)
createUserandAddToList('Arun',sde3)
createUserandAddToList('Vishal',po)
createUserandAddToList('Afsal',hr)
createUserandAddToList('Babitha',tops)
createUserandAddToList('Vishnu',sde1)
createUserandAddToList('Azar',sde2)
createUserandAddToList('Anand',sde3)
createUserandAddToList('Nanda',po)

for (var i in employees){
    var option = employees[i]
    var element = document.createElement("option")
    element.textContent = employees[i].name
    element.value = employees[i].name
    employee1Select.appendChild(element);
}

for (var i in employees){
    var option = employees[i]
    var element = document.createElement("option")
    element.textContent = employees[i].name
    element.value = employees[i].name
    employee2Select.appendChild(element);
}

for (var i in responsibilities){
    var option = responsibilities[i]
    var element = document.createElement("option")
    element.textContent = responsibilities[i].name
    element.value = i
    meeting.appendChild(element);
}
