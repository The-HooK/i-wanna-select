var elmt = document.getElementsByClassName('SansSelectionTexte');
for (i = 0; i < elmt.length; i++) {
  elmt[i].style.mozUserSelect = '-moz-text';
  elmt[i].style.webkitUserSelect = 'text';
  elmt[i].style.webkitTouchCtextout = 'text';
  elmt[i].style.khtmlUserSelect = 'text';
  elmt[i].style.msUserSelect = 'text';
  elmt[i].style.userSelect = 'text';
  console.log('Now you can select what ever you want ! ;)');
}
