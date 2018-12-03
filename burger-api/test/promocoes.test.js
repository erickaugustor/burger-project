import chai from 'chai';

import promocao from '../services/promocoes';

describe('Function: Promoções Limite', function() {
	it('should return the actual number that you have to pay for', function() {
		chai.expect(promocao(1, 3)).to.equal(1);
		chai.expect(promocao(2, 3)).to.equal(2);
		chai.expect(promocao(3, 3)).to.equal(2);
		chai.expect(promocao(4, 3)).to.equal(3);
		chai.expect(promocao(5, 3)).to.equal(4);
		chai.expect(promocao(6, 3)).to.equal(4);
		chai.expect(promocao(7, 3)).to.equal(5);
		chai.expect(promocao(8, 3)).to.equal(6);
		chai.expect(promocao(9, 3)).to.equal(6);
	});

	it('should return the actual number that you have to pay for', function() {
		chai.expect(promocao(1, 4)).to.equal(1);
		chai.expect(promocao(2, 4)).to.equal(2);
		chai.expect(promocao(3, 4)).to.equal(3);
		chai.expect(promocao(4, 4)).to.equal(3);
		chai.expect(promocao(5, 4)).to.equal(4);
		chai.expect(promocao(6, 4)).to.equal(4);
		chai.expect(promocao(7, 4)).to.equal(5);
		chai.expect(promocao(8, 4)).to.equal(5);
		chai.expect(promocao(9, 4)).to.equal(6);
	});
});