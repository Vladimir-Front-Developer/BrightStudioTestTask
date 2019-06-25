//Скрипт поиска
const fieldsArr = ['customerName', 'numberContract', 'requestNumber', 'address', 'arrivalDate']
const searchByList = (val, list, fields) => {
    return list.filter(item => {
        return !!fields.filter(el => {
            return item[el].toLowerCase().includes(val.toLowerCase())
        }).length
    })
}
/** Пример вызова:
 * value введеное значение
 * data данные списка (массив обьектов)
 * fieldsArr список полей по которым будет производится поиск
*/
this.searchInp.onChange(value => this.requestLst.setData(searchByList(value, data, fieldsArr)))