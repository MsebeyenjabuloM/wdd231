document.addEventListener('DOMContentLoaded', () => {
    const coursesContainer = document.querySelector('#courses-container');

    const courses = [
        { title: 'WDD 130', category: 'WDD' },
        { title: 'WDD 231', category: 'WDD' },
        { title: 'CSE 110', category: 'CSE' },
        { title: 'CSE 210', category: 'CSE' }
    ];

    function displayCourses(filter) {
        coursesContainer.innerHTML = '';

        const filteredCourses = filter === 'all' ? courses : courses.filter(course => course.category === filter);

        filteredCourses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.classList.add('course-card');
            courseCard.textContent = course.title;
            coursesContainer.appendChild(courseCard);
        });
    }

    window.filterCourses = displayCourses;

    displayCourses('all');
});
