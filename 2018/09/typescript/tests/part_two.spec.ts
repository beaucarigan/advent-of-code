import { read } from 'aoclib';
import { expect } from 'chai';
import { day, results, year } from '../../typescript';
import { runner } from '../part_two';

describe(`${year} - Day ${day} - Part Two`, () => {
	it(`should resolve to ${results.two.input} when using the input`, async () => {
		expect(await runner((await read(year, day)()).input)).to.equal(results.two.input);
	});
});
