async function plswork() {
    var xraw = prompt("Please enter X Coordinate")
    var yraw = prompt("Please enter Y Coordinate")
    xin = parseInt(xraw)
    yin = parseInt(yraw)
    
    const response = await fetch('/JavaScript/data.json');
    const entries = await response.json();

    entrieslength = Object.keys(entries.squares).length
    alert(entrieslength)

    var index = 0

    for (let i = 0; i < entrieslength; i++) {
        if (entries.squares[i].X_Coords == xin){
            if (entries.squares[i].Y_Coords == yin){
                index = i;
            }}
      }

    alert(JSON.stringify(entries.squares[index]));

    src = entries.squares[index].Image,
    img = document.createElement('img');

    img.src = src;
    document.body.appendChild(img);

    setTimeout(() => {  document.body.removeChild(img); }, 1000);

}