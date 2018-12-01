import request from 'supertest';
import app from '../app';

describe('Orçamento', function() {

	describe('POST: /api/orcamento', function() {
		it('should return an array of lanches', function(done) {
			request(app)
				.post('/api/orcamento')
				.send({
					'pedido': [
						{
							'nome': 'queijo',
							'quantidade': 1
						}, {
							'nome': 'alface',
							'quantidade': 1
						}
					]
				})
				.expect(200)
				.expect('Content-Type', /json/)
				.expect({
					'promocoes': [
						'fit'
					],
					'total': 1.9,
					'desconto': 0.19,
					'pagar': 1.71
				})
				.end(done);
		});
	});
  
});