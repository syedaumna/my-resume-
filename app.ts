

document.addEventListener("DOMContentLoaded", () => {
    // Example: Dynamically adding a new skill
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const newSkill = document.createElement('li');
        newSkill.textContent = 'TypeScript';
        skillsSection.querySelector('ul')?.appendChild(newSkill);
    }
});
