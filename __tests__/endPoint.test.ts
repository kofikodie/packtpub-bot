import { PacktPubClient } from '../src/Service/PacktPub/PacktPubClient';

const packtPubClient = new PacktPubClient();
test('todays offer', () => {
    expect.assertions(1);
    return packtPubClient.fetchTodayOffer().then((data) => expect(data).not.toBeNull());
});
