window.onload = function (){
	const addBtn = document.getElementById('addBtn')
	const valueInp = document.getElementById('valueInp')
	const listRequests = document.getElementById('listRequests')
	addBtn.onclick = () => addToList(listRequests, valueInp)
}
const addToList = (list, input) => {
	const id = listData.length + 1
	const value = input.value
	const newLi = document.createElement('li')
	newLi.innerHTML = value;
	newLi.id = id
	list.insertBefore(newLi, list.children[0])
	listData.push({ id: id, text: value })
}
var listData = [
	{
		id: '1',
		text: '11-12 июля в Санкт-Петербурге состоится конференция по распределенным системам Hydra 2019.'
	},
	{
		id: '2',
		text: '#Royal_Arts #Dark_Souls #Bloodborne by Banished Shadow Dark Souls и Bloodborne в стиле аниме.'
	},
	{
		id: '3',
		text: '#Royal_comics by fredrik k.t. andersson'
	}
]