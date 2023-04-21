import userInterface from './createElement';
import project from './createProject';

const jim = project('JimProject', 'Fake Project', 'soon', 1);

userInterface.initialisePage();
userInterface.newtextArea();
console.log(jim.sayTitle());
