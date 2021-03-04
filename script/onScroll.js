var onScroll = () => {
  let element = document.querySelectorAll('.reveal')
  for(let i=0; i < element.length; i++) {
    let height = window.innerHeight
    let view = element[i].getBoundingClientRect().top
    let point = 120
    if(view < height-point) {
      element[i].classList.add('vanish')
    }
    else {
      element[i].classList.remove('vanish')
    }
  }
}
