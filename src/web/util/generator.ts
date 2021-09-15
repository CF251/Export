/**
 * Generates random string
 * @return {String}
 */
export const generateRandomString = () => [...Array(22)].map(() => (~~(Math.random() * 36)).toString(36)).join('');
