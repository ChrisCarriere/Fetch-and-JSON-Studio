// TODO: add code here
function init() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        return response.json();
    })
        .then(function (json) {
            let containerTag = document.getElementById("container");
            let astronautId = [];
            for (i = 0; i < json.length; i++) {
                astronautId.push(json[i]);
                console.log(astronautId);


                containerTag.innerHTML += `<div class="astronaut">
        <div class="bio">
           <h3>${astronautId[i].firstName} ${astronautId[i].lastName}</h3>
           <ul>
              <li>Hours in space: ${astronautId[i].hoursInSpace}</li>
              <li id = "active">Active: ${astronautId[i].active}</li>
              <li>Skills: ${astronautId[i].skills}</li>
           </ul>
        </div>
        <img class="avatar" src="${astronautId[i].picture}">
     </div>`;

            }
        });

}

window.onload = init;