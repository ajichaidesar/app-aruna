export async function getQuestions(): Promise<any> {
 
  const response = await fetch(`http://localhost:5000/question`); // Gunakan URL langsung
  const data = await response.json();
  return data;
}