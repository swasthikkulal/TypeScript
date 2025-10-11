type Apiresponses = {data:any , status:"success"} |{message:string, status:"error"}

function handleResponse(response: Apiresponses) {
   if (response.status === "success") {
    console.log("Data recived", response.data)
   }
   else{
    console.log("Error found", response.message)
   }
}
const successResponse:Apiresponses ={data:{user:"swasthik", id:1}, status:"success"}
const errorResponse:Apiresponses = {message:"error", status:"error"}

handleResponse(successResponse)
handleResponse(errorResponse)