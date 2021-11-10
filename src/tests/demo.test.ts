test('should be true', () => {
    const isActive = true;

    if (!isActive) {
        throw  new Error('Is not active');
    }
})


export {
    // Use an empty export to please Babel's single file emit.
    // https://github.com/Microsoft/TypeScript/issues/15230
}