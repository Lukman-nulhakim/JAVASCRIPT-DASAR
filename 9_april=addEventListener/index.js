document.getElementById('dropdown').addEventListener('mouseover', (e) => {
    document.querySelector('.drop').classList.add('showme');
});
document.getElementById('dropdown').addEventListener('mouseleave', (e) => {
    document.querySelector('.drop').classList.remove('showme');
});
document.getElementById('modal').addEventListener('click', (e) => {
    document.querySelector('.modalup').classList.add('active');
});
document.getElementById('modalclose').addEventListener('click', (e) => {
    document.querySelector('.modalup').classList.remove('active');
});