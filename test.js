# Test
var debugThrowError = false;
if (debugThrowError) {
	// throwing an error at any startup script will cause travis fail
	throw new Error();

}
