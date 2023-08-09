// pesan.api.tsx

import Pesan from '../types/pesan.type';


export async function postPesan(data: Pesan) {
  const response = await fetch(`http://localhost:5000/pesan`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();
  return responseData;
}
