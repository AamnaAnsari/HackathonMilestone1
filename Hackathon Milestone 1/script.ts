document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsSection = document.getElementById('skills') as HTMLDivElement;

    toggleSkillsButton.addEventListener('click', () => {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            toggleSkillsButton.textContent = 'Hide Skills Section'; /////Hide skill section
        } else {
            skillsSection.style.display = 'none';
            toggleSkillsButton.textContent = 'Show Skills Section'; ///// show skill section
        }
    });
});
