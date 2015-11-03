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
    return Math.round(total / scores.length);
  },
  medianScore: function(scores) {
    scores = scores.sort(function(a, b) { return a - b; });
    if (scores.length % 2 !== 0) {
      return scores[Math.round((scores.length / 2))];
    } else {
      m1 = scores[(scores.length / 2) - 1];
      m2 = scores[(scores.length / 2)];
      return Math.round((m1 + m2) / 2);
    }
  },
  modeScore: function(scores) {
    scores = scores.sort(function(a, b) { return a - b; });
    var mode = 0;
    for (var i = 0; i < scores.length; i++) {
      for (var j = 0; j < i; j++) {
        if (scores[j] === scores[i]) mode = scores[j];
      }
    }
  return mode;
  }
};
