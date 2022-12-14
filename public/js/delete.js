const newFormHandler = async (event) => {
  event.preventDefault();
//set-up to delete
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");

      const response = await fetch(`/api/blog/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to delete Blog");
      }
    }
  };

  document
    .querySelector(".blog-delete")
    .addEventListener("click", delButtonHandler);
};
