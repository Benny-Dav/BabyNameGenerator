
document.getElementById("generate-btn").addEventListener("click", async function() {
    const url = 'https://baby-names-by-api-ninjas.p.rapidapi.com/v1/babynames';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '9324837c5fmsha0085ed90034ac9p1b4088jsndf51e170cb0b',  // Replace this with an environment variable in production
        'x-rapidapi-host': 'baby-names-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      // Fetch the API
      const response = await fetch(url, options);
  
      
  
      const result = await response.json();
      console.log(result);
      // Display the result
      document.getElementById("result").innerText = result;
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("result").innerText = "Failed to fetch name. Please try again.";
    }
  });
  
  //FUNCTION TO MAKE DIV APPEAR ON CLICK OF BUTTON
  function hideDiv(){
    const hiddenDiv = document.getElementById("hiddenDiv");
      //IF ELSE BLOCK TO HIDE AND SHOW DIV
    if(hiddenDiv.classList.contains("result-div")){
        hiddenDiv.classList.remove("result-div");
    }
    else{
        hiddenDiv.classList.add("result-div");
    }
};

//APPLY FUNCTION TO BUTTON BY ADDING EVENT LISTENER TO BUTTON
document.getElementById("generate-btn").addEventListener("click",hideDiv);
