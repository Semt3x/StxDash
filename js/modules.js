// reset all modules on page load
function reloadModules()
{    
    $('body').css('background-color', '#fff');
    
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

function bashMode()
{    
    $('body').css('background-color', '#323340');
    
    jQuery(function($, undefined) {
    $('#bashArea').terminal(function(command, term) {
        if (command !== '') {
            try {
                var result = window.eval(command);
                if (result !== undefined) {
                    term.echo(new String(result));
                }
            } catch(e) {
                term.error(new String(e));
            }
        } else {
           term.echo('');
        }
    }, {
        greetings: "This is a simple jquery prompt\nTry some js stuff here\nCould've done my own but I've been lazy...",
        name: 'haiJS',
        height: 350,
        prompt: 'js> '});
});
}