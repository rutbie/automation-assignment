export const setCookie = (name: string, value: string) => {
	const cookie = { name, value, path: '/', domain: process.env.DOMAIN }
	return cookie;
}