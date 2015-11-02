module.exports = {
  letterGrader: function(score) {
    if (score >= 90) return 'A';
    else if (score >= 80) return 'B';
    else if (score >= 70) return 'C';
    else if (score >= 60) return 'D';
    else if (score <= 59) return 'F';
  },
  averageScore: function(scores) {
    var total = 0;
  	scores.forEach(function(num) { total += num; });
    return Math.floor(total / scores.length);
  },
  medianScore: function(scores) {
    scores = scores.sort(function(a, b) { return a - b; });
    if (scores.length % 2 !== 0) return scores[Math.floor((scores.length / 2))];
    else return scores[scores.length / 2];
  },
  modeScore: function(scores) {
    scores = scores.sort(function(a, b) { return a - b; });
    for (var i = 0; i < scores.length; i++) {
      if (scores[i] === scores[i + 3]) return scores[i];
      else if (scores[i] === scores[i + 2]) return scores[i];
      else if (scores[i] === scores[i + 1]) return scores[i];
    }
  }
};
