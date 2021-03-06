<?php

use MyCompany\Cypress\MyLib\MyHelper;

// You can dump output to the browser console like this
print '[[My debug output]]';

describe('My First PHP Test', function () {
    it('Does not do much either!', function () {
        expect(true)->to->equal(true);
    });

    it('should fail', function () {
        expect(true)->to->equal(false);
    });

    it('should fail with a deeper stack', function () {
        $myClosure = function () {
            expect(true)->to->equal(false);
        };

        $myClosure();
    });

    it('makes sure the helper works', function () {
        // The MyHelper class is pulled in via Composer's autoloader - see /uniter/bootstraps/late.php
        expect(MyHelper::getANumber())->to->equal(21);
    });

    it('should be able to use Uniter plugins', function () {
        // Check whether the preg_* plugin was installed (see /uniter.config.js)
        expect(function_exists('preg_replace'))->to->equal(true);

        // Check whether the eval plugin was installed (see /uniter.config.js)
        expect(eval('return 21 + 4;'))->to->equal(25);
    });

    it('clicking "type" navigates to a new url', function () {
        $cy->visit('https://example.cypress.io');

        $cy->contains('type')->click();

        // Should be on a new URL which includes '/commands/actions'
        $cy->url()->should('include', '/commands/actions');
    });
});
