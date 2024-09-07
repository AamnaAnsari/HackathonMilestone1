# HackathonMilestone1

"I have completed my milestone 1."

I want to explain my typescript code here:

document.addEventListener('DOMContentLoaded', () => {...})

This event listener ensures that the enclosed code runs only after the entire HTML document has been loaded and parsed. This prevents errors that might occur if the script tries to access elements that haven’t been fully loaded yet.

const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;

This line retrieves the HTML element with the ID toggle-skills and casts it to an HTMLButtonElement type.

const skillsSection = document.getElementById('skills') as HTMLDivElement;
Similarly, this line retrieves the HTML element with the ID skills and casts it to an HTMLDivElement type. 

toggleSkillsButton.addEventListener('click', () => {...})
This attaches a click event listener to the button. When the button is clicked, the function inside the addEventListener is executed.

Inside the Event Listener Function:
if (skillsSection.style.display === 'none')
This checks whether the skillsSection is currently hidden by examining its display style property.

skillsSection.style.display = 'block';
If the skillsSection is hidden (display: none), it is set to display: block to make it visible.

toggleSkillsButton.textContent = 'Hide Skills Section';
The button's text is updated to indicate that clicking it will now hide the "Skills" section.

else { skillsSection.style.display = 'none'; toggleSkillsButton.textContent = 'Show Skills Section'; }
If the section is visible, it sets the display property to none to hide it and updates the button's text to prompt showing the section.

Thanks! Hope you like my work.
