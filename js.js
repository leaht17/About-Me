//from 'Javascript and jQuery' by Jon Duckett

$('.tab-list').each(function () {
    var $this = $(this);                            //find lists of tabs
    var $tab = $this.find('li.active');             //store this list
    var $link = $tab.find('a');                     //get the active list item
    var $panel = $($link.attr('href'));             //get active panel

    $this.on('click', '.tab-control', function (e) { //when click on a tab
        e.preventDefault();                         //prevent link behavior
        var $link = $(this);                        //store the current link
        var id = this.hash;                         //get href of clicked tab
                    
        if(id && !$link.is('.active')) {
            $panel.removeClass('active');
            $tab.removeClass('active');

            $panel = $(id).addClass('active');
            $tab = $link.parent().addClass('active');
        }
    });
});