const tritre = document.querySelector('h1')
const cadre = document.querySelector('div')

const max_heigth = cadre.clientHeight;
const max_width = cadre.clientWidth;

tritre.style.position = 'relative';

let top_position = 0;
let left_position = 0;

let force_height = -2;
let force_width = -2;

function animation() {
    if (top_position == 0) {
        force_height *= -1
    } else if (top_position == max_heigth - tritre.offsetHeight) {
        force_height *= -1
    }
    if (left_position == 0) {
        force_width *= -1
    } else if (left_position == max_width - tritre.offsetWidth) {
        force_width *= -1
    }

    top_position += force_height;
    left_position += force_width;

    tritre.style.top = top_position + 'px';
    tritre.style.left = left_position + 'px';


    requestAnimationFrame(animation);
}
requestAnimationFrame(animation);