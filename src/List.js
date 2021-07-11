import React from 'react';


const List = ({people}) => {

  return (
    <>
     {people.map((person)=>{
       const{id,name,age,image,content}=person;
        return(
          <article key={people.id} className="person">
            <img className="list-img" src={image} alt={name} />
            <p className="age">{age} years old</p>
            <p className="name">{name}</p>
            <p className="cont">{content}</p>
          </article>
         )
       
     })} 
    </>
  );

};

export default List;
