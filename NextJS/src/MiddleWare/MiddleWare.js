
const localStorageMiddleware = ({ getState }) => (next) => (action) => {
    const result = next(action)
    localStorage.setItem('userData', JSON.stringify(getState()));
    return result
};

export default localStorageMiddleware

// const localStorageMiddleware = ({ getState }) => {
//     try {
//         return (next) => (action) => {
//             const result = next(action)
//             localStorage.setItem('userData', JSON.stringify(getState()));
//             return result
//         }
//     }
//     catch (err) {
//         console.log(err);
//         return (next) => (action) => {
//             const result = next(action)
//             return result
//         }
//     }
// };

// export default localStorageMiddleware