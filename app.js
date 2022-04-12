const dropdown = document.getElementById('navbarDropdownMenuLink');

const checklanguageHangler = () => {
    const langauge = localStorage.getItem('langauge');
    if (langauge) dropdown.innerHTML = langauge;
    else {
        dropdown.innerHTML = 'English';
        localStorage.setItem('langauge', 'English');
    }
}
checklanguageHangler();
const navdropdown = (value) => {
    dropdown.innerHTML = value;
    localStorage.setItem('langauge', value);
}