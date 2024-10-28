
fetch("view.html")
        .then((res)=> res.text())
        .then((data) => 
        {
          document.getElementById("edit-modal").innerHTML = data;
          const closeModalBtn = document.getElementById("close");
                const modal = document.getElementById("edit-modal");

                // Close modal on close button click
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

    // Open modal on button click
    for (let i = 0; i < openModalBtns.length; i++) {
        openModalBtns[i].onclick = function() {
            modal.style.display = "block"; // Open the modal
        };
    }

  });