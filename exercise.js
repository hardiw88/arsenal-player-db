let localStorageArsenaldb = JSON.parse(localStorage.getItem("playerDB"))
let isEdit = false
let arrayArsenalPlayers = [
  {
    id: 1,
    no: "1",
    name: "David Raya",
    age: 25,
    position: "GK",
    achievement: {
      cleansheet: 6,
      assist: 3,
      title: {
        premierLeague: 0,
        faCup: 1,
      },
    },
    img: "/img/davidraya.jpg",
  },

  {
    id: 2,
    no: "2",
    name: "William Saliba",
    age: 23,
    position: "CB",
    achievement: {
      cleansheet: 7,
      assist: 1,
      goal: 3,
      title: {
        premierLeague: 0,
        faCup: 1,
      },
    },
    img: "/img/saliba.jpg",
  },

  {
    id: 3,
    no: "8",
    name: "Martin Ødegaard",
    age: 25,
    position: "MF",
    achievement: {
      assist: 5,
      goal: 8,
      title: {
        premierLeague: 0,
        faCup: 1,
      },
    },
    img: "/img/odegard.jpg",
  },
  {
    id: 4,
    no: "7",
    name: "Bukayo Saka",
    age: 23,
    position: "RM",
    achievement: {
      assist: 13,
      goal: 12,
      title: {
        premierLeague: 0,
        faCup: 1,
      },
    },
    img: "/img/saka.jpg",
  },
  {
    id: 5,
    no: "11",
    name: "Gabriel Martinelli",
    age: 25,
    position: "LM",
    achievement: {
      assist: 10,
      goal: 8,
      title: {
        premierLeague: 0,
        faCup: 1,
      },
    },
    img: "/img/martinelli.jpg",
  },

  {
    id: 6,
    no: "7",
    name: "Cristiano Ronaldo",
    age: 25,
    position: "AMF",
    achievement: {
      assist: 120,
      goal: 28,
      title: {
        premierLeague: 2,
        faCup: 3,
      },
    },
    img: "data:image/jpeg;base64,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",
  },
]

// if (!localStorageArsenaldb) {
//   arrayArsenalPlayers = arrayArsenalPlayers
//   console.log(`arrayArsenalPlayers = arrayArsenalPlayers`, arrayArsenalPlayers)
// } else {
//   arrayArsenalPlayers = localStorageArsenaldb
//   console.log(`arrayArsenalPlayers = localStorageArsenaldb`, localStorageArsenaldb)
// }

if (localStorageArsenaldb) {
  arrayArsenalPlayers = localStorageArsenaldb

  console.log(`arrayArsenalPlayers = localStorageArsenaldb`, localStorageArsenaldb)
} else {
  localStorageArsenaldb = arrayArsenalPlayers

  console.log(`arrayArsenalPlayers = arrayArsenalPlayers`, arrayArsenalPlayers)
}

function PlayerObject(id, no, name, age, position, assist, goal, premierLeague, faCup) {
  this.id = id
  this.name = name
  this.no = no
  this.img = ""

  this.age = age
  this.position = position
  this.achievement = {
    assist: assist,
    goal: goal,
    title: {
      premierLeague: premierLeague,
      faCup: faCup,
    },
  }
}

//variables
let arrayArsenalPlayersUpdated

let imgInput = document.getElementById("form-img")

let newUrl = ""

//if there is update, arrayArsenalPlayer = newDatabase

