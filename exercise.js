

const arrayArsenalPlayers = [
    {
        no:"1",
        name:"David Raya",
        age:25,
        position:"GK",
        achievement:{
            cleansheet:6,
            assist: 3,
            title:{
                premierLeague: 0,
                faCup:1,
            }
        }
    },

    {
        no:"2",
        name:"William Saliba",
        age:23,
        position:"CB",
        achievement:{
            cleansheet:7,
            assist: 1,
            goal:3,
            title:{
                premierLeague: 0,
                faCup:1,
            }
        }
    }


    ,

    {
        no:"8",
        name:"Martin Oodegard",
        age:25,
        position:"MF",
        achievement:{
            assist: 5,
            goal:8,
            title:{
                premierLeague: 0,
                faCup:1,
            }
        }
    }
    ,

    {
        no:"7",
        name:"Bukayo Saka",
        age:23,
        position:"RM",
        achievement:{
            assist: 13,
            goal:12,
            title:{
                premierLeague: 0,
                faCup:1,
            }
        }
    }
    ,

    {
        no:"11",
        name:"Gabriel Martinelli",
        age:25,
        position:"LM",
        achievement:{
            assist: 10,
            goal:8,
            title:{
                premierLeague: 0,
                faCup:1,
            }
        }
    }
]

//=========================
// FUNCTION EDIT BUTTON
//=========================
function editButton(index){
    let formContainerInput = document.querySelector('.form-container-input')
    // formContainerInput.classList.toggle("hidedisplay")

//    let changeLabel= document.getElementById('submit-form')
    // changeLabel.setAttribute('class','hidedisplay')
    // changeLabel.setAttribute('class','disabled')

    document.getElementById('submit-form').style.backgroundColor="#dfd9d9",
    document.getElementById('submit-form').style.pointerEvents="none",
    
    document.getElementById('edit-form').style.display="block"
    
    

    console.log(arrayArsenalPlayers[index]);

    document.getElementById('form-name').value=arrayArsenalPlayers[index].name

    document.getElementById('form-no').value=arrayArsenalPlayers[index].no
    
    document.getElementById('form-age').value=arrayArsenalPlayers[index].age
    
    document.getElementById('form-position').value=arrayArsenalPlayers[index].position
    
    document.getElementById('form-assist').value=arrayArsenalPlayers[index].achievement.assist
    
    document.getElementById('form-goal').value=arrayArsenalPlayers[index].achievement.goal
    
    document.getElementById('form-cleansheet').value=arrayArsenalPlayers[index].achievement.cleansheet
    
    document.getElementById('form-premierleague').value=arrayArsenalPlayers[index].achievement.title.premierLeague
    
    document.getElementById('form-facup').value=arrayArsenalPlayers[index].achievement.title.faCup

}




//=========================
// ITERATE OVER ARRAY
//=========================
arrayArsenalPlayers.forEach((item,index)=>{

 

    //create new Row
    const tBodySpace = document.getElementById('tbody')
    const tBodyRow = tBodySpace.insertRow()



    //try check
    if(!item.achievement.goal){
        item.achievement.goal="N/A"
    }

    if(!item.achievement.assist){
        item.achievement.assist="N/A"
    }

    if(!item.achievement.cleansheet){
        item.achievement.cleansheet="N/A"
    }

        //insert Cell
        tBodyRow.insertCell(0).innerHTML=item.no
        tBodyRow.insertCell(1).innerHTML=item.name
        tBodyRow.insertCell(2).innerHTML=item.age
        tBodyRow.insertCell(3).innerHTML=item.position
        tBodyRow.insertCell(4).innerHTML=item.achievement.assist
        tBodyRow.insertCell(5).innerHTML=item.achievement.goal
        tBodyRow.insertCell(6).innerHTML=item.achievement.cleansheet
        tBodyRow.insertCell(7).innerHTML=item.achievement.title.premierLeague
        tBodyRow.insertCell(8).innerHTML=item.achievement.title.faCup
        tBodyRow.insertCell(9).innerHTML=`<button onclick="editButton(${index})">Edit</button>`
        tBodyRow.insertCell(10).innerHTML=`x`

  

})


function submitButton(){
   
}



function updatesButton(index){


 // Get the updated values from the form
 const updatedName = document.getElementById('form-name').value;
 const updatedNo = document.getElementById('form-no').value;
 const updatedAge = document.getElementById('form-age').value;
 const updatedPosition = document.getElementById('form-position').value;
 const updatedAssist = document.getElementById('form-assist').value;
 const updatedGoal = document.getElementById('form-goal').value;
 const updatedCleansheet = document.getElementById('form-cleansheet').value;
 const updatedPremierLeague = document.getElementById('form-premierleague').value;
 const updatedFaCup = document.getElementById('form-facup').value;

 // Update the arrayArsenalPlayers with the new values
 arrayArsenalPlayers[index] = {
     no: updatedNo,
     name: updatedName,
     age: updatedAge,
     position: updatedPosition,
     achievement: {
         assist: updatedAssist,
         goal: updatedGoal,
         cleansheet: updatedCleansheet,
         title: {
             premierLeague: updatedPremierLeague,
             faCup: updatedFaCup,
         },
     },
 };

 // Log the updated array
 console.log(arrayArsenalPlayers);




//     event = event || window.event
//     event.preventDefault()
// 
//     let newNameValue = document.getElementById('form-name').value 
//     let oldNameValue = arrayArsenalPlayers[index]
        // document.getElementById('form-no').value
        // document.getElementById('form-age').value
        // document.getElementById('form-position').value
        // document.getElementById('form-assist').value
        // document.getElementById('form-goal').value
        // document.getElementById('form-cleansheet').value
        // document.getElementById('form-premierleague').value
        // document.getElementById('form-facup').value

        // console.log(`new Value  ${newNameValue}`);
        // console.log(`old value  ${oldNameValue}`)
 
    // alert('Update Successfully!');
}





function tryMe(){
    arrayArsenalPlayers.push(document.getElementById('form-name').value)
  console.log(arrayArsenalPlayers)
}





