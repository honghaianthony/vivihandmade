import jwt_decode from 'jwt-decode';
import cookies from 'js-cookie';

export const useRole = () => {
	const token = cookies.get('token');
	try {
		const info = jwt_decode(token);
		return info.role;
	} catch (error) {
		return -1;
	}
};
