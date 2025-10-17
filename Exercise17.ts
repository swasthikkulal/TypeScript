type ApiResponse<T>= T extends {error:string}?{success:false, error:string}:{success:true, data:T}

type goodResponse = ApiResponse<{data:string}> 