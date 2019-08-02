
module.exports = {
  get: (url) => {
      if (url === "http://localhost:5000/user/name/valid/valid"){
    return Promise.resolve({data:{Status : "Logged In"}});
  }
  else
  {
    return Promise.resolve({data:{Status : "Not Logged In"}});
  }
  },


  post: (url, body) => {

  if (body.username==='invalid'){
  
  return Promise.resolve({data:{username:"Username field is required"}});
  }
  if (body.email==='invalid'){
  
    return Promise.resolve({data:{email:"Email field is required"}});
    }
}

  
};