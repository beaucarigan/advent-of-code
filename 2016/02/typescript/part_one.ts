import { bench, read } from 'aoclib';
import { Coord } from '@lib/model/coord.class';
import { Direction } from '@lib/model/direction.class';
import { day, year } from '../typescript';

export const runner = (input: string) =>
	input
		.split(', ')
		.reduce(
			(acc, next) => {
				if (next[0] === 'R') acc.direction = acc.direction.right();
				if (next[0] === 'L') acc.direction = acc.direction.left();
				acc.position.add(acc.direction, Number(next.substring(1)));
				return acc;
			},
			{ position: Coord.ORIGO, direction: Direction.NORTH }
		)
		.position.manhattan(Coord.ORIGO);

if (require.main === module) {
	(async () => console.log(`Result: ${await bench(read(year, day), runner)}`))(); // 300 ~0.37ms
}
