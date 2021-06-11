//first get the data displayed in the console.
const getRes= async () =>{
  let url = "https://data.cityofnewyork.us/resource/pitm-atqc.json"; //declare URL in variable
    try{ const result = await axios.get(url);
      console.log(result.data);
      let resName= result.data.map(name=>{
        return name.restaurant_name
      });
      console.log(resName);
        }catch (error) { console.error(error) 
       }
      
    }
    getRes();
//make an axios call and console log the result.

//make a callback function that takes the data and attaches it to the DOM.
// let searchButton = document.querySelector('button')

// const renderRestaurants= (result) =>{
  


//select the button that searches for the different restaurants


//this function gves my search button a different color when I hover over it.
  function randomColor() {
    let color = [];
      for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
        }//for loop used above so it can loop through different colors, along with the math function so it can push a random color every time.
      return 'rgb(' + color.join(', ') + ')';
    } //returning the color and joining it with the function.
      let myButton = document.querySelector('button'); 
//named mybutton so Java can use it.
    myButton.addEventListener("mouseover", function(){
  //selected myButton to have an eventlistener(instead of document which was selecting the whole page).
  //the mouseover function allows the hover function to happen.
      myButton.style.backgroundColor = randomColor();
            });
//this selects the part of the button that I want to have in different colors.



