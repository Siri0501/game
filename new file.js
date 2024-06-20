document.addEventListener('DOMContentLoaded', (event) => {
    const gameArea = document.getElementById('gameArea');
    const insect = document.getElementById('insect');
    let score = 0;

    function moveInsect() {
        const gameAreaRect = gameArea.getBoundingClientRect();
        const maxX = gameAreaRect.width - insect.clientWidth;
        const maxY = gameAreaRect.height - insect.clientHeight;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        insect.style.left = `${randomX}px`;
        insect.style.top = `${randomY}px`;
    }

    insect.addEventListener('click', () => {
        score += 1;
        document.getElementById('score').innerText = `Score: ${score}`;
        moveInsect();
    });

    setInterval(moveInsect, 1000);
});
