function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

const buttons = document.querySelectorAll('.workbutton')

const contents = document.querySelectorAll('.trabalho')

buttons.forEach((button, btnIdx) => {
  button.addEventListener('click', () => {
    contents[btnIdx].style.display = 'block'
    contents.forEach((content, ctnIdx) => {
      if (ctnIdx !== btnIdx) {
        content.style.display = 'none'
      }
    })
    button.style.borderBottom = 'double 2px #00d1e0'
    buttons.forEach((button, btnsIdx) => {
      if (btnsIdx !== btnIdx) {
        button.style.borderBottom = 'none'
      }
    })
  })
})

//function scrollWin(x, y) {
//  Document.body.experience.tab.scrollBy(x, y)
//}
