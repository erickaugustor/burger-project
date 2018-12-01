import request from 'supertest';
import app from '../app';
import * as dataTest from '../utils/data.json';

describe('Ingredientes', function() {

	describe('GET: /api/ingredientes', function() {
		it('should return an array of ingredients', function(done) {
			request(app)
				.get('/api/ingredientes')
				.expect(200)
				.expect('Content-Type', /json/)
				.expect(dataTest.ingredientes)
				.end(done);
		});
	});
  
});