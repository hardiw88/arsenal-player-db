const arrayArsenalPlayers = [
    {   id:1,
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
        id:2,
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
        id:3,
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
        id:4,
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
        id:5,
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


function PlayerObject(id,no,name,age,position,assist,goal,premierLeague,faCup){
    this.id = id
    this.name = name
    this.no=no

    this.age = age
    this.position = position
    this.achievement = 
    {
        assist :assist,
       goal:goal,
       title:{
        premierLeague:premierLeague,
        faCup:faCup
       }

    }
}


let arrayArsenalPlayersUpdated

//if there is update, arrayArsenalPlayer = newDatabase


//=========================
// FUNCTION EDIT BUTTON
//=========================
function editButton(index,no){
    let formContainerInput = document.querySelector('.form-container-input')
    // formContainerInput.classList.toggle("hidedisplay")

//    let changeLabel= document.getElementById('submit-form')
    // changeLabel.setAttribute('class','hidedisplay')
    // changeLabel.setAttribute('class','disabled')

    document.getElementById('submit-form').style.backgroundColor="#dfd9d9",
    document.getElementById('submit-form').style.pointerEvents="none",
    
    document.getElementById('edit-form').style.display="block"
    
    

    // console.log(arrayArsenalPlayers[index]);

    document.getElementById('form-id').value=arrayArsenalPlayers[index].id

    document.getElementById('form-name').value=arrayArsenalPlayers[index].name

    document.getElementById('form-no').value=arrayArsenalPlayers[index].no
    
    document.getElementById('form-age').value=arrayArsenalPlayers[index].age
    
    document.getElementById('form-position').value=arrayArsenalPlayers[index].position
    
    document.getElementById('form-assist').value=arrayArsenalPlayers[index].achievement.assist
    
    document.getElementById('form-goal').value=arrayArsenalPlayers[index].achievement.goal
    
    document.getElementById('form-cleansheet').value=arrayArsenalPlayers[index].achievement.cleansheet
    
    document.getElementById('form-premierleague').value=arrayArsenalPlayers[index].achievement.title.premierLeague
    
    document.getElementById('form-facup').value=arrayArsenalPlayers[index].achievement.title.faCup


    document.querySelector('.form-container-input').setAttribute('onsubmit',"updatesButton(event)")

}



function displayData(){
    //=========================
    // ITERATE OVER ARRAY
    //=========================
    document.getElementById('tbody').innerHTML=""
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
                tBodyRow.insertCell().innerHTML=item.no
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
}



function submitButton(event){


    event.preventDefault()


    let name = document.getElementById('form-name').value
// let id = uuid.v4()
let no = document.getElementById('form-no').value
let indexPlayer= (arrayArsenalPlayers.length+1).toString().padStart(3,0)


 
    let age = document.getElementById('form-age').value
    let position = document.getElementById('form-position').value
    let assist = document.getElementById('form-assist').value
    let goal = document.getElementById('form-goal').value
    let cleansheet = document.getElementById('form-cleansheet').value
    let premierleague = document.getElementById('form-premierleague').value
    let facup = document.getElementById('form-facup').value
    let newDate = new Date
    let year = (newDate.getFullYear()).toString().substring(-2,0)
    let month = parseInt(newDate.getMonth()+1)
    let date = newDate.getDate()
    let hour = newDate.getHours()
    let min = newDate.getMinutes()
    let id = new Date().getDate().toString()+`${name.substring(0,3)}`+`${indexPlayer}`+no


    console.log(name,no,age,position,assist,goal,cleansheet,premierleague,facup);

    let createPlayer = new PlayerObject(id,no,name,age,position,assist,goal,premierleague,facup)

    
    arrayArsenalPlayers.push(createPlayer)

    console.log(arrayArsenalPlayers.at(-1));

    // console.log(indexPlayer)

    function getInitialName(name) {
        let fullNameSplit = name.split(/\s+/);
        let firstChar = fullNameSplit.map(init => init.charAt(0).toUpperCase());
        return firstChar.join('')
    }

// console.log(getInitialName(name));

    let uniqid = indexPlayer + `-` + getInitialName(name)+`-`+no+`-`+position+`-`+date+`-`+month+``+`-`+year
    console.log(uniqid)
    
//     new Date().getDate().toString()+`${name.substring(0,5).toUpperCase().trim()}`+`${indexPlayer}`+no + getInitialName(name)
// console.log(uniqid);

displayData()

    

    // console.log(document.getElementById('form-name'))

    
   
}


// Function to update table with a specific player's data
function updatePlayerInTable(updatedPlayer) {
  // Find the row corresponding to the updated player based on their "no" value
//   const playerRow = document.getElementById("tbody").querySelector(`tr[data-no="${updatedPlayer.no}"]`);
// 
//   // Update the cells in the row with the new player data
//   playerRow.cells[1].textContent = updatedPlayer.name;
//   playerRow.cells[2].textContent = updatedPlayer.age;
//   playerRow.cells[3].textContent = updatedPlayer.position;
//   playerRow.cells[4].textContent = updatedPlayer.achievement.assist;
//   playerRow.cells[5].textContent = updatedPlayer.achievement.goal;
//   playerRow.cells[6].textContent = updatedPlayer.achievement.cleansheet;
//   playerRow.cells[7].textContent = updatedPlayer.achievement.title.premierLeague;
//   playerRow.cells[8].textContent = updatedPlayer.achievement.title.faCup;
}


function updatesButton(e){

    e.preventDefault()

    
    const prevPlayerstates = JSON.parse(JSON.stringify(arrayArsenalPlayers));



    // Get the updated values from the form
    const id = document.getElementById('form-id').value;
    const updatedName = document.getElementById('form-name');
    const updatedNo = document.getElementById('form-no');
    const updatedAge = document.getElementById('form-age');
    const updatedPosition = document.getElementById('form-position');
    const updatedAssist = document.getElementById('form-assist');
    const updatedGoal = document.getElementById('form-goal');
    const updatedCleansheet = document.getElementById('form-cleansheet');
    const updatedPremierLeague = document.getElementById('form-premierleague');
    const updatedFaCup = document.getElementById('form-facup');


    //current input value
    const name = document.getElementById('form-name').value;
    const no = document.getElementById('form-no').value;
    const age = document.getElementById('form-age').value;
    const position = document.getElementById('form-position').value;
    const assist = document.getElementById('form-assist').value;
    const goal = document.getElementById('form-goal').value;
    const cleansheet = document.getElementById('form-cleansheet').value;
    const premierleague = document.getElementById('form-premierleague').value;
    const facup = document.getElementById('form-facup').value;








    
    //find player index
    let index = arrayArsenalPlayers.findIndex(player=>player.id==id)



    //new input value
    arrayArsenalPlayers[index].name = name
    arrayArsenalPlayers[index].no = no
    arrayArsenalPlayers[index].age = age
    arrayArsenalPlayers[index].position = position
    arrayArsenalPlayers[index].assist = assist
    arrayArsenalPlayers[index].goal = goal
    arrayArsenalPlayers[index].cleansheet = cleansheet
    arrayArsenalPlayers[index].premierLeague = premierleague
    arrayArsenalPlayers[index].cleansheet = cleansheet
    arrayArsenalPlayers[index].facup = facup



    console.log(arrayArsenalPlayers[index], "<-- newStates");

    if(JSON.stringify(prevPlayerstates)===JSON.stringify(arrayArsenalPlayers)){
        
        if(confirm('No Data Changed. Are you sure to continue?')){
            alert('Update canceled!');
        }
        
        else {
            return
        }
   
      

    } else{
        alert('Data Changed successfully!')
    } 
    
// 
// console.log(prevPlayerstates,'prevPlayerstates');
// console.log(arrayArsenalPlayers,'arrayArsenalPlayers');


    displayData()


    //clear input
    updatedName.value=""
    updatedNo.value=""
    updatedAge.value=""
    updatedPosition.value=""
    updatedAssist.value=""
    updatedGoal.value=""
    updatedCleansheet.value=""
    updatedPremierLeague.value=""
    updatedFaCup.value=""

    document.getElementById('edit-form').style.display="none"
    document.getElementById('submit-form').style.backgroundColor="#d20404"
    document.getElementById('submit-form').style.pointerEvents="auto"



    

    document.querySelector('.form-container-input').setAttribute('onsubmit',"submitButton(event)")



}





function tryMe(){

    let name = document.getElementById('form-name').value
    let no = document.getElementById('form-no').value
    let id = document.getElementById('form-id').value





  let index = arrayArsenalPlayers.findIndex(player=>player.id==id)

//   console.log(index,"id==>",id);

  arrayArsenalPlayers[index].name = name









  console.log(arrayArsenalPlayers);

  
    displayData()

 







}





