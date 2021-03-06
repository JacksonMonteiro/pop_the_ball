let score = 0;
let interval;
let color;

function randomColor() {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    return color;
}

function updateScore() {
    $('.score h2').html(score);
}

function spawnBall() {
    let x = Math.floor(Math.random() * $('.game-screen').width());
    let y = Math.floor(Math.random() * $('.game-screen').height());

    let ball = $('<div class="ball"></div>');
    ball.css('left', x + 'px');
    ball.css('top', y + 'px');
    ball.css('background-color', '#' + randomColor());

    ball.on('click', function() {
        $(this).fadeOut();

        score += 1;
        updateScore();
    });

    $('.game-screen').append(ball);
}

$(function() {
    $('#start').on('click', function() {
        interval = setInterval(spawnBall, 1000);
    });

    $('#stop').on('click', function() {
        $('.ball').fadeOut('fast', 'linear');
        clearInterval(interval);
        
        score = 0;
        updateScore();
    });
});