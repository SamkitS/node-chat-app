var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
it('should generate the correct message object', () => {
    var from = 'Samkit';
    var text = 'Ssup bro ?'
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from,text});

})
});

describe('generateLocationMessage', () => {
    it('should generate correct location message', () => {
        var from = 'Samkit';
        var latitude = 1;
        var longitude = 1;
        
        var locationMessage = generateLocationMessage(from, latitude, longitude);

        expect(locationMessage.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
    });
});