//=========================
// FUNCTION BUTTON[EDIT]
//=========================
function editButton(index, no) {
  isEdit = true
  console.log(`isEdit=` + isEdit)
  document.getElementById("form-facup").value = null
  //   let submitType = document.querySelector(".form-container-input")
  //
  //   submitType.setAttribute("onsubmit", "updatesButton(event)")
  //
  //   console.log(submitType.getAttribute("onsubmit"))

  let formContainerInput = document.querySelector(".form-container-input")
  // formContainerInput.classList.toggle("hidedisplay")

  //   let changeLabel = document.getElementById("submit-form")
  //   changeLabel.setAttribute("class", "hidedisplay")
  //   changeLabel.setAttribute("class", "disabled")

  ;(document.getElementById("submit-form").style.backgroundColor = "#dfd9d9"),
    //   (document.getElementById("submit-form").style.display = "none"),
    (document.getElementById("edit-form").style.display = "block"),
    document.getElementById("submit-form").remove(),
    console.log(arrayArsenalPlayers[index])

  document.getElementById("form-id").value = arrayArsenalPlayers[index].id

  document.getElementById("form-name").value = arrayArsenalPlayers[index].name

  document.getElementById("form-no").value = arrayArsenalPlayers[index].no

  document.getElementById("form-age").value = arrayArsenalPlayers[index].age

  document.getElementById("form-position").value = arrayArsenalPlayers[index].position

  document.getElementById("form-assist").value = arrayArsenalPlayers[index].achievement.assist

  document.getElementById("form-goal").value = arrayArsenalPlayers[index].achievement.goal

  document.getElementById("form-cleansheet").value = arrayArsenalPlayers[index].achievement.cleansheet

  document.getElementById("form-premierleague").value = arrayArsenalPlayers[index].achievement.title.premierLeague

  document.getElementById("form-facup").value = arrayArsenalPlayers[index].achievement.title.faCup

  document.getElementById("display-picture").style.display = "block"
  document.getElementById("display-picture").src = arrayArsenalPlayers[index].img

  //   imgInput.value = 123

  console.log(arrayArsenalPlayers[index].img)

  //   let newPlayerData = {
  //     name: (document.getElementById("form-img").files[0] = arrayArsenalPlayers[index].img),
  //   }
  //
  //   console.log(`newPlayerData`, newPlayerData)
  //   let imgDiv = document.querySelector(".form-img")
  //
  //   if (imgDiv.files && img.files[0]) {
  //     document.getElementById("form-img").files[0] = arrayArsenalPlayers[index].img
  //     console.log("there is file uploaded!")
  //   } else {
  //     console.log("no file uploaded")
  //   }
}

// function displayData(){
//     //=========================
//     // ITERATE OVER ARRAY
//     //=========================
//     document.getElementById('tbody').innerHTML=""
//         arrayArsenalPlayers.forEach((item,index)=>{
//
//
//
//             //create new Row
//             const tBodySpace = document.getElementById('tbody')
//             const tBodyRow = tBodySpace.insertRow()
//
//
//             //try check
//             if(!item.achievement.goal){
//                 item.achievement.goal="N/A"
//             }
//
//             if(!item.achievement.assist){
//                 item.achievement.assist="N/A"
//             }
//
//             if(!item.achievement.cleansheet){
//                 item.achievement.cleansheet="N/A"
//             }
//
//             if(!item.achievement.title.premierLeague){
//                 item.achievement.title.premierLeague="N/A"
//             }
//
//             if(!item.achievement.title.faCup){
//                 item.achievement.title.faCup="N/A"
//             }
//
//                 //insert Cell
//                 tBodyRow.insertCell().innerHTML=item.no
//                 tBodyRow.insertCell(1).innerHTML=item.name
//                 tBodyRow.insertCell(2).innerHTML=item.age
//                 tBodyRow.insertCell(3).innerHTML=item.position
//                 tBodyRow.insertCell(4).innerHTML=item.achievement.assist
//                 tBodyRow.insertCell(5).innerHTML=item.achievement.goal
//                 tBodyRow.insertCell(6).innerHTML=item.achievement.cleansheet
//                 tBodyRow.insertCell(7).innerHTML=item.achievement.title.premierLeague
//                 tBodyRow.insertCell(8).innerHTML=item.achievement.title.faCup
//                 tBodyRow.insertCell(9).innerHTML=`<button onclick="editButton(${index})">Edit</button>`
//                 tBodyRow.insertCell(10).innerHTML=`x`
//
//
//
//         })
// }

