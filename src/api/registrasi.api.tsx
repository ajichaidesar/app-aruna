// pesan.api.tsx

import  Registrasi  from '../types/registrasi.type';

export async function postRegistrasi(data: Registrasi) {
  const response = await fetch(`http://localhost:5000/registrasi`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();
  return responseData;
}
