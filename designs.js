// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//function to color cells
function colorCell(){
    $('.table_cell').click(function(){
        //get color value
        let color = $('#colorPicker').val();
        //check if cell has attribute named style
        if ($(this).attr('style')){
            //remove attribute if exists
            $(this).removeAttr('style');
        } else{
            //else add color attribute
            $(this).attr('style',"background-color: "+ color);
        }
        
    });
}



// function to make form grid
function makeGrid() {
    //prevent duplicates of additional rows after clicking the submit button
    $('tr').remove();
    //Get the height of the table
   const rows = $('#inputHeight').val();
   //Get the width of the table
   const cols = $('#inputWeight').val();
    
   //add rows
   for (var x = 1; x <= rows; x ++){
       $('#pixelCanvas').append('<tr></tr>');
       //add columns
       for(var i=1;i <=cols; i++){
           $('tr:last').append('<td></td>');
           //append a class name to all cells
           $('td').attr("class", 'table_cell');
       }
   }
   // call the function to color the cells 
   colorCell();
   
}


// load the document/page
$(document).ready(function(){
   
    $('#sizePicker').submit(function(event){
        // make the table stable by calling the preventDefault function
        event.preventDefault();
        //call the makeGrid function to form the grid
        makeGrid();
    } );
});