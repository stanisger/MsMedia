
$(document).ready(function() {
    // seletor materialize
    $('select').material_select();

    // modal materialize
    $('.modal-trigger').leanModal();
    $('#modal1').closeModal();

 	// fullpage
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		menu: '#menu',
		scrollingSpeed: 750
	});

});



            
