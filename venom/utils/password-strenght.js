export function passwordStrength(password) {

  var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g")
  var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g")
  var enoughRegex = new RegExp("(?=.{6,}).*", "g")

  if (password.length == 0) {
  } else if (false == enoughRegex.test(password)) {
    return {
      className: 'helper--color-dark',
      content: 'fraco',
      number: 0
    }
  } else if (strongRegex.test(password)) {
    return {
      className: 'helper--color-green',
      content: 'forte',
      number: 3
    }
  } else if (mediumRegex.test(password)) {
    return {
      className: 'helper--color-yellow',
      content: 'médio',
      number: 2
    }
  } else {
    return {
      className: 'helper--color-red',
      content: 'fraco',
      number: 1
    }
  }
}