function inRect(rect_params, x, y) {
    if (x < rect_params[0]) {return false}
    if (x > rect_params[0] + rect_params[2]) {return false}
    if (y < rect_params[1]) {return false}
    if (y > rect_params[1] + rect_params[3]) {return false}
    return true
  }