function displayData(e) {
  //=========================
  // ITERATE OVER ARRAY
  //=========================

  document.getElementById("tbody").innerHTML = ""
  arrayArsenalPlayers.forEach((item, index) => {
    //create new Row
    const tBodySpace = document.getElementById("tbody")
    const tBodyRow = tBodySpace.insertRow()

    //insert Cell
    tBodyRow.insertCell().innerHTML = item.no

    if (!item.img) {
      item.img = 0
      tBodyRow.insertCell().innerHTML = `<center>
                <img src="/img/anonym.png" class="player-img"/>
                </center>`
    } else {
      tBodyRow.insertCell().innerHTML = `
                <center><img src="${item.img}" class="player-img"/></center>`
    }

    tBodyRow.insertCell().innerHTML = item.name
    tBodyRow.insertCell().innerHTML = item.age
    tBodyRow.insertCell().innerHTML = item.position

    //try check

    if (!item.achievement.assist) {
      item.achievement.assist = 0
      tBodyRow.insertCell().innerHTML = "N/A"
    } else {
      tBodyRow.insertCell().innerHTML = item.achievement.assist
    }

    if (!item.achievement.goal) {
      item.achievement.goal = 0

      tBodyRow.insertCell().innerHTML = "N/A"
    } else {
      tBodyRow.insertCell().innerHTML = item.achievement.goal
    }

    if (!item.achievement.cleansheet) {
      item.achievement.cleansheet = 0
      tBodyRow.insertCell().innerHTML = "N/A"
    } else {
      tBodyRow.insertCell().innerHTML = item.achievement.cleansheet
    }

    if (!item.achievement.title.premierLeague) {
      item.achievement.title.premierLeague = 0
      tBodyRow.insertCell().innerHTML = "N/A"
    } else {
      tBodyRow.insertCell().innerHTML = item.achievement.title.premierLeague
    }

    if (!item.achievement.title.faCup) {
      item.achievement.title.faCup = 0
      tBodyRow.insertCell().innerHTML = "N/A"
    } else {
      tBodyRow.insertCell().innerHTML = item.achievement.title.faCup
    }

    tBodyRow.insertCell().innerHTML = `<button onclick="editButton(${index})">Edit</button>`
    tBodyRow.insertCell().innerHTML = `x`
  })
}

