const fetchStudies = async () => {
  const url = 'https://master.do.castoredc.com/api/study';
  try {
   let response = await fetch(url, {
       headers: {
         "Authorization": "Bearer 1e6db28f4dabc0591ec8375722be707f46bda664"
			}
    });
    if (response.ok) {
      let jsonResponse = await response.json();
      return jsonResponse;
    }

  } catch(error) {
    console.log(error)
  }
};

export default fetchStudies;
