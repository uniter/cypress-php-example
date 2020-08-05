/*
 * This is just a standard JS spec - check out "my_php_spec.php" for the good stuff!
 */

describe('My First JS Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true);
    });

    it('should fail', function () {
        expect(true).to.equal(false);
    });
});