//button-submit
function submitButton(event) {
  //   event.preventDefault()

  //all the variables
  let name = document.getElementById("form-name").value
  let no = document.getElementById("form-no").value
  let indexPlayer = (arrayArsenalPlayers.length + 1).toString().padStart(3, 0)
  let age = parseInt(document.getElementById("form-age").value)
  let position = document.getElementById("form-position").value
  let assist = parseInt(document.getElementById("form-assist").value)
  let goal = parseInt(document.getElementById("form-goal").value)
  let cleansheet = parseInt(document.getElementById("form-cleansheet").value)
  let premierleague = parseInt(document.getElementById("form-premierleague").value)
  let facup = parseInt(document.getElementById("form-facup").value)
  let newDate = new Date()
  let year = newDate.getFullYear().toString().substring(2)
  let month = (newDate.getMonth() + 1).toString().padStart(2, 0)
  let date = newDate.getDate()
  let hour = newDate.getHours()
  let min = newDate.getMinutes()
  let id = new Date().getDate().toString() + `${name.substring(0, 3)}` + `${indexPlayer}` + no
  let uniqid = indexPlayer + `-` + getInitialName(name) + no + position + date + month + `` + year

  function getInitialName(name) {
    let fullNameSplit = name.split(/\s+/)
    let firstChar = fullNameSplit.map((init) => init.charAt(0).toUpperCase())
    return firstChar.join("")
  }

  if (!name) {
    alert("Please fill the player name!")
    return
  }

  if (!no) {
    alert("Please fill the player no!")
    return
  }

  if (!age) {
    alert("Please fill the player age!")
    return
  }

  if (!position) {
    alert("Please fill the player position!")

    return
  }

  //
  //     console.log(name,no,age,position,assist,goal,cleansheet,premierleague,facup);

  //   let imgDiv = document.querySelector(".form-img")
  //   if (imgDiv.files && imgDiv.files[0]) {
  //     let fileReader = new FileReader()
  //
  //     fileReader.onload = function (e) {
  //       let imgOfUrl = e.target.result
  //       img += imgOfUrl
  //       console.log(imgOfUrl, "imgOfUrl")
  //       console.log(img, "img")
  //     }
  //
  //     fileReader.readAsDataURL(imgDiv.files[0])
  //   }

  //   let imgInput1 = document.getElementById("form-img")
  //   let imgInput2 = document.getElementById("form-img2")
  //
  //   imgInput2.onchange(function () {
  //     if (imgInput2.files && imgInput2.files[0]) {
  //       let newFileReader = new FileReader()
  //
  //       newFileReader.onload = function (e) {
  //         let newImgUrl = e.target.result
  //         imgInput2.src = newImgUrl
  //         console.log(newImage)
  //       }
  //
  //       newFileReader.readAsDataURL(imgInput2.files[0])
  //     }
  //   })

  let createPlayer = new PlayerObject(uniqid, no, name, age, position, assist, goal, cleansheet, premierleague, facup)
  createPlayer.img = newUrl

  arrayArsenalPlayers.push(createPlayer)

  localStorage.setItem("playerDB", JSON.stringify(arrayArsenalPlayers))

  console.log(arrayArsenalPlayers.at(-1))

  console.log(arrayArsenalPlayers)

  //   console.log(createPlayer, "images")

  // console.log(indexPlayer)

  //clear input
  document.getElementById("form-name").value = ""
  document.getElementById("form-name").value = ""
  document.getElementById("form-no").value = ""
  document.getElementById("form-age").value = ""
  document.getElementById("form-position").value = ""
  document.getElementById("form-assist").value = ""
  document.getElementById("form-goal").value = ""
  document.getElementById("form-cleansheet").value = ""
  document.getElementById("form-premierleague").value = ""
  document.getElementById("form-facup").value = ""
  imgInput.value = ""

  displayData()

  //ALL THE CONSOLE LOG

  // console.log(uniqid)
  // console.log(getInitialName(name));

  // let uniqid = indexPlayer + `-` + getInitialName(name)+`-`+no+`-`+position+`-`+date+`-`+month+``+`-`+year
  // console.log(uniqid)

  //     new Date().getDate().toString()+`${name.substring(0,5).toUpperCase().trim()}`+`${indexPlayer}`+no + getInitialName(name)
  // console.log(uniqid);

  // console.log(document.getElementById('form-name'))
  isEdit = false
}

