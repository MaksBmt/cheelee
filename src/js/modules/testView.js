export default class TestView {
  testEvent() {
    document.addEventListener('click', (e) => {
      console.log(e.target);

    })
  }
}