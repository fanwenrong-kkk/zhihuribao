function hi() {
    today=new Date();
    var day; var date; var hi;
    hour=new Date().getHours()
    if(hour < 9)hello='早上好，'
    else if(hour < 12)hi='上午好，'
    else if(hour < 14)hi='中午好，'
    else if(hour < 17)hi='下午好，'
    else if(hour < 22)hi='晚上好，'
    else {hi='夜深了，'}
    var webUrl = webUrl;
    document.write(' '+hi);
}