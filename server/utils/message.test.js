var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
it('should generate the correct message object', () => {
    var from = 'Samkit';
    var text = 'Ssup bro ?'
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from,text});

})
})