const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('gradeClassifier', () => {
  it('When grade is 95.00 to 100, then result is return O | Oustanding |', () => {
    var grade = 95.00
    for (var i = 1; i < 50; i++) {
      expect(gradeClassifier(grade)).toEqual("O | Oustanding |")
      grade += 0.1
    }
  });

  it('When grade is 90.00 to 94.99, then result is return V | Very Good |', () => {
    var grade = 90.00
    for (var i = 1; i < 50; i++) {
      expect(gradeClassifier(grade)).toEqual("V | Very Good |")
      grade += 0.1
    }
  });

  it('When grade is 85.00-89.99, then result is return G | Good |', () => {
    var grade = 85.00
    for (var i = 1; i < 50; i++) {
      expect(gradeClassifier(grade)).toEqual("G | Good |")
      grade += 0.1
    }
  });


  it('When grade is 80.00-84.99, then result is return S | Satisfactory |', () => {
    var grade = 80.00
    for (var i = 1; i < 50; i++) {
      expect(gradeClassifier(grade)).toEqual("S | Satisfactory |")
      grade += 0.1
    }
  });

  it('When grade is 75.00-79.99, then result is return N | Needs Improvement |', () => {
    var grade = 75.00
    for (var i = 1; i < 50; i++) {
      expect(gradeClassifier(grade)).toEqual("N | Needs Improvement |")
      grade += 0.1
    }
  });

  it('When grade is 74.99 and below, then result is return D | Did not Meet Expectation |', () => {
    var grade = 75.00
    for (var i = 1; i < 50; i++) {
      grade -= 0.1
      expect(gradeClassifier(grade)).toEqual("D | Did not Meet Expectation |")
    }
  });

});
