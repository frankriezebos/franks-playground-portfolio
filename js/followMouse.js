export function followMouse() {
    let btn = document.querySelector('.mouse-cursor-gradient-tracking');
    btn.onmousemove = function(e) {
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        btn.style.setProperty('--x', x + 'px');
        btn.style.setProperty('--y', y + 'px');
    }
}