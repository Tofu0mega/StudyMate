export const GETDATA=async (Endpoint)=>{
  try{

    const response= await fetch("http://localhost:3000/"+Endpoint,{
      method: `Get`,
      headers:{
        'Content-Type':'application/json'
      },
    })
    
    return response
  }catch(e){
    console.log(e)
  }
}

export const POSTDATA=async(Endpoint,data)=>{
  try{
    const response = await fetch("http://localhost:3000/"+Endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    return response
  }catch(e){
    console.log(e)
  }

}