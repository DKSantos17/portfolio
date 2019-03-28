function handleNavClicks() {
    $('.david').click(function(showDavid) {
        $('#Projects').hide()
        $('#Bio').hide()
        $('#David').show()
    })
    $('.projects').click(function(showProjects) {
        $('#David').hide()
        $('#Bio').hide()
        $('#Projects').show()
    })
    $('.bio').click(function(showBio) {
        $('#David').hide()
        $('#Projects').hide()
        $('#Bio').show()
    })    
}

function startYourEngines() {
    handleNavClicks();
}

$(startYourEngines);