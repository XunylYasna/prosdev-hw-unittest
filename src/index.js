const functions = {
  gradeClassifier: (grade) => {
    // TODO: Write code here

    const results = ["O | Oustanding |", "V | Very Good |", "G | Good |", "S | Satisfactory |", "N | Needs Improvement |", "D | Did not Meet Expectation |"]
    var index = (100 - grade) / 5 - 1

    if (index > 5) {
      index = 5
    }

    return results[Math.ceil(index)]
  }
}

module.exports = functions;