//BUTTON-UPDATE
function updatesButton(e) {
  e.preventDefault()

  const prevPlayerstates = JSON.parse(JSON.stringify(arrayArsenalPlayers))

  // Get the updated values from the form TO CLEAR FORM
  const id = document.getElementById("form-id").value
  const updatedName = document.getElementById("form-name")
  const updatedNo = document.getElementById("form-no")
  const updatedAge = document.getElementById("form-age")
  const updatedPosition = document.getElementById("form-position")
  const updatedAssist = document.getElementById("form-assist")
  const updatedGoal = document.getElementById("form-goal")
  const updatedCleansheet = document.getElementById("form-cleansheet")
  const updatedPremierLeague = document.getElementById("form-premierleague")
  const updatedFaCup = document.getElementById("form-facup")

  //current input value
  const name = document.getElementById("form-name").value
  const no = document.getElementById("form-no").value
  const age = parseInt(document.getElementById("form-age").value)
  const position = document.getElementById("form-position").value
  const assist = parseInt(document.getElementById("form-assist").value)
  const goal = parseInt(document.getElementById("form-goal").value)
  const cleansheet = parseInt(document.getElementById("form-cleansheet").value)
  const premierleague = parseInt(document.getElementById("form-premierleague").value)
  const facup = parseInt(document.getElementById("form-facup").value)

  //find player index
  let index = arrayArsenalPlayers.findIndex((player) => player.id == id)

  //new input value
  arrayArsenalPlayers[index].name = name
  arrayArsenalPlayers[index].no = no
  arrayArsenalPlayers[index].age = age
  arrayArsenalPlayers[index].position = position
  arrayArsenalPlayers[index].achievement.assist = assist
  arrayArsenalPlayers[index].achievement.goal = goal
  arrayArsenalPlayers[index].achievement.cleansheet = cleansheet
  arrayArsenalPlayers[index].achievement.title.premierLeague = premierleague
  arrayArsenalPlayers[index].achievement.title.faCup = facup
  arrayArsenalPlayers[index].img = newUrl

  console.log(arrayArsenalPlayers[index])

  //   let prevPlayerstatesStringify = JSON.stringify(prevPlayerstates)
  //   let arrayArsenalPlayersStringify = JSON.stringify(arrayArsenalPlayers)

  console.log(arrayArsenalPlayers[index], "<-- newStates")
  //     function isTheStatesSame(prev,newStatess){
  //
  //         if(Object.values(prev)==Object.values(prev)){
  //             console.log(Object.values(prev));
  //             console.log(Object.values(prev));
  //
  //             return 'SAME'
  //
  //         }
  //         console.log(Object.values(prev));
  //         console.log(Object.values(prev));
  //         return "NOT SAME"
  //
  //
  //     }
  // console.log(isTheStatesSame(prevPlayerstatesStringify,arrayArsenalPlayersStringify))

  console.log(prevPlayerstates[index])

  console.log(arrayArsenalPlayers[index])

  //
  // if(arrayArsenalPlayers[index]===prevPlayerstates[index])

  if (JSON.stringify(prevPlayerstates[index]) === JSON.stringify(arrayArsenalPlayers[index])) {
    //
    //     if(JSON.stringify(arrayArsenalPlayers[index])==JSON.stringify(prevPlayerstates[index])){
    //
    if (confirm("No Data Changed. Are you sure to continue?")) {
      alert("Data not changed!")
      // console.log(Object.values(prevPlayerstates[index]));
      // console.log(Object.values(arrayArsenalPlayers[index]));
      console.log("data same")
    } else {
      // console.log(Object.values(prevPlayerstates[index]));
      // console.log(Object.values(arrayArsenalPlayers[index]));
      console.log(" same canceled")

      return
    }
  } else {
    localStorage.setItem("playerDB", JSON.stringify(arrayArsenalPlayers))
    alert("Data changed successfully!")
    console.log(JSON.stringify(prevPlayerstates[index]))

    console.log(JSON.stringify(arrayArsenalPlayers[index]))
  }

  //
  // console.log(prevPlayerstates,'prevPlayerstates');
  // console.log(arrayArsenalPlayers,'arrayArsenalPlayers');
  // console.log(id,'player ID');

  displayData()

  //clear input
  updatedName.value = ""
  updatedNo.value = ""
  updatedAge.value = ""
  updatedPosition.value = ""
  updatedAssist.value = ""
  updatedGoal.value = ""
  updatedCleansheet.value = ""
  updatedPremierLeague.value = ""
  updatedFaCup.value = ""
  document.getElementById("form-img").value = ""

  document.getElementById("edit-form").style.display = "none"
  document.getElementById("submit-form").style.backgroundColor = "#d20404"
  document.getElementById("submit-form").style.pointerEvents = "auto"
  //
  //   document.querySelector(".form-container-input").setAttribute("onsubmit", "submitButton(event)")

  location.reload()
}

