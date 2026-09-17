const checkLogin = require('./login');

test('Kiem tra dang nhap dung thong tin', () => {
    expect(checkLogin('admin', '123')).toBe(true);
});
