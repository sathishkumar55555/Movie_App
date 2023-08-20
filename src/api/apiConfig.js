const apiConfig = {
    baseUrl : 'https://api.themoviedb.org/3/',
    apiKey : 'd507529863b3d09c89fd6821c41f393c',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}


export default apiConfig;