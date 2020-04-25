console.log('this is the beginning')
$('#first-button').click( () => {
    console.log('Yeah, you clicked me')
    console.log(getRandomInt(10))
})

$('#second-button').click( () => {
    $('#first-button').text('This is the first button with changed text')
})

let getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

colors = ['grey','white','blue','magenta','green','lime','purple','yellow','red','orange']
$('#third-button').click( () => {
    color = colors[getRandomInt(colors.length)]
    $('button').css('background',color)
    console.log(color)
})
