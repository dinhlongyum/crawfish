app.ready(function() {
    let e = app.select('p')
    e.addEventListener('click', function() {
        app.toggleClass(app.select('p'), 'aa')
    })
    console.log(e)
    app.addClass(app.select('p'), 'hi')
    app.removeClass(app.select('p'), 'hi')
    app.scroll(function() {
        console.log(2)
    })
})