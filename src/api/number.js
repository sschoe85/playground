export async function getNumber() {
    const response = await fetch("http://numbersapi.com/42");
    if(!response.ok){
        throw new Error(response.status);
    }
    const data = await response.text();
    return data;
}   