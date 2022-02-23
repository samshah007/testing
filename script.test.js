const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'dogpictures.com',
    'cats.com',
    'catspictures.com'
];

describe('googleSearch', () => {
    it('this is a silly test', () => {
        expect('hello').toBe('hello')
    });
    
    it('this is google search', () => {
        expect(googleSearch('testtes', dbMock)).toEqual([]);
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com','dogpictures.com']);
    })
    
    it('work with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    })
    
    it('does not return more then 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    })
})