export const ajax = async (path, options = {}) => {
    const endpoint = "https://www.gochiusa.fun/api/v2.0";
    const response = await fetch(`${endpoint}${path}`, options);
    return await response.json();
};
