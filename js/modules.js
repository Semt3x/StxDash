// reset all modules on page load
function reloadModules()
{
    setNavButtons();
}

// unset all buttons then reset them
function setNavButtons()
{
    $('body').off('click', '.btn-nav', navButton);
    $('body').on('click', '.btn-nav', navButton);
}

// set a navbutton behaviour
function navButton()
{
    $('#mainView').load('/partials/'+$(this).attr('app')+'.html');
}