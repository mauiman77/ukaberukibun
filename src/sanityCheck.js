function exist(check) {
  const checkExists = document.querySelector(check);
  if (checkExists) {
    return true;
  }

  return false;
}

function trimSpace(string) {
  return '';
}

export { exist, trimSpace };
