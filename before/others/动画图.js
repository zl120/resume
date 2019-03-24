
window.onload = function () {
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var three = document.getElementById('three');
    var four = document.getElementById('four');
    var five = document.getElementById('five');

    var twotwo = document.getElementById('twotwo');


    one.onclick = function () {
        two.style.animation = "two 5s";
        two.style.display = "block";
        three.style.animation = "three 5s";
        three.style.display = "block";
        four.style.animation = "four 5s";
        four.style.display = "block";
        five.style.animation = "five 5s";
        five.style.display = "block";
    }
    two.onclick = function () {
        one.style.opacity = "0";
        three.style.opacity = "0";
        four.style.opacity = "0";
        five.style.opacity = "0";
        one.style.animation = "opacity 5s";
        three.style.animation = "opacity 5s";
        four.style.animation = "opacity 5s";
        five.style.animation = "opacity 5s";

        two.style.top = "50%";
        two.style.transform = "scale(2,2)";
        two.style.animation = "twotwo 5s";
    }
    three.onclick = function () {
        one.style.opacity = "0";
        two.style.opacity = "0";
        four.style.opacity = "0";
        five.style.opacity = "0";
        one.style.animation = "opacity 5s";
        two.style.animation = "opacity 5s";
        four.style.animation = "opacity 5s";
        five.style.animation = "opacity 5s";

        three.style.left = "50%";
        three.style.transform = "scale(2,2)";
        three.style.animation = "threethree 5s";
    }
    four.onclick = function () {
        one.style.opacity = "0";
        two.style.opacity = "0";
        three.style.opacity = "0";
        five.style.opacity = "0";
        one.style.animation = "opacity 5s";
        two.style.animation = "opacity 5s";
        three.style.animation = "opacity 5s";
        five.style.animation = "opacity 5s";

        four.style.left = "50%";
        four.style.transform = "scale(2,2)";
        four.style.animation = "fourfour 5s";
    }
    five.onclick = function () {
        one.style.opacity = "0";
        two.style.opacity = "0";
        three.style.opacity = "0";
        four.style.opacity = "0";
        one.style.animation = "opacity 5s";
        two.style.animation = "opacity 5s";
        three.style.animation = "opacity 5s";
        four.style.animation = "opacity 5s";

        five.style.top = "50%";
        five.style.transform = "scale(2,2)";
        five.style.animation = "fivefive 5s";
    }
}
