import ArrayBufferConverter, {getBuffer} from '../ArrayBufferConverter';

const buffer = getBuffer();

test('Проверка метода load()', () => {
    ArrayBufferConverter.load(buffer);
    expect(ArrayBufferConverter.buffer).toBe(buffer);
});

test("Проверка метода toString()", () => {
    const dataString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    expect(ArrayBufferConverter.toString()).toBe(dataString);
});