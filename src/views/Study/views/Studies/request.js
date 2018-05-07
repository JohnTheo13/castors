const TOKEN = '4dc677a2e795ca0ec1ce0affdeed6f4090a91438'

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

const fetchInstitutes = async (studyId) => {
  const url = `https://master.do.castoredc.com/api/study/${studyId}/institute`;
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

const addRecord = async (studyId, institute_id) => {
  const url = `https://master.do.castoredc.com/api/study/${studyId}/record`;
  try {
   let response = await fetch(url, {
         method: 'POST',
         body: JSON.stringify({ institute_id: institute_id }),
         headers: {
           "Authorization": `Bearer ${TOKEN}`
  			}
    });
    if (response.ok) {
      console.log(response);
      // let jsonResponse = await response.json();
      // return jsonResponse;
    }
    return response;
  } catch(error) {
    console.log(error)
  }
};

export  { fetchStudies, fetchRecords, fetchInstitutes, addRecord };
