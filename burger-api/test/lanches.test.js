import request from 'supertest';
import app from '../app';
import * as dataTest from '../utils/data.json';

describe('Lanches', function() {

	describe('GET: /api/lanches', function() {
		it('should return an array of lanches', function(done) {
			request(app)
				.get('/api/lanches')
				.expect(200)
				.expect('Content-Type', /json/)
				.expect(dataTest.lanches)
				.end(done);
		});
	});
  
});