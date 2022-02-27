const googleDatabase = [
    'cats.com',
    'flowers.com',
    'icreams.com',
    'catpictures.com',
    'myfavoritescats.com',
    'souprecipes.com'
];

const googleSearch = (searchInput, db) => {
    const matches = db.filter(website => {
        return website.includes(searchInput);
    })
    return matches.length > 3 ? matches.slice(0,3) : matches
}

module.exports = googleSearch;