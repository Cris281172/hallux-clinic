import Cookies from 'js-cookie'
import callToAPI from "../../api";
const setUserInfo = () => {
    const randomSymbolsArray = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
    let id = ''
    for(let i = 0; i <= 40; i++){
        id += randomSymbolsArray[Math.floor(Math.random() * randomSymbolsArray.split('').length)]
    }
    if(Cookies.get('cookie-id')){
        return
    }
    else{
        Cookies.set('cookie-id', id)
        callToAPI('/log/set', 'post', {
            cookieID: id
        })
    }
}
export default setUserInfo;