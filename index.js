let searchButton = document.querySelector('button');
let inputBar = document.getElementById('search');
let resList = document.querySelector('.restaurants');
let locationList = document.querySelector('.location');
let drinkList = document.querySelector('.drinks');
//first get the data displayed in the console.

const getRes= async () =>{
  let url = "https://data.cityofnewyork.us/resource/pitm-atqc.json"; //declare URL in variable
  try{const result = await axios.get(url);
    console.log(result.data);
    let resName= result.data.map(name=>{
        return name.restaurant_name
     });
     searchButton.addEventListener("click", (event) => {
      event.preventDefault();
      resFilter(result.data);
     })
     console.log(resName);
    }catch (error) { console.error(error) 
    }
    
  }
  getRes()

  
const clearResults = () =>{
      while(resList.lastChild){
        resList.removeChild(resList.lastChild)
      }
      while(locationList.lastChild){
        locationList.removeChild(locationList.lastChild)
      }
      while(drinkList.lastChild){
        drinkList.removeChild(drinkList.lastChild)
      
      }
}


  const renderRestaurants= (resName) =>{
    const nextSet = resName.splice(10);
    clearResults();
    resName.forEach(element =>{
      let listDispl = document.querySelector('.mydisplay');
      let resListItem = document.createElement("li");
      resListItem.innerText = element.restaurant_name;
      resList.appendChild(resListItem);
      // listDispl.appendChild(resList);
          let locListItem = document.createElement("li");
          locListItem.innerText = element.business_address;
          locationList.appendChild(locListItem);

      let drinkListItem = document.createElement("li");
      drinkListItem.innerText = element.qualify_alcohol;
      drinkList.appendChild(drinkListItem);
    });
  }
  
  
  const resFilter = (data)=>{
   const filterResults = data.filter(restaurant => {
    return restaurant.restaurant_name.toLowerCase().includes(inputBar.value)

   })
     renderRestaurants(filterResults)
        }



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



