let toggleTheme = document.getElementById('toggleTheme')

toggleTheme.onclick = () => {
    if(document.documentElement.hasAttribute('theme')) {
        document.documentElement.removeAttribute('theme')
        toggleTheme.value = "Темна тема"
    }
    else {
        document.documentElement.setAttribute('theme', 'dark')
        toggleTheme.value = "Світла тема"
    }
}