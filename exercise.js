

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
}



function submitButton(){
   
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

    
    let prevPlayerstates = arrayArsenalPlayers.map(player=>player)

    let blankArray= []
    blankArray.push(prevPlayerstates)

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


    //input value
    const name = document.getElementById('form-name').value;






    
    //find player index
    let index = arrayArsenalPlayers.findIndex(player=>player.id==id)



    //   console.log(index,"id==>",id);
    arrayArsenalPlayers[index].name = name
    console.log(arrayArsenalPlayers[index], "<-- newStates");

//     if(prevPlayerstates==arrayArsenalPlayers){
//         console.log('data Not Changed!');
// 
//     } else{
//         console.log('Data Changed!')
//     } 
//     

console.log(prevPlayerstates);
console.log(arrayArsenalPlayers);
console.log(blankArray);


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





