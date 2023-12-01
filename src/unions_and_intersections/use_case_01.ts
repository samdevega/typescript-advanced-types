(() => {
type ErrorApiResponse = {
  status: 'error',
  message: string
}
type SuccessApiResponse = {
  status: 'ok',
  data: []
  total: number
  page: number
  limit: number
}


// Without union
type ApiResponse = {
  status: string
  data?: []
  message?: string
}

function handleResponseWithoutUnion(response: ApiResponse) {
  if (response.status === 'error') {
    console.error(response.message)
  } else {
    console.log(response.data)
  }
}


// With union
function handleResponseWithUnion(response: ErrorApiResponse | SuccessApiResponse) {
  if (response.status === 'error') {
    console.error(response.message)
  } else {
    console.log(response.data)
  }
}

})()