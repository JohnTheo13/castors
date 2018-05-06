const fetchStudies = async () => {
  const url = 'https://master.do.castoredc.com/api/study';

  try {
   let response = await
   fetch(url,
     {
       headers: {
         "Authorization": "Bearer f4ecb02c14e5d8edcc0208dffcee1175118005bb"
			}});
    if (response.ok) {
      let jsonResponse = await response.json()
      return jsonResponse;
    }

  } catch(error) {
    console.log(error)
  }
};

export default fetchStudies;
