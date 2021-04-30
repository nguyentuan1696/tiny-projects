const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

/*
1. Khi click vao 1 panel
2. Chay vong lap tat ca cac items de xoa trang thai active
3. Add trang thai active vao panel vua click

function removeActiveClasses
1. Chay vong lap tat ca phan tu 
2. Xoa class actve o tat ca cac phan tu

*/