
var elBody = document.querySelector("body")
var newSelect = document.createElement('select');
newSelect.classList.add("select")


var newList = document.createElement("ul")

function createdom(massiv) {
	for (item of massiv) {
		var newItem = document.createElement("li");
		var newId = document.createElement("div");
		var newNum = document.createElement('span');
		var newh2 = document.createElement('h2');
		var newImg = document.createElement("img");
		var newType = document.createElement("p");
		var newHeight = document.createElement("div");
		var newWidth = document.createElement("div");
		var newCandy = document.createElement("p");
		var newEgg = document.createElement("p");
		var newSpashn = document.createElement("div");
		var newAvg = document.createElement("div");
		var newSpawn = document.createElement("p");
		var newMultipleis = document.createElement("div");
		var newWeaknesses = document.createElement("p");
		newId.textContent = `id: ${item.id}`
		newNum.textContent = `num: ${item.num}`
		newh2.textContent = `Name: ${item.name}`
		newImg.src = `${item.img}`
		newType.textContent = `type: ${item.type}`
		newWidth.textContent = `width: ${item.weight}`
		newHeight.textContent = `height: ${item.height}`
		newCandy.textContent = `candy: ${item.candy}`
		newEgg.textContent = `egg: ${item.egg}`
		newSpashn.textContent = `spawn-chance: ${item.spawn_chance}`
		newAvg.textContent = `avg-spawns: ${item.avg_spawns}`
		newSpawn.textContent = `spawn-time: ${item.spawn_time}`
		newMultipleis.textContent = `multipliers: ${item.multipliers}`
		newWeaknesses.textContent = `weaknesses: ${item.type}`
		newItem.setAttribute('class', 'list__item  item')
		newId.setAttribute('class', 'item__id')
		newNum.setAttribute('class', 'item__num')
		newh2.setAttribute('class', 'item__name')
		newImg.setAttribute('class', 'item__img')
		newType.setAttribute('class', 'item__type')
		newHeight.setAttribute('class', 'item__Height')
		newWidth.setAttribute('class', 'item__Width')
		newCandy.setAttribute('class', 'item__Candy')
		newEgg.setAttribute('class', 'item__Egg')
		newSpashn.setAttribute('class', 'item__Spashn')
		newAvg.setAttribute('class', 'item__Avg')
		newSpawn.setAttribute('class', 'item__Spawn')
		newMultipleis.setAttribute('class', 'item__Multipleis')
		newWeaknesses.setAttribute('class', 'item__Weaknesses')
		newImg.setAttribute('width', '151')
		newImg.setAttribute('height', '151')
		newImg.setAttribute('alt', 'pocemons img')
		newItem.appendChild(newId);
		newItem.appendChild(newNum);
		newItem.appendChild(newh2);
		newItem.appendChild(newImg);
		newItem.appendChild(newType);
		newItem.appendChild(newHeight);
		newItem.appendChild(newWidth);
		newItem.appendChild(newCandy);
		newItem.appendChild(newEgg);
		newItem.appendChild(newSpashn);
		newItem.appendChild(newAvg);
		newItem.appendChild(newSpawn);
		newItem.appendChild(newMultipleis);
		newItem.appendChild(newWeaknesses);
		newList.appendChild(newItem);
		
		
	}
	
}


const newarray = new Set();
pokemons.forEach(item => {
	item.type.forEach(type =>{
		newarray.add(type)
	})
})


for( el of newarray){
  {
			let newOption = document.createElement('option');
			newOption.value =  el;
			newOption.textContent =  el;
			newOption.setAttribute('class',"js-option")
			newSelect.appendChild(newOption);
		}
	}
	


	createdom(pokemons);

var newh1 = document.createElement('h1');
var newbtn = document.createElement("button");
// newbtn.classList.add("option-btn ")
// newbtn.setAttribute('class', 'container option-btn')
newSelect.setAttribute('class', 'option-btn')
newbtn.textContent = 'submit'
newbtn.type = 'submit';
var elText = "pocemons"
newh1.textContent = elText;
newh1.setAttribute('class', 'hiading');
newList.setAttribute('class', 'container list ');
	

        


elBody.appendChild(newh1);
elBody.appendChild(newSelect);
// elBody.appendChild(newbtn);
elBody.appendChild(newList);

let result = [];
newSelect.addEventListener("change", function(){
result = []
newList.innerHTML = ' ';
	let selectVal = newSelect.value
	pokemons.forEach((pokem) => {
		if(pokem.type.includes(selectVal)){
result.push(pokem)
		}
	})
createdom(result)
})