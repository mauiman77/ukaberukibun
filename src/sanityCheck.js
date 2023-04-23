function exist(check) {
  const checkExists = document.querySelector(check);
  if (checkExists) {
    return true;
  }

  return false;
}

function trimSpace(string) {
  return string.replace(/\s/g, '');
}

export { exist, trimSpace };
