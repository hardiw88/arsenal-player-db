

const arrayArsenalPlayers = [
    {
        no:"1",
        name:"David Raya",
        age:25,
        position:"GK",
        achievement:{
            cleansheet:10,
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
            cleansheet:10,
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

function editButton(index){
    let formContainerInput = document.querySelector('.form-container-input')
    // formContainerInput.classList.toggle("hidedisplay")

    let changeLabel = document.getElementById('submit-form')
    changeLabel.innerText="UPDATE DATABASE"

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
    alert('hi')
}








// 




