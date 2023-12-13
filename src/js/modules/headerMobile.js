export function testEvt(evt) {
  document.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(event.target);

  })

}