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
        if (command == 'back') {
            term.echo('not implemented yet')
        }else if (command.indexOf('setapp') > -1) {
            $.ajax({
                url: '/cgi-bin/getApplicationsList.py',
                success: function(data){
                    console.log(data.applications)
                    app = command.split(' ')[1];
                    if(data.applications.indexOf(app+'.html') > -1)
                    {
                        term.echo('loading application '+ app)
                        $('#mainView').load('/partials/'+app+'.html');  
                    }
                    else{
                        term.echo('unknown application '+app);
                    }
                }
            });
            
        } else {
            term.echo('unknown command');
        }
    }, {
        greetings: "This is a simple jquery prompt\nTry some js stuff here\nCould've done my own but I've been lazy...",
        name: 'haiJS',
        height: 350,
        prompt: 'js> '});
    });
}
