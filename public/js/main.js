const submitBtn = document.getElementById("submitBtn");
const form = document.querySelector(".temp_form");
const cityName = document.getElementById("cityName");

cityName.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Form submitted");
});
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("Form submitted");

// });

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Form submitted");
});

// if(cityName===""){
//   showCityBanner.innerText=`Please write a valid city name`

//   }

//   else{
//       try{

//   const url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=9a4dbc9037a45f8e14cb94fe5f3dda4e`

//       }catch(err){
//           console.log(err);
//       }
//   }
