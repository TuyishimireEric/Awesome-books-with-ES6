const displayList = () => {
  document.querySelector('.addbook').style.display = 'none';
  document.querySelector('.table-section').style.display = 'block';
  document.querySelector('.contact').style.display = 'none';
};
const displayAdd = () => {
  document.querySelector('.addbook').style.display = 'block';
  document.querySelector('.table-section').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
};
const displayContact = () => {
  document.querySelector('.addbook').style.display = 'none';
  document.querySelector('.table-section').style.display = 'none';
  document.querySelector('.contact').style.display = 'block';
};

export { isplayList, displayAdd, displayContact };
