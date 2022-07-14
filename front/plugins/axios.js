const handleOnError = (err) => {
  console.log("Axios.onError start")

  // Errorページに飛ばしたいならこれ
  // https://axios.nuxtjs.org/helpers/
  // nuxtError({
  //   statusCode: err.response.status,
  //   message: err.message
  // })
}

export default function ({ $axios, error: nuxtError }) {
  $axios.onError(handleOnError);
}
