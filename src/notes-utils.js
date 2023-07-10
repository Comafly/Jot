import axios from 'axios';

/** Fetches the list of notes when the component is mounted. */
export const fetchNotes = async (setNotes, serverURL, dbCollection) => 
{
  const { data } = await axios.get(`${serverURL}${dbCollection}`);
  setNotes(data);
};

/** Adjust the width and height of input fields for screen resizing. */
export const adjustInputFields = () => 
{
  const textArea = document.querySelector(".new-note-input");
  const tagsArea = document.querySelector(".new-tags-input");

  if (textArea) {
    textArea.addEventListener("input", function() {
      this.style.height = "";
      this.style.height = this.scrollHeight + "px";
    });
  }

  window.addEventListener('resize', function() {
    textArea.style.width = window.innerWidth < 1000 ? '90%' : '45%';
  });
  window.addEventListener('resize', function() {
    tagsArea.style.width = window.innerWidth < 1000 ? '90%' : '45%';
  });
};