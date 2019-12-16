let select = 'block';
switch(select) {
  case 'block':
    console.log('block');
    break;
  case 'none':
    console.log('none');
    break;
  case 'inline':
    console.log('inline');
    break;
  case 'other':
    console.log('other');
    break;
}

let a = 'hidden';
a === 'hidden' ? a = 'visible' : a = 'hidden';

let b = -1;
b === 0 ? b = 1 : b < 0 ? b = 'less then zero' : b > 0 ? b *= 10 : false;

