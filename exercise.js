let localStorageArsenaldb = JSON.parse(localStorage.getItem("playerDB"))
let isEdit = false
let isNewForm = false
let toggleForm = ""
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
    no: "41",
    name: "Declan Rice",
    age: 25,
    position: "MF",
    achievement: {
      assist: 11,
      goal: 5,
      title: {
        premierLeague: 0,
        faCup: 1,
      },
    },
    img: "/img/declanrice.jpg",
  },

  {
    id: 7,
    no: "18",
    name: "Takehiro Tomiyasu",
    age: 26,
    position: "R/C/LB",
    achievement: {
      assist: 3,
      goal: 1,
      title: {
        premierLeague: 0,
        faCup: 1,
      },
    },
    img: "/img/tomiyasu.jpg",
  },
]

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

//=========================
// FUNCTION BUTTON[EDIT]
//=========================
function editButton(id) {
  console.log("=======================")
  console.log("--- event BEHAVIOUR ---")
  console.log("=======================")
  toggleForm = ""
  isEdit = true
  toggleForm = "Edit"
  displayContainerInput()

  let index = arrayArsenalPlayers.findIndex((player) => player.id === id)
  console.log(`isEdit = ` + isEdit)
  console.log(`toggleForm = ` + toggleForm)
  console.log("Player Name = ", arrayArsenalPlayers[index].name)

  console.log("index = ", index)

  console.log("Player ID = ", id)

  console.log("=======================")
  //   console.log(arrayArsenalPlayers[index].id, " id")
  //
  //
  document.getElementById("form-facup").value = null

  //      Button-behaviour
  document.getElementById("submit-form").style.display = "none"
  document.getElementById("cancel-edit").style.display = "block"
  document.getElementById("edit-form").style.display = "block"

  //      Input Retrieved
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

  // document.getElementById("form-img").files[0].name = arrayArsenalPlayers[index].img

  document.getElementById("display-picture").style.display = "block"
  document.getElementById("display-picture").src = arrayArsenalPlayers[index].img
}

function displayData(filteredPlayer, id) {
  //=========================
  // ITERATE OVER ARRAY
  //=========================

  let inputValue = document.getElementById("search-player-input").value.toLowerCase()

  let displayedPlayer = filteredPlayer || arrayArsenalPlayers

  // console.log(displayedPlayer)
  document.getElementById("tbody").innerHTML = ""
  displayedPlayer.forEach((item, index) => {
    //create new Row
    const tBodySpace = document.getElementById("tbody")
    const tBodyRow = tBodySpace.insertRow()
    tBodyRow.setAttribute("class", "tbodys")

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

    tBodyRow.insertCell().innerHTML = `<span class="player-names"><strong>${item.name}</strong></span>`
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

    tBodyRow.insertCell().innerHTML = `<button id="button-edit" onclick="editButton(${item.id})">Edit</button>`

    tBodyRow.insertCell().innerHTML = `<a href="#" onclick="deleteButton(${item.id})"><strong>X</strong></a>`
  })
}

//==============================
//BUTTON SUBMIT
//==============================
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

  location.reload()
  alert("Player Added Successfully!")
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

//==============================
//BUTTON UPDATE
//==============================
function updatesButton(event) {
  event.preventDefault()

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

  let fileInput = document.getElementById("form-img")
  if (fileInput.files && fileInput.files[0]) {
    arrayArsenalPlayers[index].img = newUrl
  }

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

  location.reload()

  let formValue = document.getElementById("form-container-input")
  formValue.reset()

  // console.log(prevPlayerstates,'prevPlayerstates');
  // console.log(arrayArsenalPlayers,'arrayArsenalPlayers');
  // console.log(id,'player ID');
  displayData()

  //clear input
  //   updatedName.value = ""
  //   updatedNo.value = ""
  //   updatedAge.value = ""
  //   updatedPosition.value = ""
  //   updatedAssist.value = ""
  //   updatedGoal.value = ""
  //   updatedCleansheet.value = ""
  //   updatedPremierLeague.value = ""
  //   updatedFaCup.value = ""
  //   document.getElementById("form-img").value = ""
  document.getElementById("display-picture").style.display = "none"
  //
  document.getElementById("edit-form").style.display = "none"
  document.getElementById("submit-form").style.backgroundColor = "#d20404"
  document.getElementById("submit-form").style.pointerEvents = "auto"
  //
  document.getElementById("submit-form").style.display = "block"

  //
  document.querySelector(".form-container-input").setAttribute("onsubmit", "submitButton(event)")
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
    document.getElementById("display-picture").style.display = "block"
  }

  newFileReader.readAsDataURL(imgInput.files[0])

  //   }
}
//

