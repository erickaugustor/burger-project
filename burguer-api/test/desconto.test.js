import chai from 'chai';

import desconto from '../services/desconto';

describe('Desconto', function() {

	describe('Function: Desconto', function() {
		it('should return the discount amout', function() {
			chai.expect(desconto(['bacon'])).to.equal(1);
			chai.expect(desconto(['bacon', 'ovo'])).to.equal(1);
			chai.expect(desconto(['bacon', 'alface'])).to.equal(1);
			chai.expect(desconto(['ovo', 'alface'])).to.equal(0.9);
			chai.expect(desconto(['hambuguer', 'alface'])).to.equal(0.9);
		});
	});
  
});