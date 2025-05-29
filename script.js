document.addEventListener("DOMContentLoaded", function(){
    const searchBTN = document.getElementById("search-btn");
    const user_inp = document.getElementById("user-ip");
    const statsContainer = document.querySelector(".stats-container");
    const esyprogresscircle = document.querySelector(".easy");
    const medprogrescircle = document.querySelector(".med");
    const hardprogresscircle = document.querySelector(".hard");
    const easyLabel = document.getElementById("easy-lbl");
    const medLabel = document.getElementById("medium-lbl");
    const hardLabel = document.getElementById("hard-lbl");
    const cardStatsContainer = document.querySelector(".stats-cards");

    //return true or false based on retgex
    function validateusername(username){
        if(username == ""){
            alert("Please input your username, it should not be empty");
            return false;
        }
        const regex=/^[a-zA-z0-9 -]{1,15}$/;
        const isMacthing = regex.test(username);
        if(!isMacthing){
            alert("Invalid Username");
        }
        return isMacthing;

    }

    //api call
    async function fetchuserdetails(username) {
    const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
    try {
        searchBTN.textContent = "Searching...";
        searchBTN.disabled = true;
        statsContainer.classList.add("none");

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Unable to fetch details");
        }

        const parseData = await response.json(); // <- fixed
        console.log("Logging data: ", parseData);
        displayUserData(parseData);
        } catch (error) {
        console.error("Error fetching data:", error);
        statsContainer.innerHTML = '<p>No Data Found</p>';
    } finally {
        searchBTN.textContent = "Search";
        searchBTN.disabled = false;
    }
    }

    function updateprogress(solved,total,label,circle){
        const precentage=(solved/total)*100;
        circle.style.setProperty("--progress-degree",`${precentage}%`);
        label.textContent=`${solved}/${total}`;
    }

    function displayUserData(parseData){
        //totalquestions
        const totalQues=parseData.totalQuestions;
        const totaleasyQues=parseData.totalEasy;
        const totalmedQues=parseData.totalMedium;
        const totalHardQues=parseData.totalHard;


        //solvedquestions
        const totalsolved=parseData.totalSolved;
        const totaleasysolved=parseData.easySolved;
        const totalmedsolved=parseData.mediumSolved;
        const totalhardsolved=parseData.hardSolved;

        updateprogress(totaleasysolved, totaleasyQues, easyLabel, esyprogresscircle);
        updateprogress(totalmedsolved, totalmedQues, medLabel, medprogrescircle);
        updateprogress(totalhardsolved, totalHardQues, hardLabel, hardprogresscircle);

        const cardData=[
            {label: "Acceptance Rate", value:parseData.acceptanceRate},
            {label: "Ranking", value:parseData.ranking},
            {label: "contribution", value:parseData.contributionPoints},
            {label: "Reputation", value:parseData.reputation}
        ];

        console.log("Card Data", cardData);
        cardStatsContainer.innerHTML=cardData.map(
            data=> {
                return `
                    <div class="card">
                    <h3>${data.label}</h3>
                    <p>${data.value}</p>
                    </div>
                `
            }
        ).join("");
    }



    searchBTN.addEventListener('click', function(){
        const username=user_inp.value;
        console.log("Loggin username: ",username);
        if(validateusername(username)){
            fetchuserdetails(username);
        }

    })
})