
import jwt from 'jsonwebtoken';

const TOKEN_KEY = 'reactjs2012';
const saveToken = (token = null) => {
  // save localStorage
  if(token !== null || token !== ''){
    localStorage.setItem('token_login', token);
  }
}
const getTokenLocalStorage = () => {
  let token = localStorage.getItem('token_login');
  return token;
}

const removeToken = () => {
  localStorage.removeItem('token_login');
}

const decryptTokenLocalStorage = () => {
  let token = getTokenLocalStorage();
  let decryptToken = null;
  if(token !== null && token !== ''){
    decryptToken =  jwt.verify(token, TOKEN_KEY);
    if(decryptToken !== null && decryptToken !== ''){
      return decryptToken;
    }
    
  }
  return decryptToken;
}

const isEmptyObject = (obj) => {
  for(let prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return JSON.stringify(obj) === JSON.stringify({});
}

export const helpers = {
  isEmptyObject
}

const checkTrailerVideo = (vidoes) => {
  if(vidoes.hasOwnProperty('results')){
    if(vidoes.results.length > 0){
      return true;
    }
  }
  return false;
}

const isAuthenticated = () => {
  let token = decryptTokenLocalStorage();
  if(token!==null && token!==''){
    return true;
  }
  return false;
}
export const helper = {
  checkTrailerVideo,
  saveToken,
  decryptTokenLocalStorage,
  removeToken,
  isAuthenticated,
  isEmptyObject
}