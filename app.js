const dropdown = document.getElementById('navbarDropdownMenuLink');
const sideNavDropdown = document.getElementById('sideNavDropdownMenuLink');

const checklanguageHangler = () => {
    const langauge = localStorage.getItem('langauge');
    if (langauge) {
        dropdown.innerHTML = langauge;
        sideNavDropdown.innerHTML = langauge;
    }
    else {
        dropdown.innerHTML = 'English';
        sideNavDropdown.innerHTML = 'English';
        localStorage.setItem('langauge', 'English');
    }
}
checklanguageHangler();
const navdropdown = (value) => {
    if (value) {
        dropdown.innerHTML = value;
        sideNavDropdown.innerHTML = value;
        localStorage.setItem('langauge', value);
    }
}

const openNav = () => {
    document.getElementById("mySidenav").style.width = "45%";
}

const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
}