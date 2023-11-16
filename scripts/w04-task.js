/* LESSON 4 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Raymund Antrone",
    photo: "images/Raymund.jpg",
    favoriteFoods: [
      "Chicken Adobo",
      "grilled chicken",
      "squid grilled",
      "pork grilled",
      "Menudo Chicken",
      "Tinola Chicken",
      "pizza",
    ],
    hobbies: [
      "studying the scriptures",
      "Family history",
      "traveling",
      "Learning Web Design",
      "cooking",
      "Playing instruments",
    ],
    placesLived: [],
  };
  
  /* Populate Profile Object with placesLive objects */
  myProfile.placesLived.push(
    {
      place: "Philippines Asia",
      length: "27 years",
    }
  ),
  myProfile.placesLived.push(
    {
      place: "Bacolod City, Negros occidental",
      length: "27 years"
    }
  )
  /* DOM Manipulation - Output */
  
  /* Name */
  document.querySelector("#name").textContent = myProfile.name;
  /* Photo with attributes */
  document.querySelector("#photo").srs = myProfile.photo;
  /* Favorite Foods List*/
  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
  });
  /* Hobbies List */
  myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement("ul");
    ul.textContent = hobby;
    document.querySelector("#hobbies").appendChild(ul);
  });
  /* Places Lived DataList */
  myProfile.placesLived.forEach(place => {
    let li = document.createElement("li");
    li.textContent = place.place + ", " + place.length;
    document.querySelector("#places-lived").appendChild(li);
  });
  
  