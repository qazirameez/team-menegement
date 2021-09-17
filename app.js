saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))

}


getData = (key) => {
    JSON.parse(localStorage.getItem(key))
}


error = (error) => {
    alert(error)
}


let getItem = JSON.parse(localStorage.getItem("users"))
let users = []



signup = () => {


    let formValid = true



    let fname = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value



    //
    if (fname === "") {
        formValid = false;
        error("Enter Name")
        return formValid;
    } else if (email === "") {
        formValid = false;
        error("Enter Email")
        return formValid;
    } else if (password === "") {
        formValid = false;
        error("Enter Email",)
        return formValid;
    }




    ////
    if (getItem === null) {

        let user = { fname, email, password }

        //
        if (getItem === null) {
            users = [];
        } else {
            let getArry = localStorage.getItem("users")
            users = JSON.parse(getArry)
        }




        users.push(user)

        saveData("users", users)

    } else {

        let findName
        findName = getItem.map(nm => nm.fname).find(findNameFunc)

        function findNameFunc(nm) {
            return nm === fname
        }


        //
        let findEmail
        findEmail = getItem.map(eml => eml.email).find(findEmailFunc)

        function findEmailFunc(eml) {
            return eml === email
        }




        //
        if (fname === findName) {
            formValid = false;
            error("Name Already")
            return formValid;

        } else if (email === findEmail) {
            formValid = false;
            error("Email Already")
            return formValid;
        }


    }




    let user = { fname, email, password }

    //
    if (getItem === null) {
        users = [];
    } else {
        let getArry = localStorage.getItem("users")
        users = JSON.parse(getArry)
    }



    users.push(user)

    saveData("users", users)

    window.location.href = "index2.html"
}


////
loginbBtn = () => {
    window.location.href = "index2.html"

}





let activePerson = JSON.parse(localStorage.getItem("active"))
////
login = () => {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value


    //
    let findEmail
    findEmail = getItem.map(eml => eml.email).find(findEmailFunc)

    function findEmailFunc(eml) {
        return eml === email
    }

    let findEmailIndex
    findEmailIndex = getItem.map(emal => emal.email).findIndex(findEmailIndexFunc)
    function findEmailIndexFunc(emal) {
        return emal === email
    }


    //
    let findPassword
    findPassword = getItem.map(pass => pass.password).find(findPasswordFunc)

    function findPasswordFunc(pass) {
        return pass === password
    }



    //
    if (findPassword === password && findEmail === email) {
        window.location.href = "index3.html"
        let active = { aName: getItem[findEmailIndex].fname, aEmail: findEmail, password: findPassword }
        saveData("active", active)
    } else {
        alert("Please Signup")
        window.location.href = "index.html"
    }
}

////
teamCreate = () => {
    createDiv.setAttribute("class", "create-team-display-show")
}



////
let myTeamArry = JSON.parse(localStorage.getItem(activePerson.aName))
let findMyTeamName





/////
teamCreateFunc = () => {
    if (myTeamArry === null) {


    }
    else if (myTeamArry[0].admin === activePerson.aName) {

        for (let i = 0; i < myTeamArry.length; i++) {
            
            
        
        let ownTeamsMainDiv = document.getElementById("ownTeamsMainDiv")
        let ownTeamsMainDiv1 = document.createElement("div")
        ownTeamsMainDiv.appendChild(ownTeamsMainDiv1)
        ownTeamsMainDiv1.setAttribute("class", "own-teams")

        let ownTeams1 = document.createElement("p")
        ownTeams1.setAttribute("class", "own-teams1")
        let ownTeams1Text = document.createTextNode(myTeamArry[i].teamName)
        ownTeams1.appendChild(ownTeams1Text)
        ownTeamsMainDiv1.appendChild(ownTeams1)

        for (let j = 0; j < myTeamArry.length; j++) {
            

        let ownTeams2 = document.createElement("p")
        ownTeams2.setAttribute("class", "own-teams2")
        let ownTeams2Text = document.createTextNode(myTeamArry[j].teamMember + ", ")
        ownTeams2.appendChild(ownTeams2Text)
        // ownTeamsMainDiv1.appendChild(ownTeams1)
        ownTeamsMainDiv1.appendChild(ownTeams2)

}
    
    }

    }


}
teamCreateFunc()

clearInput = () => {
    let teamNameClear = document.getElementById("teamName")
    teamNameClear.value = "";
}


////
let myTeam = []
createBtn = () => {
    let formValid = true

    let ctr = document.getElementById("ctr").value


    let teamName = document.getElementById("teamName").value
    let teamEmail = document.getElementById("teamEmail").value




    if (myTeamArry === null) {
        console.log("");
    } else {
        findMyTeamName = myTeamArry.map(nam => nam.teamName).find(findMyTeamNameFunc)
        function findMyTeamNameFunc(nam) {
            return nam === teamName
        }
    }


    ////
    if (teamName === "") {
        formValid = false;
        error("Enter Team Name")
        return formValid;
    } else if (teamEmail === "") {
        formValid = false;
        error("Enter Team Email")
        return formValid;
    }


    ////
    let findTeamEmail
    findTeamEmail = getItem.map(emal => emal.email).find(findTeamEmailFunc)
    function findTeamEmailFunc(emal) {
        return emal === teamEmail
    }


    ////
    let findTeamEmailIndex
    findTeamEmailIndex = getItem.map(emal => emal.email).findIndex(findTeamEmailIndexFunc)
    function findTeamEmailIndexFunc(emal) {
        return emal === teamEmail
    }



    ////
    if (myTeamArry === null) {
        myTeam = [];
    } else {
        let getmyTeamArry = JSON.parse(localStorage.getItem(activePerson.aName))
        myTeam = getmyTeamArry

    }


    ////
    if (myTeamArry === null) {
        let teamMembers = { teamName, admin: activePerson.aName, teamMember: [getItem[findTeamEmailIndex].fname], email: teamEmail }
        myTeam.push(teamMembers)
        saveData(activePerson.aName, myTeam)
        createDiv.setAttribute("class", "create-team-display-none")
    } else if (findMyTeamName === teamName) {
        error("Already Team!");
    }

    else if (teamEmail === findTeamEmail) {
        let teamMembers = { teamName, admin: activePerson.aName, teamMember: [getItem[findTeamEmailIndex].fname], email: teamEmail }
        myTeam.push(teamMembers)
        saveData(activePerson.aName, myTeam)
        createDiv.setAttribute("class", "create-team-display-none")
    }

    clearInput()
    window.location.href = "index3.html"

}


logOut = () => {
    window.location.href = "index2.html"
    localStorage.removeItem("active")
}


cancleBtn = () => {
    let createDiv = document.getElementById("createDiv")
    createDiv.setAttribute("class", "create-team-display-none")
}









