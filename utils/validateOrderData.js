import isEmpty from "./is-empty";


function validateOrderData(data){
    let message = "";
    if(isEmpty(data.username)){
        message = "please enter your name"
    }
    if(isEmpty(data.mobile)){
        message = "please enter your mobile number";
    }
    if(isEmpty(data.orderInfo)){
        message = "please enter a valid order";
    }
    return {
        isValid: isEmpty(message),
        message
    }
}

export default validateOrderData

