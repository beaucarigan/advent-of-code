use aoclib::Solvable;

#[test]
fn input() -> aoclib::Result<()> {
	let input = aoclib::reader(2019, 9, "input.txt")?;
	assert_eq!(aoc201909::PartOne::solve(&input)?, 0);
	Ok(())
}

#[test]
fn example_1() -> aoclib::Result<()> {
	assert_eq!(aoc201909::PartOne::solve("")?, 0);
	Ok(())
}