// function updatesButton(e){
//
//     e.preventDefault()
//
//
//     const prevPlayerstates = JSON.parse(JSON.stringify(arrayArsenalPlayers));
//
//
//
//     // Get the updated values from the form
//     const id = document.getElementById('form-id').value;
//     const updatedName = document.getElementById('form-name');
//     const updatedNo = document.getElementById('form-no');
//     const updatedAge = document.getElementById('form-age');
//     const updatedPosition = document.getElementById('form-position');
//     const updatedAssist = document.getElementById('form-assist');
//     const updatedGoal = document.getElementById('form-goal');
//     const updatedCleansheet = document.getElementById('form-cleansheet');
//     const updatedPremierLeague = document.getElementById('form-premierleague');
//     const updatedFaCup = document.getElementById('form-facup');
//
//
//     //current input value
//     const name = document.getElementById('form-name').value;
//     const no = document.getElementById('form-no').value;
//     const age = document.getElementById('form-age').value;
//     const position = document.getElementById('form-position').value;
//     const assist = document.getElementById('form-assist').value;
//     const goal = document.getElementById('form-goal').value;
//     const cleansheet = document.getElementById('form-cleansheet').value;
//     const premierleague = document.getElementById('form-premierleague').value;
//     const facup = document.getElementById('form-facup').value;
//
//
//
//
//
//
//
//
//
//     //find player index
//     let index = arrayArsenalPlayers.findIndex(player=>player.id==id)
//
//
//
//     //new input value
//     arrayArsenalPlayers[index].name = name
//     arrayArsenalPlayers[index].no = no
//     arrayArsenalPlayers[index].age = age
//     arrayArsenalPlayers[index].position = position
//     arrayArsenalPlayers[index].achievement.assist = assist
//     arrayArsenalPlayers[index].achievement.goal = goal
//     arrayArsenalPlayers[index].achievement.cleansheet = cleansheet
//     arrayArsenalPlayers[index].achievement.title.premierLeague = premierleague
//     arrayArsenalPlayers[index].achievement.title.faCup = facup
//
//     let prevPlayerstatesStringify = JSON.stringify(prevPlayerstates)
//     let arrayArsenalPlayersStringify = JSON.stringify(arrayArsenalPlayers)
//
//     // console.log(arrayArsenalPlayers[index], "<-- newStates");
// //     function isTheStatesSame(prev,newStatess){
// //
// //         if(prev===newStatess){
// //             return 'SAME'
// //         }
// //
// //         return "NOT SAME"
// //
// //
// //     }
// //     console.log(isTheStatesSame(prevPlayerstatesStringify,arrayArsenalPlayersStringify))
// //
// //     console.log(prevPlayerstatesStringify.trim());
// //
// //     console.log(arrayArsenalPlayersStringify.trim());
//
//
//
//     if(prevPlayerstatesStringify===arrayArsenalPlayersStringify){
//
//         if(confirm('No Data Changed. Are you sure to continue?')){
//             alert('Update canceled!');
//         }
//
//         else {
//             return
//         }
//
//
//
//     } else{
//         alert('Data Changed successfully!')
//     }
//
//
//
// //
// // console.log(prevPlayerstates,'prevPlayerstates');
// // console.log(arrayArsenalPlayers,'arrayArsenalPlayers');
// // console.log(id,'player ID');
//
//
//
//
//     displayData()
//
//
//     //clear input
//     updatedName.value=""
//     updatedNo.value=""
//     updatedAge.value=""
//     updatedPosition.value=""
//     updatedAssist.value=""
//     updatedGoal.value=""
//     updatedCleansheet.value=""
//     updatedPremierLeague.value=""
//     updatedFaCup.value=""
//
//     document.getElementById('edit-form').style.display="none"
//     document.getElementById('submit-form').style.backgroundColor="#d20404"
//     document.getElementById('submit-form').style.pointerEvents="auto"
//
//
//
//
//
//     document.querySelector('.form-container-input').setAttribute('onsubmit',"submitButton(event)")
//
//
//
// }

