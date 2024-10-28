
fetch("view.html")
        .then((res)=> res.text())
        .then((data) => 
        {
          document.getElementById("edit-modal").innerHTML = data;
          const closeModalBtn = document.getElementById("close");
                const modal = document.getElementById("edit-modal");


                if (closeModalBtn) 
                {
                    closeModalBtn.onclick = function() 
                    {
                        modal.style.display = "none";
                    }
                  }
        });
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("edit-modal");
    const closeModalBtn = document.getElementById("close");
    const openModalBtns = document.getElementsByClassName("viewNCR");


    for (let i = 0; i < openModalBtns.length; i++) {
        openModalBtns[i].onclick = function() {
            modal.style.display = "block"; 
        };
    }

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