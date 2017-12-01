const navItems = [
    {link: '/tasks', linkText: 'To Dos'},
    {link: '/profile', linkText: 'Profile'},
    {link: '/logout', linkText: 'Logout'},
]

for (item of navItems) {
    $('#top-menu ul').append(
        compileTemplate(navItem, item)
    )
}

page('/', homeController)
page('/tasks', taskController)
page('/profile', profileController)
page('/logout', logoutController)
page('*', notFound)
page()

function notFound() {
    clearMain()
    $('#content').html('<h1>Not Found!</h1>')
}