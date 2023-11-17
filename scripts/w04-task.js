/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {  
  name: 'Raymund Antrone',
  photo: 'images/raymund.jpg',
  favoriteFoods: ['Pizza', 'adobo chicken', 'Chicken tinola', 'Pasta'],
  hobbies: ['Games', 'Web Design', 'Movies', 'Studying Scriptures', 'Playing instrument'],
  placesLived: []
  };

/* Populate Profile Object with placesLive objects */
  
myProfile.placesLived.push({
  place: 'Philippines, Asia',
  length: '27 years'
});
myProfile.placesLived.push({
  place: 'Bacolod City, Negros Occidental',
  length: '27 years'
});


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
  let dt = document.createElement('dt');
  dt.textContent = placeLived.place;
  document.querySelector('#places-lived').appendChild(dt);
  let dd = document.createElement('dd');
  dd.textContent = placeLived.length;
  document.querySelector('#places-lived').appendChild(dd);
});