const TOKEN = '2c4f50589b415bf5862468319769e89e4985c563'


const fetchStudies = async () => {
  const url = 'https://master.do.castoredc.com/api/study';
  try {
   let response = await fetch(url, {
       headers: {
         "Authorization": `Bearer ${TOKEN}`
			}
    });
    if (response.ok) {
      let jsonResponse = await response.json();
      return jsonResponse;
    }
    return response;
  } catch(error) {
    console.log(error)
  }
};

const fetchRecords = async (studyId) => {
  const url = `https://master.do.castoredc.com/api/study/${studyId}/record`;
  try {
   let response = await fetch(url, {
       headers: {
         "Authorization": `Bearer ${TOKEN}`
			}
    });
    if (response.ok) {
      let jsonResponse = await response.json();
      return jsonResponse;
    }
    return response;
  } catch(error) {
    console.log(error)
  }
};

export  { fetchStudies, fetchRecords };
