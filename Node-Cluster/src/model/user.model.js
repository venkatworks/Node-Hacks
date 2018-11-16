function userModel(_userId,_id,_title,_body){
    let user = '';
    this.user = {
        userId:_userId,
        id:_id,
        title:_title,
        body:_body
    }
    return user;
}

module.exports = userModel;