const sayHi=()=>{
    alert('Hi')
}



// 
// const newMahasiswa = (name,age)=>{
// return {name,age} //need to put {} to return object
// }
// console.log(newMahasiswa('Budi',31));


// function newMahasiswa(name,age){
//     return {name,age}
// }


// function Mahasiswa(name,age){
// this.name=name;
// this.age=age
// }
// 
// let newMahasiswa = new Mahasiswa()
// 
// newMahasiswa=(name,age)=>{
//     return {name,age}
// }
// let budi = newMahasiswa('Budi',31)
// let andi = newMahasiswa('Andi',18)
// 
// let arrayMahasiswa = []
// arrayMahasiswa.push(budi)
// arrayMahasiswa.push(andi)
// 
// 
// 
// console.log(arrayMahasiswa);

// arrayMahasiswa.push(newMahasiswa('Andi',30))
// arrayMahasiswa.push(newMahasiswa('Rudi',35))
// arrayMahasiswa.push(newMahasiswa('Edi',37))
// arrayMahasiswa.push(newMahasiswa('Suhardi',32))
// console.log(arrayMahasiswa);
// 
// //selector
// let divContent = document.querySelector('.content')
// 
// //make table
// let createTable = document.createElement('table')
// let tableDiv = divContent.appendChild(createTable)
// 
// let createThead = document.createElement('tHead')
// let tHead = tableDiv.appendChild(createThead)
// 
// let createTbody = document.createElement('tBody')
// let tBody = tableDiv.appendChild(createTbody)
// 
// let arrayObjectMahasiswa = Array.of(Object.values(arrayMahasiswa))
// // console.log(arrayObjectMahasiswa);
// 
// let tHeadRow = tHead.insertRow()
// tHeadRow.insertCell().innerHTML="Name"
// tHeadRow.insertCell().innerHTML="Age"
// 
// 
// 
// arrayMahasiswa.forEach((item,index)=>{
// 
// 
// 
// 
// 
// let tBodyRow = tBody.insertRow()
// tBodyRow.insertCell().innerHTML = item.name
// tBodyRow.insertCell().innerHTML = item.age
// 
// 
// })



// divContent.innerHTML=createTable
// 
// //make row

// 
// //insert cell
// let createCell = document.createElement('td')


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
        tBodyRow.insertCell().innerHTML=item.name
        tBodyRow.insertCell().innerHTML=item.age
        tBodyRow.insertCell().innerHTML=item.position
        tBodyRow.insertCell().innerHTML=item.achievement.assist
        tBodyRow.insertCell().innerHTML=item.achievement.goal
        tBodyRow.insertCell().innerHTML=item.achievement.cleansheet
        tBodyRow.insertCell().innerHTML=item.achievement.title.premierLeague
        tBodyRow.insertCell().innerHTML=item.achievement.title.faCup

        
        
        // `
        //     <ul>
        //         <li>${Object.keys(item.achievement.title)[0]} : ${item.achievement.title.premierLeague}</li>
        //         <li>${Object.keys(item.achievement.title)[1]}${item.achievement.title.faCup}</li>
        //     <ul>
        // `




//         const ulTitle = document.createElement('ul')
//         const ulTitle2= tBodyRow.insertCell().appendChild(ulTitle)
// 
//         const liTitle = document.createElement('li')
//         ulTitle2.appendChild(liTitle)
// 
// 
//         ulTitle.innerHTML=`
//         <ul>
//             <li>${Object.entries(item.achievement.title)}</li>
//         </ul>
//         `
// 
//         
//         tBodyRow.insertCell().innerHTML=`
//         <ul>
//             <li>${Object.entries(item.achievement.title)}</li>
//         </ul>
//         `



    





    


})











// 




