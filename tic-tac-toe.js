    var boxes =document.querySelectorAll('.boxes')
    var boxid = document.querySelector('boxid')
    var player =document.querySelector('#player')
    var container = document.querySelector('.container')
    var display = document.querySelector('.winnerdisplay')
    var button =document.querySelector('#button')
    button.addEventListener('click',function(event)
    {
      gameover()  
    }) 
    var clickNumber = 1
    var displayX = 'X'
    var display0 = '0'
    display.innerText ="Let's start the game"
    container.addEventListener('click',function(event) {   
    clickNumber = clickNumber+1
    var boxValue = event.target
    if(boxValue.innerText !== '') {
        return
    }
    if(clickNumber % 2 === 0) {
        boxValue.value= displayX
        boxValue.textContent = displayX
        display.innerText="Player2's turn"
        
        } 
        else if (clickNumber % 2 ===1){
            boxValue.value=display0
            boxValue.textContent = display0
           display.innerText="Player1's turn"
        }  
    winner()
    checkDraw()
             
})   
function winner()
{
    var box1 = document.querySelector('#a1').innerText
    var box2 = document.querySelector('#a2').innerText
    var box3 = document.querySelector('#a3').innerText
    var box4 = document.querySelector('#b1').innerText
    var box5 = document.querySelector('#b2').innerText
    var box6 = document.querySelector('#b3').innerText
    var box7 = document.querySelector('#c1').innerText
    var box8 = document.querySelector('#c2').innerText
    var box9 = document.querySelector('#c3').innerText

    if((box1 === 'X'&& box2 ==='X' && box3==='X')|| (box4 ==='X' &&box5==='X' &&box6 ==='X')|| (box7 ==='X' && box8 ==='X' && box9==='X') || (box1 ==='X' && box4 ==='X' && box7==='X')|| (box2==='X' && box5 ==='X' && box8 ==='X') || (box3 ==='X'&& box6 ==='X'&& box9==='X' ) ||( box1==='X' && box5==='X' && box9==='X') || (box3 ==='X'&& box5==='X' && box7==='X')) {
        display.innerText ='player 1 won'
     }
        else if((box1 === '0'&& box2 ==='0' && box3==='0')|| (box4 ==='0' &&box5==='0' &&box6 ==='0')|| (box7 ==='0' && box8 ==='0' && box9==='0') || (box1 ==='0' && box4 ==='0' && box7==='0')|| (box2==='0' && box5 ==='0' && box8 ==='0') || (box3 ==='0'&& box6 ==='0'&& box9==='0' ) ||( box1==='0' && box5==='0' && box9==='0') || (box3 ==='0'&& box5==='0' && box7==='0') ) {
            display.innerText ='player 2 won' 
        }      
}
function gameover()
{
    display.innerText ="Let's restart the game"
    document.querySelector('#a1').innerText =''
    document.querySelector('#a2').innerText=''
    document.querySelector('#a3').innerText=''
    document.querySelector('#b1').innerText=''
    document.querySelector('#b2').innerText=''
    document.querySelector('#b3').innerText=''
    document.querySelector('#c1').innerText=''
    document.querySelector('#c2').innerText=''
    document.querySelector('#c3').innerText=''
}
function checkDraw() {
    if((display.innerText !== 'player 1 won')||(display.innerText !=='player 2 won') ) {
        if((document.querySelector('#a1').innerText !=='') && (document.querySelector('#a2').innerText !=='')&& (document.querySelector('#a3').innerText !=='') &&(document.querySelector('#b1').innerText !=='') && (document.querySelector('#b2').innerText !=='')&& ( document.querySelector('#b3').innerText!=='')&& ( document.querySelector('#c1').innerText !=='') && (document.querySelector('#c2').innerText !=='') &&(document.querySelector('#c3').innerText !=='')) {
            display.innerText ="It's a draw" 
        }
          }          
}      