import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = ()=>{
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState('default user');
    const [img, setImg] = useState([]);
    const [blog, setBlog] = useState([]);
    const [bio, setBio] = useState([]);

    useEffect(() =>{
        fetch(url)
          .then((resp) =>{
              if(resp.status >= 200 && resp.status <= 299){
                  return resp.json();
              }else{
                setIsLoading(false);
                setIsError(true);
                throw new Error(resp.statusText);
              }
          })
          .then((user) => {
              const {login, avatar_url, blog, bio} = user;
              setUser(login);
              setImg(avatar_url);
              setBlog(blog);
              setBio(bio);
              setIsLoading(false);
          })
          .catch((error) => console.log(error));
    },[]);

    if(isLoading){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    if(isError){
        return(
            <div>
                <h1>Error...</h1>
            </div>
        );
    }

    return(
        <>
        <h1>{user}</h1>
        <div>
            <img src={img} alt={user}/>
            <p>{bio}</p>
            <p>{blog}</p>
        </div>
        </>
    );
};

export default MultipleReturns;