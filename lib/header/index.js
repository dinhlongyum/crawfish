const toggleButtonWrapper = () => {
	app.select('.cfh-header .header-button').addEventListener('click',()=>{
		app.toggleClass(app.select('.cfh-header .header-wrapper .header-button .toggle-button'), 'active')
		app.toggleClass(app.select('.cfh-header'), 'active')
		if(app.select('.cfh-header').classList.contains('active') == true){
            let navListActive = app.selectAll('.cfh-header.active .main-nav ul li')
            let delay = 0.5
            for (let i = 0; i < navListActive.length; i++){
                navListActive[i].style.transitionDelay = delay + (0.05 * i) + 's'}
            }
        else{
            let navListActive = app.selectAll('.cfh-header .main-nav ul li')
            for (let i = 0; i < navListActive.length; i++){
            navListActive[i].style.transitionDelay = '0s'
            }
		}
	})
}
const positionMainNav = () =>{
	let wrapHei = app.select('.cfh-header .header-wrapper').offsetHeight
	app.select('.cfh-header .backdrop').style.top = wrapHei + 'px'
	app.select('.cfh-header .main-nav').style.top = wrapHei + 'px'
}
const scrollToSection = ()=>{
	let el = app.selectAll('.cfh-header .main-nav ul li')
	for(let i = 0;i<el.length;i++){
		el[i].addEventListener('click',()=>{
			// removeClass
			for(let k = 0;k<el.length;k++){
				app.removeClass(el[k], 'active')
			}
			// addClass
			app.addClass(el[i], 'active')
			// scrollTo
			let to = el[i].getAttribute('data-to')
			let offset = app.select('.cfh-home-'+ to).offsetTop
			let heaHei = app.select('.cfh-header').offsetHeight
			window.scrollTo({
                behavior: 'smooth',
                left: 0,
                top: offset - heaHei
			});
			app.removeClass(app.select('.cfh-header'), 'active')
			app.removeClass(app.select('.cfh-header .header-wrapper .header-button .toggle-button'), 'active')
		})
	}
}
const positionNav = ()=>{
	if(window.innerWidth > 992){
		let offset = app.select('.cfh-header .container').offsetLeft
		app.select('.cfh-header .main-nav').style.padding = '2rem '+ (offset + 15) + 'px'
	}
	else{
		app.select('.cfh-header .main-nav').style.padding = '1.5rem'
	}
}
app.ready(()=>{
	app.avoidNull(toggleButtonWrapper)
	app.avoidNull(positionMainNav)
	app.avoidNull(scrollToSection)
	app.avoidNull(positionNav)
})
app.resize(()=>{
	app.avoidNull(positionNav)
})