// function onKeyEnter(event) {
let formInput = document.getElementById("form-container-input")
//   event.preventDefault()

formInput.addEventListener("keypress", function (event) {
  // event.preventDefault()

  if (event.key === "Enter") {
    if (isEdit === false) {
      console.log("ENTER PRESSED  (EDIT = FALSE)")
      submitButton(event)

      // formInput.setAttribute("onsubmit", submitButton)
    } else {
      console.log("ENTER PRESSED  (EDIT = TRUE)")

      updatesButton(event)
    }
    return false
  }
})

// }

function deleteButton(id) {
  let playerIndex = arrayArsenalPlayers.findIndex((player) => player.id === id)
  console.log("=======================")
  console.log("--- event BEHAVIOUR ---")
  console.log("=======================")
  console.log("index = ", playerIndex)
  console.log("id = ", id)
  console.log("name = ", arrayArsenalPlayers[playerIndex].name)
  console.log("=======================")
  console.table(arrayArsenalPlayers[playerIndex])

  if (confirm("Are you sure want to delete this player?")) {
    arrayArsenalPlayers.splice(playerIndex, 1)
    console.log(arrayArsenalPlayers)
    localStorage.setItem("playerDB", JSON.stringify(arrayArsenalPlayers))
    location.reload()

    displayData()
  }
  // event.preventDefault()
}

// document.querySelector(".form-container-input").addEventListener("keydown", onKeyEnter)

function cancelEdit() {
  alert("Player edit canceled!")
  location.reload()
}

let cancelEditDiv = document.getElementById("cancel-edit")
cancelEditDiv.addEventListener("click", cancelEdit)

function displayNewForm() {
  isEdit = false
  isNewForm = true
  toggleForm = "Submit"
  displayContainerInput()
}

function displayContainerInput() {
  if (toggleForm === "Submit") {
    document.getElementById("form-container-input").reset()
    //button display
    document.getElementById("submit-form").style.display = "block"
    document.getElementById("cancel-edit").style.display = "block"

    //   (document.getElementById("submit-form").style.display = "none"),
    document.getElementById("edit-form").style.display = "none"
    document.querySelector("#display-picture").src = ""

    document.getElementById("display-picture").style.display = "none"

    // document.getElementById("submit-form").style.display = "none"
    // console.log(arrayArsenalPlayers[index])

    if (document.getElementById("form-container-input").classList.contains("displayflex")) {
      // if (isNewForm) {
      //   document.getElementById("form-container-input").classList.toggle("displayflex")
      // } else if (isEdit) {
      //   console.log("is edit now!")
      // }
    } else {
      console.log("BELUM ADA DISPLAYFLEX")

      document.getElementById("form-container-input").classList.toggle("displayflex")
    }
  }

  if (toggleForm === "Edit") {
    if (document.getElementById("form-container-input").classList.contains("displayflex")) {
      // if (isEdit) {
      //   document.getElementById("form-container-input").classList.toggle("displayflex")
      // } else if (isNewForm) {
      //   console.log("is new form now!")
      // }
    } else {
      document.getElementById("form-container-input").classList.toggle("displayflex")
    }
  }

  // document.getElementById("form-container-input").setAttribute(".displayflex")
  // if (!document.getElementById("form-container-input").getAttribute(".displayflex")) {
  //   document.getElementById("form-container-input").classList.toggle("displayflex")
  // } else {
  //   location.reload()
  // }
}

function searchPlayerButton() {
  document.getElementById("div-search").classList.toggle("toggleSearch")
}

function searchPlayerInput() {
  let inputValue = document.getElementById("search-player-input").value.toLowerCase()
  console.log(`inputValue `, inputValue)

  filteredPlayer = arrayArsenalPlayers.filter((player) => player.name.toLowerCase().includes(inputValue))

  // let filteredPlayer = arrayArsenalPlayers.filter((player) => player.name === inputValue)
  console.log(`filteredPlayer`, filteredPlayer)
  displayData(filteredPlayer)
  // let filteredPlayer = arrayArsenalPlayers.filter((player) => player.name.toLowerCase().includes(inputValue))
}

//ADD EVENT LISTENER

document.getElementById("submit-form").addEventListener("click", submitButton)
document.getElementById("edit-form").addEventListener("click", updatesButton)
document.getElementById("add-new-player").addEventListener("click", displayNewForm)
document.getElementById("search-player-button").addEventListener("click", searchPlayerButton)
document.getElementById("search-player-input").addEventListener("input", searchPlayerInput)