function tryMe(es) {
  //   tryMe(event)
  //   let imgDiv = document.querySelector(".form-img")
  //   if (imgDiv.files && imgDiv.files[0]) {
  //     let fileReader = new FileReader()
  //
  //     fileReader.onload = function (e) {
  //       let imgOfUrl = e.target
  //       console.log(imgOfUrl)
  //     }
  //
  //     fileReader.readAsDataURL(imgDiv.files[0])
  //   }
  //   let img = document.getElementById("form-img")
  //   let displayPicture = document.querySelector(".display-picture")
  //
  //   if (img.files && img.files[0]) {
  //     console.log("there is file uploaded")
  //     let fileReader = new FileReader()
  //     fileReader.onload = function (e) {
  //       let imageUrl = e.target.result
  //       console.log("Image URL:", imageUrl)
  //     }
  //     fileReader.readAsDataURL(img.files[0])
  //   } else {
  //     console.log("no files uploaded")
  //   }
  //
  //             var fileReader = new FileReader()
  //
  //             fileReader.onload(function(e){
  //                 e.preventDefault()
  //                 let imgUrl = e.target.result
  //                 console.log(imgUrl);
  //             })
  //         }
  //   console.log(es.target)
  //     if(img.files[0]&&img.files){
  //         let imgFiles = img.files[0]
  //         let imgUrl = URL.createObjectURL(imgFiles)
  //         displayPicture.src=imgUrl
  // console.log(imgUrl);
  // console.log(imgFiles);
  //
  //
  //
  //   let imgInput = document.getElementById("form-img")
  //
  //   function getImgUrl(newImgUrl) {
  //     let blankUrl = ""
  //
  //     if (imgInput.files && imgInput.files[0]) {
  //       let newFileReader = new FileReader()
  //
  //       newFileReader.onload = function (e) {
  //         let newImgUrl = e.target.result
  //         blankUrl += newImgUrl
  //         console.log(blankUrl)
  //       }
  //
  //       newFileReader.readAsDataURL(imgInput.files[0])
  //     }
  //   }
  //
  //   getImgUrl(newImgUrl)
  //   let imgInput1 = document.getElementById("form-img")
  //   let imgInput2 = document.getElementById("form-img2")
  //
  //   imgInput2.onchange(function () {
  //     let newImage = new Image()
  //
  //     if (imgInput2.files && imgInput2.files[0]) {
  //       let newFileReader = new FileReader()
  //
  //       newFileReader.onload = function (e) {
  //         let newImgUrl = e.target.result
  //         newImage.src = newImgUrl
  //         console.log(newImage, "newImage")
  //         console.log(newImgUrl, "newImgUrl")
  //       }
  //
  //       let abc = newFileReader.readAsDataURL(imgInput2.files[0])
  //       console.log("abc", abc)
  //     }
  //   })
}
document.getElementById("form-img").value = ""

// console.log("newUrl", newUrl)
imgInput.onchange = function (e) {
  console.log("e = ", e.target.files[0].name)
  imgInput.src = ""

  //   if (imgInput.files && imgInput.files[0]) {
  let newFileReader = new FileReader()

  newFileReader.onload = function (e) {
    let newImgUrl = e.target.result
    newUrl += newImgUrl
    imgInput.src = newImgUrl
    //   console.log(imgInput, "imgInput")
    //   console.log(newImgUrl, "newImgUrl")
    document.getElementById("display-picture").src = newUrl
  }

  newFileReader.readAsDataURL(imgInput.files[0])

  //   }
}
//

function onKeyEnter(event) {
  event.preventDefault()
  let formInput = document.getElementById("form-container-input")
  //   event.preventDefault()
  if (event.key === "Enter") {
    if (isEdit === false) {
      console.log("ENTER PRESSED  (EDIT = FALSE)")

      formInput.setAttribute("onsubmit", submitButton)
    } else {
      console.log("ENTER PRESSED  (EDIT = TRUE)")

      formInput.setAttribute("onsubmit", updatesButton())
    }
    return false
  }
}

// document.querySelector(".form-container-input").addEventListener("keydown", onKeyEnter)

document.getElementById("submit-form").addEventListener("click", submitButton)
document.getElementById("edit-form").addEventListener("click", updatesButton)
