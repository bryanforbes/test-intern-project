import { beforeEach, suite, test } from 'intern!tdd';
import * as assert from 'intern/chai!assert';
import Thinger from 'test-intern-project/thinger';

suite('Thinger', () => {
	let thinger: Thinger;

	beforeEach(() => {
		thinger = new Thinger();
	});

	test('#foo', () => {
		assert.doesNotThrow(() => {
			thinger.foo();
		});
	});
});
