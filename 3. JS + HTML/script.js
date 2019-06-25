window.onload = function (){
	var addBtn = document.getElementById('addBtn')
	var valueInp = document.getElementById('valueInp')
	var listRequests = document.getElementById('listRequests')
	var tagList = document.getElementById('tagList')
	addBtn.onclick = () => addToList(listRequests, valueInp)
	valueInp.addEventListener("focus", function() {
		tagList.style.display = 'flex'
  	}, true);
  	valueInp.addEventListener("blur", function() {
		tagList.style.display = 'none'
	}, true);
}
const addToList = (list, input) => {
	const id = listData.length + 1
	const value = input.value
	console.log()
	if(value){
		const newLi = document.createElement('li')
		newLi.innerHTML = value;
		newLi.id = id
		newLi.onclick = () => editRequest(id, input)
		list.insertBefore(newLi, list.children[0])
		const listItemTags = getTagsString(value)
		for(item of listItemTags){
			if(allTagsList.indexOf(item) === -1) allTagsList.push(item)
		}
		for(item of listItemTags){
			setTagDropDownList(item)
		}
		console.log(allTagsList)
		input.autocomplete = allTagsList
		listData.push({ id: id, text: value, tags: listItemTags})
		console.log(listData)
		input.value = ''
	}
}
const editRequest = (id, input) => {
	const li = document.getElementById(id)
	let text = li.innerHTML
	input.value = text
	addBtn.innerHTML = 'Применить изминения'
	addBtn.onclick = () => changeValueRequest(li, input, id)
}
const changeValueRequest = (li, input, id) => {
	li.innerHTML = input.value
	listData.find(el => {
		if(el.id === id){
			el.text = input.value
			el.tags = getTagsString(input.value)
		}
	})
	console.log(listData)
	addBtn.innerHTML = 'Добавить заметку'
	addBtn.onclick = () => addToList(listRequests, valueInp)
	input.value = ''
}
const getTagsString = (str) => {
	str += ' '
	const trgStart = '#'
	const trgEnd = ' '
	let posStart = -1
	let posEnd = 0
	let tags = []
	while((posStart = str.indexOf(trgStart, posStart + 1)) != -1){
		posEnd = str.indexOf(trgEnd, posStart)
		tags.push(str.slice(posStart, posEnd))
	}
	return tags
}
const setTagDropDownList = (tag) => {
	const p = document.createElement('p')
	p.innerHTML = tag
	tagList.insertBefore(p, tagList.children[0])
}
var allTagsList = []
var listData = []