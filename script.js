let downArrow = document.querySelectorAll('.fa-angle-down')
    let cross = document.querySelectorAll('.fa-xmark')
    let boxes = document.querySelectorAll('.boxes')
    let hidden = document.querySelectorAll('.content :last-child')

    for (let i = 0; i < downArrow.length; i++) {
        // when you click the downArrow
        downArrow[i].addEventListener('click', () => {
            boxes[i].classList.add('open')
            downArrow[i].style = `display: none`
            cross[i].style = `display: block`
            hidden[i].style = `display: block`
        })
    }

    for (let i = 0; i < cross.length; i++) {
        // when you click the cross
        cross[i].addEventListener('click', () => {
            downArrow[i].style = `display: block`
            cross[i].style = `display: none`
            boxes[i].classList.remove('open')
            hidden[i].style = `display: none`
        })
    }