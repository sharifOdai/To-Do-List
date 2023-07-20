$(document).ready(() => {

   // add event listener to delete icon
   handleDelete();
   //add event listener to check icon
   handleCheck()
   
   
   
    $(".txtb").keypress(function (event) {

        var key = event.which;
        if(key === 13 && $(".txtb").val() !== ""){
            //  function to handle creat new uncompleted task
            creatNewUncompletedTask()
        }
    });
});

function creatNewUncompletedTask(){

    var newTask = $("<div class='task'></div>");
    var taskValue = $(".txtb").val();
    newTask.text(taskValue);
    var deleteIcon = $("<i class='icon fas fa-trash-alt'></i>");
    var checkIcon = $("<i class='icon fas fa-check'></i>");
    newTask.append(deleteIcon, checkIcon);
    $(".not-complete").append(newTask);
    $("txtb").val("");

};

function handleDelete(){

    $(document).on("click", ".fa-trash-alt", function (){

        $(this).parent().remove();

    });

};

function handleCheck(){

    $(document).on("click", ".fa-check", function (){

        var completeTask = $(this).parent();
        completeTask.remove();
        $(".complete").append(completeTask);
        $(this).remove();

    })
};