var EDIT_MODAL_HTML = null;
var VIEW_MODAL_HTML = null;

// load modal html into variables
fetch("_editModal.html")
.then((res)=> res.text())
.then((data) => 
{
    EDIT_MODAL_HTML = data;
});

fetch("_viewModal.html")
.then((res)=> res.text())
.then((data) => 
{
    VIEW_MODAL_HTML = data;   
});


document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal-dialog");
    const editNCRBtns = document.getElementsByClassName("editNCR");
    const viewNCRBtns = document.getElementsByClassName("viewNCR");

    //add event listeners to all edit/view buttons
    Array.from(editNCRBtns).forEach 
    (element => {
        element.onclick = function() { 
            modal.innerHTML = EDIT_MODAL_HTML;
            modal.style.display = "block";
            const closeModalBtn = document.getElementById("close");
            if (closeModalBtn) 
            {
                closeModalBtn.onclick = function() 
                {
                    modal.style.display = "none";
                }
            }
        }; 
    });
    Array.from(viewNCRBtns).forEach 
    (element => {
        element.onclick = function() { 
            modal.innerHTML = VIEW_MODAL_HTML;
            modal.style.display = "block";
            const closeModalBtn = document.getElementById("close");
            if (closeModalBtn) 
            {
                closeModalBtn.onclick = function() 
                {
                    modal.style.display = "none";
                }
            }
        }; 
    });
    
  });


  //TOASTS
  $(document).ready(function() {
    // Toastr options
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };


      $('#ncr-form').on('submit', function(e) {
        e.preventDefault(); 
        toastr.success('Success!', 'You have successfully created a new NCR');

    });
    setTimeout(function() {
        $('#ncr-form').off('submit').submit();
    }, 1000);

    $('#btnClearAll').on('click', function() {
        $('#ncr-form')[0].reset(); // Clear all form fields
        toastr.error('Cleared!', 'All fields have been cleared');
    });

    // Cancel button event
    $('#btnCancel').on('click', function() {
        toastr.error('Canceled!', 'You have canceled creating a new NCR');
    });
});