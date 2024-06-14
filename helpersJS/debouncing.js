let timer = null

watch(value, (quary) => {
  // Api call will only be done if query length is 2 and a valid AirPort already Selected
  if (quary.length < 2 || isValidAirPortSelected(quary)) return

  // This code will cancel the timer and prevent the Api call message
  clearTimeout(timer)

  timer = setTimeout(async function () {
    options.value = await fetchOptions(quary)
  }, 1500)
})