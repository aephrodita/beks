import axios from 'axios';




const authHeader = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token){
        return {Authorization: "Bearer " + user.token}
    }
    else{
        return {};
    }
}

export const Login = async (username, password) => {
    try{
        const response = await axios.post('http://localhost:8091/auth/sign-in', 
            {
                username: username,
                password: password
            },
            { headers: authHeader() }
        )

        localStorage.setItem("user", JSON.stringify(response.data))
        return {success: true, data: "Вы вошли в систему..."}

    }catch(error){
        return {success: false, data: error.response.data};
    }
}

export const signUp = async (username, email, password) => {
    try{
        const response = await axios.post('http://localhost:8091/auth/sign-up',
            {
                email: email,
                password: password,
                username: username
            },
            { headers: authHeader() }
        )
        
        return {success: true, data: "тіркелді"};
        
    }catch(error){
        return {success: false, data: error.response.data};
    }
}



export async function checkAdmin(){
    try{
        const response = await axios.get(`http://localhost:8091/admin`, {headers:authHeader()});
        return {success: true, data: response.data}
    }catch(error){
        return {success: false, data: "у вас нету разрешении"};
    }
}


export async function getOneUser(stuId){
    const response=await axios.get('http://localhost:8091/home/user/'+stuId,{headers:authHeader()});
    return response.data
}

export const getAllCinema = async () => {
    try{
        const response = await axios.get(`http://localhost:8091/cinema`);
        console.log(response)
        return {success: true, data: response.data};
        
    }catch(error){
        return {success: false, data: error.response.data.error};
    }
}

export const getAllMovie = async () => {
    try{
        const response = await axios.get(`http://localhost:8091/movie`);
        console.log(response)
        return {success: true, data: response.data};
        
    }catch(error){
        return {success: false, data: error.response.data.error};
    }
}

export const getAllSeance = async () => {
    try{
        const response = await axios.get(`http://localhost:8091/seance`);
        console.log(response)
        return {success: true, data: response.data};
        
    }catch(error){
        return {success: false, data: error.response.data.error};
    }
}

export const getAllUser = async () => {
    try{
        const response = await axios.get(`http://localhost:8091/user`);
        console.log(response)
        return {success: true, data: response.data};
        
    }catch(error){
        return {success: false, data: error.response.data.error};
    }
}

//One cinema
export const getOneCinema = async (cinemaId) => {
    try{
        const response = await axios.get(`http://localhost:8091/cinema/${cinemaId}`);
        console.log(response)
        return {success: true, data: response.data};
        
    }catch(error){
        return {success: false, data: error.response.data.error};
    }
}

//One movie
export const getOneMovie = async (movieId) => {
    try{
        const response = await axios.get(`http://localhost:8091/movie/${movieId}`);
        console.log(response)
        return {success: true, data: response.data};
        
    }catch(error){
        return {success: false, data: error.response.data.error};
    }
}

//One Seance
export const getOneSeance = async (seanceId) => {
    try{
        const response = await axios.get(`http://localhost:8091/seance/${seanceId}`);
        console.log(response)
        return {success: true, data: response.data};
        
    }catch(error){
        return {success: false, data: error.response.data.error};
    }
}

//One ticket
export const getOneTicket = async (ticketId) => {
    try{
        const response = await axios.get(`http://localhost:8091/ticket/${ticketId}`);
        console.log(response)
        return {success: true, data: response.data};
        
    }catch(error){
        return {success: false, data: error.response.data.error};
    }
}

export const buyTicket = async (ticketId, userId) => {
    try{
        console.log(userId, ticketId)
        const response = await axios.put(`http://localhost:8091/ticket/${ticketId}/user/${userId}`,{headers: authHeader()});
        return {success: true, data: response.data};
    }catch(error){
        return {success: false, data: error.response.data.error};
    }
}

//Seances by movie ID
export const getSeanceByMovieId = async (movieId) => {
    try{
        const response = await axios.get(`http://localhost:8091/movie/seance/${movieId}`);
        console.log(response)
        return {success: true, data: response.data};
        
    }catch(error){
        return {success: false, data: error.response.data.error};
    }
}

export const getTicketBySeanceId = async (seanceId) => {
    try{
        const response = await axios.get(`http://localhost:8091/seance/ticket/${seanceId}`);
        console.log(response)
        return {success: true, data: response.data};
        
    }catch(error){
        return {success: false, data: error.response.data.error};
    }
}


export async function addMovie(movie){
    try {
        const response = await axios.post('http://localhost:8091/movie', movie);
        return {success: true, data: response.data};
    }catch(error){
        return {success: false, data: error.response.data.error};
    }
}

export async function addSeance(seance){
    try {
        const response = await axios.post('http://localhost:8091/seance', seance);
        return {success: true, data: response.data.message};
    }catch(error){
        return {success: false, data: error.response.data.error};
    }
}

export const updateMovie = async (movie) => {
    try{
        const response = await axios.put(`http://localhost:8091/movie/${movie.id}/edit`, movie, { headers: authHeader()});
        console.log(response)
        return {success: true, data: response.data};

    }catch(error){
        return {success: false, data: error.response.data.error};
    }
}

export const deleteMovie = async (movieId) => {
    try{
        const response = await axios.delete(`http://localhost:8091/movie/${movieId}`);
        return {success: true, data: response.data};
        
    }catch(error){
        return {success: false, data: error.response.data.error};
    }
}
