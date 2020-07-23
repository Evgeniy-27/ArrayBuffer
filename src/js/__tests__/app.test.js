import ArrayBufferConverter, {getBuffer} from '../app';

const buffer = getBuffer();

test('Проверка метода load()', () => {
    ArrayBufferConverter.load(buffer);
    expect(ArrayBufferConverter.buffer).toEqual(buffer);
});

test("Проверка метода toString()", () => {
    const dataString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    expect(ArrayBufferConverter.toString()).toBe(dataString);
});