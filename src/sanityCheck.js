function exist(check) {
  const checkExists = document.querySelector(check);
  if (checkExists) {
    return true;
  }

  return false;
}

export default exist;
