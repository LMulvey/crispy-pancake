const describe = item => `That ${item} is crispy.`;

module.exports = {
  pancake: () =>  describe('pancake'),
  waffle: () => describe('waffle')
};

