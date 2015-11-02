var chai = require('chai');
var expect = chai.expect;
var code = require('../js/grader.js');

describe('Letter Grader', function() {
  it('99 should equal an A', function() {
    expect(code.letterGrader(99)).to.equal('A');
  });
  it('89 should equal a B', function() {
    expect(code.letterGrader(89)).to.equal('B');
  });
  it('79 should equal a C', function() {
    expect(code.letterGrader(79)).to.equal('C');
  });
  it('69 should equal a D', function() {
    expect(code.letterGrader(69)).to.equal('D');
  });
  it('59 should equal a D', function() {
    expect(code.letterGrader(59)).to.equal('F');
  });
});

describe('Average Score', function() {
  it('Should return 83', function() {
    expect(code.averageScore([90, 95, 87, 60])).to.equal(83);
  });
  it('Should return 78', function() {
    expect(code.averageScore([52, 80, 80, 86, 94])).to.equal(78);
  });
  it('Should return 89', function() {
    expect(code.averageScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).to.equal(89);
  });
});

describe('Median Score', function() {
  it('should return the average score of 92', function() {
    expect(code.medianScore([90, 95, 88, 60])).to.equal(92);
  });
  it('should return the average score of 86', function() {
    expect(code.medianScore([52, 80, 80, 86, 94])).to.equal(86);
  });
  it('should return the average score of 92', function() {
    expect(code.medianScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).to.equal(92);
  });
});

describe('Mode Score', function() {
  it('shoud return the mode of 85', function() {
    expect(code.modeScore([52, 52, 85, 85, 85, 91])).not.to.equal(52);
    expect(code.modeScore([52, 52, 85, 85, 85, 91])).to.equal(85);
  });
  it('shoud return the mode of 92', function() {
    expect(code.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).to.equal(92);
  });
  it('shoud return the mode of 72', function() {
    expect(code.modeScore([91, 72, 72, 83, 95])).to.equal(72);
  });
});
