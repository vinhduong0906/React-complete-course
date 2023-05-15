export const getAuthToken = () => {
    return localStorage.getItem('loginToken') || null
}
const getDuration = () => {
    const expiration = localStorage.getItem('expiration');
    const expirationTime = new Date(expiration);
    const now = new Date();
    return now.getTime() - expirationTime.getTime();
}
