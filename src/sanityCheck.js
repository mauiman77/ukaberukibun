function exist (check) {
  const checkExists = document.querySelector(check)
  if (checkExists) {
    return true
  }
  else {
    return false
  }
}

export {exist}