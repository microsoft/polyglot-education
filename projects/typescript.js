// class for terminal colors
var Colors = /** @class */ (function () {
    function Colors() {
    }
    Colors.Reset = "\x1b[0m";
    Colors.Bright = "\x1b[1m";
    Colors.Dim = "\x1b[2m";
    Colors.Underscore = "\x1b[4m";
    Colors.Blink = "\x1b[5m";
    Colors.Reverse = "\x1b[7m";
    Colors.Hidden = "\x1b[8m";
    Colors.FgBlack = "\x1b[30m";
    Colors.FgRed = "\x1b[31m";
    Colors.FgGreen = "\x1b[32m";
    Colors.FgYellow = "\x1b[33m";
    Colors.FgBlue = "\x1b[34m";
    Colors.FgMagenta = "\x1b[35m";
    Colors.FgCyan = "\x1b[36m";
    Colors.FgWhite = "\x1b[37m";
    Colors.BgBlack = "\x1b[40m";
    Colors.BgRed = "\x1b[41m";
    Colors.BgGreen = "\x1b[42m";
    Colors.BgYellow = "\x1b[43m";
    Colors.BgBlue = "\x1b[44m";
    Colors.BgMagenta = "\x1b[45m";
    Colors.BgCyan = "\x1b[46m";
    Colors.BgWhite = "\x1b[47m";
    return Colors;
}());
// print message to console as green text
function printGreen(message) {
    console.log(Colors.FgGreen + message + Colors.Reset);
}
// print message to console as red text
function printRed(message) {
    console.log(Colors.FgRed + message + Colors.Reset);
}
function describe(suiteName, fn) {
    fn();
}
function it(testName, testFunction) {
    console.log("TEST: ".concat(testName));
    testFunction();
}
var Expect = /** @class */ (function () {
    function Expect(actual) {
        this.actual = actual;
    }
    Expect.prototype.toBe = function (expected) {
        if (this.actual !== expected) {
            printRed('Test failed');
            printRed("".concat(this.actual, " is not equal to ").concat(expected));
        }
        else {
            printGreen('Test passed');
        }
    };
    return Expect;
}());
function expect(actual) {
    return new Expect(actual);
}
describe('My test suite', function () {
    it('should_pass', function () {
        expect(true).toBe(true);
    });
    it('should_fail', function () {
        expect(true).toBe(false);
    });
});
