import html from '../core.js'

var date = new Date()

var currentDay = date.getDay()
var currentDate = date.getDate()
var currentMonth = date.getMonth() + 1
var currentYear = date.getFullYear()
console.log(currentDay)

var day_name = ''
switch (currentDay) {
    case 0:
        day_name = 'Sunday'
        break;
    case 1:
        day_name = 'Monday'
        break;
    case 2:
        day_name = 'Tuesday'
        break;
    case 3:
        day_name = 'Wednesday'
        break;
    case 4:
        day_name = 'Thursday'
        break;
    case 5:
        day_name = 'Friday'
        break;
    case 6:
        day_name = 'Saturday'
        break;
}

var month_name = ''
switch (currentMonth) {
    case 1:
        month_name = 'January'
        break;
    case 2:
        month_name = 'February'
        break;
    case 3:
        month_name = 'March'
        break;
    case 4:
        month_name = 'April'
        break;
    case 5:
        month_name = 'May'
        break;
    case 6:
        month_name = 'June'
        break;
    case 7:
        month_name = 'July'
        break;
    case 8:
        month_name = 'August'
        break;
    case 9:
        month_name = 'September'
        break;
    case 10:
        month_name = 'October'
        break;
    case 11:
        month_name = 'November'
        break;
    case 12:
        month_name = 'December'
        break;
}

function Header() {
    return html `
    <header class="header">
            <h1>
            todos
            <span class="header-date">
            ${day_name}, ${month_name} ${currentDate}, ${currentYear}
            </span>
            </h1>
            <input 
            class="new-todo"
             placeholder="What needs to be done?" autofocus
             onkeyup = "event.keyCode === 13 && dispatch('add', this.value.trim())"
            >
        </header>
    `
}

export default Header