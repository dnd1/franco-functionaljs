function getShortMessages(messages){
    results = [];
    results = messages.filter(x => x.message.length < 50).map(y => y.message);
    return results;
}

module.exports = getShortMessages