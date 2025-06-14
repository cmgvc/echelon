function getCyclePhase(periodStart, cycleLength = 28) {
  const now = new Date();
  const start = new Date(periodStart);
  const dayDiff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  const dayInCycle = dayDiff % cycleLength;

  if (dayInCycle <= 4) return 'Menstrual';
  if (dayInCycle <= 13) return 'Follicular';
  if (dayInCycle === 14) return 'Ovulation';
  return 'Luteal';
}

module.exports = { getCyclePhase };
