// script.ts
document.addEventListener("DOMContentLoaded", function () {
    var _a;
    // Example: Dynamically adding a new skill
    var skillsSection = document.getElementById('skills');
    if (skillsSection) {
        var newSkill = document.createElement('li');
        newSkill.textContent = 'TypeScript';
        (_a = skillsSection.querySelector('ul')) === null || _a === void 0 ? void 0 : _a.appendChild(newSkill);
    }
});
