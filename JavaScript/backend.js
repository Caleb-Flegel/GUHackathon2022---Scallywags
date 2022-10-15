async function plswork() {
    const response = await fetch('/JavaScript/data.json');
    const names = await response.json();
    alert(names.squares[0].Image);


    src = names.squares[0].Image,
    img = document.createElement('img');

    img.src = src;
    document.body.appendChild(img);

    setTimeout(() => {  document.body.removeChild(img); }, 1000);

}