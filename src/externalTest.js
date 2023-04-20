const helloWorld = (() => {
  const sayHello = () => {console.log("Hello World!")}
  return {sayHello}
})()

export {helloWorld}