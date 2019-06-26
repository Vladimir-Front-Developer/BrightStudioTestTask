var noteDataList = []
var tagDataList = []

window.onload = function (){
	var entryFieldNotes = document.getElementById('entryFieldNotes')
	var addListBtn = document.getElementById('addListBtn')
	var listNotes = document.getElementById('listNotes')
	var tagList = document.getElementById('tagList')
	entryFieldNotes.addEventListener("focus", function() { tagList.style.display = 'flex' }, true);
  	entryFieldNotes.addEventListener("blur", function() { tagList.style.display = 'none' }, true);
	addListBtn.onclick = () => addNotesToList(listNotes)
}

const addNotesToList = (list) => {
	const id = noteDataList.length + 1
	const value = entryFieldNotes.value
	console.log(value)
	if(value){
		let itemNoteTags = addTagList(value)
		noteDataList.push({ id: id, text: value, tags: itemNoteTags})
		list.insertBefore(creatingNote(id, value), list.children[0])
		entryFieldNotes.value = ''
	}
}

const addTagList = (value) => {
	let noteTags = getWordFromString(value)
	for(item of noteTags){
		if(tagDataList.indexOf(item) === -1) {
			tagDataList.push(item)
			let p = document.createElement('p')
			p.innerText = item
			tagList.insertBefore(p, tagList.children[0])
		}
	}
	return noteTags
}

const creatingNote = (id, value) => {
	const newLi = document.createElement('li')
	newLi.id = id
	newLi.innerText = value
	newLi.onclick = (item) => {
		value = item.srcElement.innerText
		entryFieldNotes.value = value
		addListBtn.innerText = 'Применить изминения'
		addListBtn.onclick = () => applyChangeNotes(id, newLi)
	}
	return newLi
}

const applyChangeNotes = (id, li) => {
	noteDataList.find(el => {
		if(el.id === id){
			el.text = entryFieldNotes.value
			el.tags = addTagList(entryFieldNotes.value) }
	})
	li.innerText = entryFieldNotes.value
	addListBtn.innerText = 'Добавить заметку'
	addListBtn.onclick = () => addNotesToList(listNotes)
	entryFieldNotes.value = ''
}

const getWordFromString = (str) => {
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