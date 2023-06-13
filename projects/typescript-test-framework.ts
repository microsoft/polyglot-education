// class for terminal colors
class Colors {
    public static readonly Reset = "\x1b[0m";
    public static readonly Bright = "\x1b[1m";
    public static readonly Dim = "\x1b[2m";
    public static readonly Underscore = "\x1b[4m";
    public static readonly Blink = "\x1b[5m";
    public static readonly Reverse = "\x1b[7m";
    public static readonly Hidden = "\x1b[8m";

    public static readonly FgBlack = "\x1b[30m";
    public static readonly FgRed = "\x1b[31m";

    public static readonly FgGreen = "\x1b[32m";
    public static readonly FgYellow = "\x1b[33m";
    public static readonly FgBlue = "\x1b[34m";
    public static readonly FgMagenta = "\x1b[35m";
    public static readonly FgCyan = "\x1b[36m";
    public static readonly FgWhite = "\x1b[37m";

    public static readonly BgBlack = "\x1b[40m";
    public static readonly BgRed = "\x1b[41m";
    public static readonly BgGreen = "\x1b[42m";
    public static readonly BgYellow = "\x1b[43m";
    public static readonly BgBlue = "\x1b[44m";
    public static readonly BgMagenta = "\x1b[45m";
    public static readonly BgCyan = "\x1b[46m";
    public static readonly BgWhite = "\x1b[47m";
}

// print message to console as green text
function printGreen(message: string) {
    console.log(Colors.FgGreen + message + Colors.Reset);
}

// print message to console as red text
function printRed(message: string) {
    console.log(Colors.FgRed + message + Colors.Reset);
}

function describe(suiteName, fn){
    fn();
} 

function it(testName, testFunction) {
    console.log(`TEST: ${testName}`);
    testFunction();
}

class Expect {
    private actual: any;
    constructor(actual) {
        this.actual = actual;
    }
    toBe(expected) {
        if (this.actual !== expected) {
            printRed('Test failed');
            printRed(`${this.actual} is not equal to ${expected}`);
        } else {
            printGreen('Test passed');
        }
    }
}

function expect(actual) {   
    return new Expect(actual);   
}

describe('My test suite', () => {
    it('should_pass', () => {

        expect(true).toBe(true);
    });

    it('should_fail', () => {
        expect(true).toBe(false);
    });
});

