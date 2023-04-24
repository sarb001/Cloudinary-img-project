

import React, { useState } from 'react'
import  axios from 'axios';

const Uploadfile = () => {

    const [inputchange,setinputchange] = useState('');
    const [previewimg,setpreviewimg] = useState(''); 
    const [selectedfile,setselectedfile] = useState('');

    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [image,setimage] = useState('')


   const changeimagehandler = (e) => {
        const file = e.target.files[0];
        console.log('file is --',file);
        previewfile(file);
   }

   const previewfile = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        setpreviewimg(reader.result)
        setimage(file);
      }
   }


   const handlesubmitform = async(e) => {
        e.preventDefault(); 

        console.log('form name is ',name) ;
        console.log('form is email',email) ;
        if(!previewimg) return;

        console.log('preeee -',previewimg);

         const myform = new FormData();
         console.log(' Before form is --',myform);

          myform.append('name',name);
          myform.append('email',email);
          myform.append('file',image);

        // uploadimg(myform);
        
          if(!name ||!email ||!image){
            console.log(' RRRRRR ');
          }

        try{
          const  { data } = await axios.post('/api/upload/img' , 
            {name,email,image}
          ,
            { headers : {
              'Content-type' : 'multipart/form-data',
            }
        })
          console.log({message : ' Registered Successd '});

        }catch(error){
          console.log('error is --',error);
        }
   }

  //  const uploadimg = async(myform) => {
  //       console.log('code is -----',myform);
  //       try{
  //         const datamain =   await fetch('/api/upload/img' , {
  //               method : "POST",
  //               body : JSON.stringify({data : myform}),
  //               headers : {
  //                   'Content-type' : 'application/json'
  //               }
  //           })  
  //       }catch(error){
  //           console.log('error is -',error);
  //       }
  //  }

  return (
    <div>
        <h1>  Images Uploaded  </h1>
        <form onSubmit = {handlesubmitform} encType = 'multipart/form-data' >

                    <label htmlFor="name"> Name - </label>
                    <input type = "text"  name = "name" value = {name} placeholder = 'Enter name' 
                     onChange={(e) =>  setname(e.target.value)} />

                    <br />
                    <br />

                    <label htmlFor = "email"> Email - </label>
                    <input type = "email"  name = "email" value = {email} placeholder = 'Enter Email' 
                      onChange={(e) =>  setemail(e.target.value)} />

                    <br />
                    <br />

             <input type = "file" name = "file" alt = "img" value = {inputchange}  
             onChange = {changeimagehandler}  />
             { previewimg && (
                <img src  = {previewimg}  alt = 'choosed-img'   style = {{width : '150px',height: '150px'}} />
             )}
             <button type = "submit"> Submit  </button>
        </form>
    </div>
  )
}

export default Uploadfile